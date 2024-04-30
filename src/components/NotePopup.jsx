// NotePopup.jsx

import React, { useState } from 'react';
import './NotePopup.css';

const NotePopup = ({ onClose, onAddNote }) => {
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      onAddNote(note.trim());
      onClose();
    }
  };

  return (
    <div className="note-popup-overlay">
      <div className="note-popup">
        <h2>Add Note</h2>
        <textarea
          className="note-input"
          value={note}
          onChange={handleNoteChange}
          placeholder="Enter your note here..."
        />
        <div className="button-container">
          <button className="add-button" onClick={handleAddNote}>Add Note</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NotePopup;
