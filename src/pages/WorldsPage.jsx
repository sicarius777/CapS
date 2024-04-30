// WorldsPage.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Nav'; // Import Navbar component
import Sidebar from '../components/Sidebar';
import './WorldsPage.css'; // Import WorldsPage.css file

const WorldsPage = ({ onAddWorld, onSelectWorld, worlds }) => {
  return (
    <Container fluid>
      <Navbar onAddWorld={onAddWorld} /> {/* Pass onAddWorld function as prop */}
      <div className="worlds-page-content">
        <Sidebar worlds={worlds} onSelectWorld={onSelectWorld} /> {/* Pass onSelectWorld as prop */}
        <div className="main-content">
          {/* Content of the main section */}
        </div>
      </div>
    </Container>
  );
};

export default WorldsPage;
