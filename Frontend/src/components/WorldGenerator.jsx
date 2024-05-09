import React, { useState } from 'react';

const WorldGenerator = ({ onGenerate }) => {
  const [worldId, setWorldId] = useState('');

  const generateWorldId = () => {
    // Generate a unique world_id here
    const newWorldId = Math.random().toString(36).substring(2, 10); // Example: Random 8-character alphanumeric string
    setWorldId(newWorldId);
    onGenerate(newWorldId); // Pass the generated world_id to the parent component
  };

  return (
    <div>
      <button onClick={generateWorldId}>Generate World ID</button>
      <p>Generated World ID: {worldId}</p>
    </div>
  );
};

export default WorldGenerator;
