/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./features/userSlices";
import appApi from "./services/appApi";


// persist our store
import storage from "redux-persist/lib/storage";
import { combineReducers  } from 'redux';
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { use } from '../../mern-chat-backend/routes/userRoutes';
import persistStore from "redux-persist/es/persistStore";

//reducers
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]:appApi.reducer,
});

const persistConfig = {
  key:"root",
  storage,
  blackList: [appApi, reducerPath],
};

//persist our store

const persistedReducer = persistReducer(persistConfig, reducer);

//creating the store 

const store = configureStore({
    reducer: persistedReducer,
    middleware:[thunk, appApi.middleware],
});

export default store;