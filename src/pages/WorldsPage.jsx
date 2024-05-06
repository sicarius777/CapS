// WorldsPage.jsx

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Nav';
import Sidebar from '../components/Sidebar';
import WorldList from '../components/WorldList'; // Import WorldList component
import WorldQuotes from '../components/WorldQuotes';
import './WorldsPage.css';

const WorldsPage = () => {
  const [worlds, setWorlds] = useState([]);

  const addWorld = (worldName) => {
    // Logic to add the new world to the state or perform any other action
    setWorlds([...worlds, { name: worldName }]);
  };

  const onSelectWorld = () => {
    // Logic to handle selecting a world
  };

  return (
    <Container fluid className="worlds-page-body">
      <Navbar />
      <div className="worlds-page-content">
        {/* Pass the onAddWorld prop to the Sidebar component */}
        <Sidebar worlds={worlds} onSelectWorld={onSelectWorld} onAddWorld={addWorld} />
        {/* Display the list of saved worlds using the WorldList component */}
        <WorldList worlds={worlds} onSelectWorld={onSelectWorld} />
        {/* Content of the main section */}
        <div className="world-quotes-container">
          <WorldQuotes />
        </div>
      </div>
    </Container>
  );
};

export default WorldsPage;
