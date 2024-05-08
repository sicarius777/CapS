import React, { useState } from 'react';
import './WorldList.css';

const WorldList = ({ worlds, onSelectWorld, onEditWorld, onDeleteWorld, style }) => {
  const [newWorldName, setNewWorldName] = useState(''); // State to store the new world name

  const handleAddWorld = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('/worlds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newWorldName }) // Send the new world name in the request body
      });

      if (response.ok) {
        const newWorld = await response.json();
        console.log('New world created:', newWorld);
        // Optionally, update the UI to display the newly created world
        // Clear the input field after successful creation
        setNewWorldName('');
      } else {
        console.error('Failed to create new world:', response.statusText);
        // Optionally, handle the error or display a notification to the user
      }
    } catch (error) {
      console.error('Error creating new world:', error);
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
        {/* Form to add a new world */}
        <form onSubmit={handleAddWorld}>
          <input
            type="text"
            value={newWorldName}
            onChange={(e) => setNewWorldName(e.target.value)}
            placeholder="Enter world name"
          />
          <button type="submit" className="btn btn-primary">Add World</button>
        </form>
      </div>
    </div>
  );
};

export default WorldList;
