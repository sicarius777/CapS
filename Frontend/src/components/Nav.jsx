// Nav.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { UserContext } from './UserContext'; // Import the UserContext
import './Nav.css';

const Nav = () => {
  const userData = useContext(UserContext); // Access the user data from context

  const handleLogout = () => {
    // Call the logout function from UserContext
    userData.logout();
  };

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
      {/* Logout button */}
      <Button variant="outline-danger" size="m" onClick={handleLogout}>
        Logout
      </Button>
    </nav>
  );
};

export default Nav;

