import {io} from 'socket.io-client';
import React from 'react';
const SOCKED_URL = "http://localhost:5001";
export const socket = io(SOCKED_URL);
//app context
export const AppContext = React.createContext