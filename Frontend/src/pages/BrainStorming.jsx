import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './BrainStorming.css';
import ReturnToWorld from "../components/ReturnToWorld";




const BrainStormer = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Send prompt to backend for processing
      const response = await axios.post('/create', { prompt });
      setResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-container">
      <h1 className="text-center">Brain Storming</h1>
      <div className="chat-window">
        <div>
          <label htmlFor="prompt">Whats on your mind?:</label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Type your prompt here..."
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {response && (
          <div className="response-box">
            <h2>Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
      <div className="user-input">
        <ReturnToWorld /> {/* Include the ReturnToWorld component */}
      </div>
    </div>
  );
};

export default BrainStormer;
