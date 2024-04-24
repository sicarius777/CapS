import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Body from '../components/Body';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    // Example: Send a request to your backend server to authenticate the user
    // If authentication is successful, redirect the user to the dashboard
    navigate('/dashboard');
  };

  return (
    <Body sidebar={false}>
      <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Body>
  );
}
