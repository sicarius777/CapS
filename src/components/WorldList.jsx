// WorldList.jsx

import React from 'react';

const WorldList = ({ worlds, onSelectWorld }) => {
  return (
    <div className="world-list">
      <h2>Saved Worlds</h2>
      <ul className="saved-worlds-list">
        {worlds.map((world, index) => (
          <li key={index} onClick={() => onSelectWorld(world)}>
            <i className="bi bi-globe"></i> {/* Bootstrap icon */}
            {world.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldList;
