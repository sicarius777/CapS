// Notepad.jsx
import React, { useState } from 'react';

const Notepad = ({ notes, onAddNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      onAddNote(newNote.trim());
      setNewNote(''); // Clear the input after adding the note
    }
  };

  return (
    <div className="notepad">
      <h3>Notes:</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <textarea
        className="note-input"
        value={newNote}
        onChange={handleNoteChange}
        placeholder="Enter your note here..."
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default Notepad;
