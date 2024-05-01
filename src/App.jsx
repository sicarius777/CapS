import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import LoginPage from './pages/LoginPage';
import WorldsPage from './pages/WorldsPage';
import BrainStorming from './pages/BrainStorming';
import Maps from './pages/Maps'; // Adjust the path as needed based on your project structure
import Inspiration from './pages/Inspiration';
import Flora from './pages/flora';
import Fauna from './pages/fauna';
import Locations from './pages/Locations';





import WorldUsersPage from './pages/WorldUsersPage';
import { Route, Routes, Navigate } from 'react-router-dom';

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const [selectedWorld, setSelectedWorld] = useState(null); // State to track the selected world
  const [worlds, setWorlds] = useState([]); // State to hold the list of worlds

  const handleAddWorld = (worldData) => {
    // Add the new world data to the worlds list
    setWorlds((prevWorlds) => [...prevWorlds, worldData]);
  };

  return (
    <Container fluid className='app'>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/worlds' element={<WorldsPage onAddWorld={handleAddWorld} worlds={worlds} />} />
        <Route path="/brainstorming" element={<BrainStorming/>}/>
        <Route path="/maps" element={<Maps/>}/>
        <Route path="/inspiration" element={<Inspiration/>}/>
        <Route path="/flora" element={<Flora/>}/>
        <Route path="/fauna" element={<Fauna/>}/>
        <Route path="/locations" element={<Locations/>}/>
        {selectedWorld && (
          <Route path={`/worlds/${selectedWorld.id}`} element={<WorldUsersPage selectedWorld={selectedWorld} />} />
        )}
        {/* Redirect to /worlds if no other route matches */}
        <Route path='*' element={<Navigate to="/worlds" />} />
      </Routes>
    </Container>
  );
}

