// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2></h2>
      <ul>
        {/* Map button */}
        <li className="nav-link">
          <Link to="/maps" className="btn">
            <i className="bi bi-map"></i> Map
          </Link>
        </li>
        {/* Inspiration button */}
        <li className="nav-link">
          <Link to="/inspiration" className="btn">
            <i className="bi bi-lightbulb"></i> Inspiration
          </Link>
        </li>
        {/* Flora button */}
        <li className="nav-link">
          <Link to="/flora" className="btn">
            <i className="bi bi-flower1"></i> Flora
          </Link>
        </li>
        {/* Fauna button */}
        <li className="nav-link">
          <Link to="/fauna" className="btn">
            <i className="bi bi-bug"></i> Fauna
          </Link>
        </li>
        {/* Location button */}
        <li className="nav-link">
          <Link to="/locations" className="btn">
            <i className="bi bi-geo-alt"></i> Location
          </Link>
        </li>
        {/* Weather button */}
        <li className="nav-link">
          <Link to="/weather" className="btn">
            <i className="bi bi-cloud-sun"></i> Weather
          </Link>
        </li>
        {/* Government button */}
        <li className="nav-link">
          <Link to="/government" className="btn">
            <i className="bi bi-building"></i> Government
          </Link>
        </li>
        {/* Character button */}
        <li className="nav-link">
          <Link to="/character" className="btn">
            <i className="bi bi-people"></i> Character
          </Link>
        </li>
        {/* Material button */}
        <li className="nav-link">
          <Link to="/material" className="btn">
            <i className="bi bi-tools"></i> Material
          </Link>
        </li>
        {/* Relic button */}
        <li className="nav-link">
          <Link to="/relic" className="btn">
            <i className="bi bi-gem"></i> Relic
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
