/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.png";

function Navigation() {
  const user = useSelector((state) => state.user);

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
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation