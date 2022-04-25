/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import {useLogoutUserMutation} from '../services/appApi'
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.png";

function Navigation() {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e){
    e.preventDefault();
    await logoutUser(user);
    //redirect to home page
    window.location.replace("/");
  }

  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <LinkContainer to="/">
      <Navbar.Brand>
        <img src={logo} style={{width:60, height:45}} />
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        {!user && (
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        )}
        <LinkContainer to="/Chat">
          <Nav.Link>Chat</Nav.Link>
        </LinkContainer>
        
        {user && (
        <NavDropdown title={
          <>
            <img src={user.picture} style={{width:30 ,height:30, marginRight:10, objectFit:"cover", borderRadius:"50%"}} /> 
            {user.name}
          </>
        } id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         
          <NavDropdown.Item>
            <Button variant='danger' onClick={handleLogout}>Logout</Button>
          </NavDropdown.Item>
        </NavDropdown>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation