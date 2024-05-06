// Sidebar.jsx

import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import NotePopup from './NotePopup'; // Import NotePopup component

const Sidebar = ({ worlds, onSelectWorld, onAddWorld }) => {
  const [worldName, setWorldName] = useState('');
  const [showNotePopup, setShowNotePopup] = useState(false);
  const [notes, setNotes] = useState([]); // Define notes state

  const handleWorldNameChange = (event) => {
    setWorldName(event.target.value);
  };

  const handleButtonClick = (itemName) => {
    console.log(`Button clicked: ${itemName}`);
    if (itemName === 'Note') {
      setShowNotePopup(true);
    }
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]); // Update notes state with the new note
    setShowNotePopup(false);
  };

  return (
    <div className="sidebar">
      <h2></h2>
      <ul>
        {/* World name input field */}
        <li className="nav-link">
          <input
            type="text"
            placeholder="Enter world name"
            value={worldName}
            onChange={handleWorldNameChange}
          />
        </li>
        {/* Save button for the new world */}
        <li className="nav-link">
          <button className="btn" onClick={() => onAddWorld(worldName)}>
            <i className="bi bi-save"></i> Save World
          </button>
        </li>
        {/* Note button */}
        <li className="nav-link">
          <button className="btn" onClick={() => handleButtonClick('Note')}>
            <i className="bi bi-file-earmark-text"></i> Note
          </button>
        </li>
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
      {/* Render the NotePopup component conditionally based on showNotePopup state */}
      {showNotePopup && <NotePopup onClose={() => setShowNotePopup(false)} onAddNote={handleAddNote} />}
      {/* Display the notes in their own box */}
      {notes.length > 0 && (
        <div className="note-box">
          <h3>Notes:</h3>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
