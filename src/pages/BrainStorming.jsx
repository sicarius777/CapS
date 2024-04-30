//BrainStorming.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import Navbar from '../components/Nav';

const ChatGPTPage = () => {
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
    <div>
      <h1>ChatGPT Demo</h1>
      <div>
        <label htmlFor="prompt">Enter your prompt:</label>
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
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGPTPage;
