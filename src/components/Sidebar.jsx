// Sidebar.jsx

import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import NotePopup from './NotePopup'; // Import NotePopup component

const Sidebar = ({ worlds, onSelectWorld }) => {
  const [worldName, setWorldName] = useState(''); // State to store the world name
  const [editing, setEditing] = useState(true); // State to track whether the name is being edited
  const [showNotePopup, setShowNotePopup] = useState(false); // State to control the visibility of the note popup
  const [note, setNote] = useState(''); // State to store the note

  const handleWorldNameChange = (event) => {
    setWorldName(event.target.value); // Update the world name state when input changes
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      setEditing(false); // Set editing to false to stop displaying the input field
    }
  };

  const handleButtonClick = (itemName) => {
    console.log(`Button clicked: ${itemName}`); // Perform action when button is clicked
    if (itemName === 'Note') {
      // Set showNotePopup to true to open the note popup
      setShowNotePopup(true);
    }
  };

  const handleAddNote = (newNote) => {
    setNote(newNote); // Update the note state
    setShowNotePopup(false); // Close the note popup
  };

  const handleSaveButtonClick = () => {
    console.log('Save button clicked'); // Perform action when save button is clicked
    // Add logic to save data or perform any other action here
  };

  return (
    <div className="sidebar">
      <h2></h2>
      <ul>
        {/* World name */}
        <li className="nav-link">
          <i className="bi bi-globe"></i>
          {/* Conditionally render either the input field or the world name */}
          {editing ? (
            <input
              type="text"
              placeholder="Enter world name"
              value={worldName}
              onChange={handleWorldNameChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span>{worldName}</span>
          )}
        </li>
        {/* Note button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Note')}>
            <i className="bi bi-file-earmark-text"></i> Note
          </button>
        </li>
        {/* Map button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Map')}>
            <i className="bi bi-map"></i> Map
          </button>
        </li>
        {/* Inspiration button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Inspiration')}>
            <i className="bi bi-lightbulb"></i> Inspiration
          </button>
        </li>
        {/* Flora button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Flora')}>
            <i className="bi bi-flower1"></i> Flora
          </button>
        </li>
        {/* Fauna button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Fauna')}>
            <i className="bi bi-bug"></i> Fauna
          </button>
        </li>
        {/* Location button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Location')}>
            <i className="bi bi-geo-alt"></i> Location
          </button>
        </li>
        {/* Weather button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Weather')}>
            <i className="bi bi-cloud-sun"></i> Weather
          </button>
        </li>
        {/* Government button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Government')}>
            <i className="bi bi-building"></i> Government
          </button>
        </li>
        {/* Character button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Character')}>
            <i className="bi bi-people"></i> Character
          </button>
        </li>
        {/* Material button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Material')}>
            <i className="bi bi-tools"></i> Material
          </button>
        </li>
        {/* Relic button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Relic')}>
            <i className="bi bi-gem"></i> Relic
          </button>
        </li>
        {/* Save button */}
        <li className="nav-link">
          <button className="btn" onClick={handleSaveButtonClick}>
            <i className="bi bi-save"></i> Save
          </button>
        </li>
      </ul>
      {/* Render the NotePopup component conditionally based on showNotePopup state */}
      {showNotePopup && <NotePopup onClose={() => setShowNotePopup(false)} onAddNote={handleAddNote} />}
      {/* Display the note in its own box */}
      {note && (
        <div className="note-box">
          <h3>Note:</h3>
          <p>{note}</p>
        </div>
      )}
      {/* Rest of the sidebar content */}
    </div>
  );
};

export default Sidebar;
