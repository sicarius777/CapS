import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Nav';
import LoginPage from './pages/LoginPage';
import WorldsPage from './pages/WorldsPage';
import WorldUsersPage from './pages/WorldUsersPage';
import { Route, Routes, Navigate } from 'react-router-dom';

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const [selectedWorld, setSelectedWorld] = useState(null); // State to track the selected world

  return (
    <Container fluid className='app'>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/worlds' element={<WorldsPage setSelectedWorld={setSelectedWorld} />} />
        {selectedWorld && (
          <Route path={`/worlds/${selectedWorld.id}`} element={<WorldUsersPage selectedWorld={selectedWorld} />} />
        )}
        {/* Redirect to /worlds if no other route matches */}
        <Route path='*' element={<Navigate to="/worlds" />} />
      </Routes>
    </Container>
  );
}
