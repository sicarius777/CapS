// Nav.jsx
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Codex of Worlds</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/worlds">Worlds</a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;

