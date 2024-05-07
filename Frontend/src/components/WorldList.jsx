// WorldsList.jsx
import React from 'react';
import './WorldList.css';

const WorldList = ({ worlds, onSelectWorld, onEditWorld, onDeleteWorld, style }) => {
  const handleDeleteClick = async (e, world) => {
    e.stopPropagation(); // Prevents click event from propagating to the list item
    try {
      const response = await fetch(`/worlds/${world.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        onDeleteWorld(world.id); // Call the onDeleteWorld callback to update the state
      } else {
        console.error('Failed to delete world:', response.statusText);
        // Optionally, handle the error or display a notification to the user
      }
    } catch (error) {
      console.error('Error deleting world:', error);
      // Optionally, handle the error or display a notification to the user
    }
  };

  return (
    <div className="saved-worlds-wrapper" style={style}>
      <div className="saved-worlds-list">
        <h2>Saved Worlds</h2>
        <ul>
          {worlds.map((world, index) => (
            <li key={index} onClick={() => onSelectWorld(world)}>
              <i className="bi bi-globe"></i> {world.name}
              <button className="btn btn-primary" onClick={(e) => {
                e.stopPropagation(); // Prevents click event from propagating to the list item
                onEditWorld(world);
              }}>Edit</button>
              <button className="btn btn-danger" onClick={(e) => handleDeleteClick(e, world)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorldList;
