// WorldsPage.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Nav'; // Import Navbar component
import Sidebar from '../components/Sidebar';
import WorldQuotes from '../components/WorldQuotes'; // Import WorldQuotes component
import './WorldsPage.css'; // Import WorldsPage.css file

const WorldsPage = ({ onAddWorld, onSelectWorld, worlds }) => {
  return (
    <Container fluid>
      <Navbar onAddWorld={onAddWorld} /> {/* Pass onAddWorld function as prop */}
      <div className="worlds-page-content">
        <Sidebar worlds={worlds} onSelectWorld={onSelectWorld} /> {/* Pass onSelectWorld as prop */}
        {/* Content of the main section */}
        <div className="world-quotes-container"> {/* Add container for WorldQuotes */}
          <WorldQuotes />
        </div>
      </div>
    </Container>
  );
};

export default WorldsPage;
