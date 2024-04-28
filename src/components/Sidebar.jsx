// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ worlds }) => {
  return (
    <div className="sidebar">
      <h2>Worlds</h2>
      <ul>
        {worlds.map((world, index) => (
          <li key={index}>{world.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
