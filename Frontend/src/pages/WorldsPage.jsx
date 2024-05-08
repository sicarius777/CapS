// WorldsPage.jsx

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Nav';
import Sidebar from '../components/Sidebar';
import WorldList from '../components/WorldList';
import WorldQuotes from '../components/WorldQuotes';
import './WorldsPage.css';

const WorldsPage = () => {
  const [worlds, setWorlds] = useState([]);

  const addWorld = (worldName) => {
    setWorlds([...worlds, { name: worldName }]);
  };

  const onSelectWorld = () => {
    // Logic to handle selecting a world
  };

  const onDeleteWorld = (worldToDelete) => {
    setWorlds(worlds.filter(world => world !== worldToDelete));
  };

  return (
    <Container fluid className="worlds-page-body">
      <Navbar />
      <div className="worlds-page-content">
        <Sidebar onSelectWorld={onSelectWorld} onAddWorld={addWorld} />
        <WorldList worlds={worlds} onSelectWorld={onSelectWorld} onDeleteWorld={onDeleteWorld} />
        <div className="world-quotes-container">
          <WorldQuotes />
        </div>
      </div>
    </Container>
  );
};

export default WorldsPage;
