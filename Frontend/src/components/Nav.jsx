// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>Codex of Worlds</h1>
      <Link to="/worlds" className="nav-link">
        <Button variant="outline-primary" size="m">
          Worlds
        </Button>
      </Link>
      <Link to="/brainstorming" className="nav-link">
        <Button variant="outline-primary" size="m">
          Brain Storming
        </Button>
      </Link>
    </nav>
  );
};

export default Nav;

