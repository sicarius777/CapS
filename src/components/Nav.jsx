import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NewWorldPopup from './NewWorldPopup';
import './Nav.css'; // Import the nav.css file
const Nav = ({ onAddWorld, setWorlds }) => { // Accept setWorlds function as prop
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => setShowPopup(false);
  const handleShowPopup = () => setShowPopup(true);

  const handleAddWorld = (worldData) => {
    // Call onAddWorld function to add the new world
    onAddWorld(worldData);
    // Close the popup
    handleClosePopup();
  };

  return (
    <nav className="navbar">
      <h1>Codex of Worlds</h1>
      <Button variant="outline-primary" size="m" onClick={handleShowPopup}>
        Add World
      </Button>
      <NewWorldPopup show={showPopup} handleClose={handleClosePopup} handleSubmit={handleAddWorld} />
    </nav>
  );
};

export default Nav;
