import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import WorldsPage from './pages/WorldsPage';
import BrainStorming from './pages/BrainStorming';
import Maps from './pages/Maps';
import Inspiration from './pages/Inspiration';
import Flora from './pages/Flora';
import Fauna from './pages/Fauna';
import Locations from './pages/Locations';
import Weather from './pages/Weather';
import Government from './pages/Government';
import Character from './pages/Character';
import Material from './pages/Material';
import Relic from './pages/Relic';
import Notepad from './components/Notepad';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false); // Initially not authenticated

  // Handle login logic
  const handleLogin = () => {
    // Perform login logic...
    setAuthenticated(true);
  };

  // Handle logout logic
  const handleLogout = () => {
    // Perform logout logic...
    setAuthenticated(false);
  };

  return (
    <Container fluid className='app'>
        <Routes>
          <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/worlds' element={<WorldsPage />} />
          <Route path="/brainstorming" element={<BrainStorming />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/flora" element={<Flora />} />
          <Route path="/fauna" element={<Fauna />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/government" element={<Government />} />
          <Route path="/character" element={<Character />} />
          <Route path="/material" element={<Material />} />
          <Route path="/relic" element={<Relic />} />
          {/* Add a route for the Notepad component */}
          <Route path="/notepad" element={<Notepad />} />
          {/* Redirect to /worlds if no other route matches */}
          <Route path='*' element={<Navigate to="/worlds" replace />} />
        </Routes>
    </Container>
  );
};

export default App;
