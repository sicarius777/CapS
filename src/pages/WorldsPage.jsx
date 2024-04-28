import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sidebar from '../components/Sidebar'; // Import your Sidebar component
import './worlds-page.css'; // Import your CSS file

const WorldsPage = () => {
  const [worldName, setWorldName] = useState('');
  const [worldDescription, setWorldDescription] = useState('');
  const [worlds, setWorlds] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!worldName.trim()) {
      alert('Please enter a world name.');
      return;
    }
    if (editingIndex !== null) {
      // If editing, update existing world
      const updatedWorlds = [...worlds];
      updatedWorlds[editingIndex] = { name: worldName, description: worldDescription };
      setWorlds(updatedWorlds);
      setEditingIndex(null);
    } else {
      // If not editing, add new world
      const newWorld = { name: worldName, description: worldDescription };
      setWorlds([...worlds, newWorld]);
    }
    setWorldName('');
    setWorldDescription('');
  };

  const handleEdit = (index) => {
    const worldToEdit = worlds[index];
    setWorldName(worldToEdit.name);
    setWorldDescription(worldToEdit.description);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedWorlds = [...worlds];
    updatedWorlds.splice(index, 1);
    setWorlds(updatedWorlds);
  };

  return (
    <Container fluid>
      {/* Navbar component */}
      <div className="worlds-page-content">
        <Sidebar worlds={worlds} /> {/* Sidebar component with worlds data */}
        <div className="main-content">
          <h1>Worlds Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="worldName">
              <Form.Label>World Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter world name"
                value={worldName}
                onChange={(e) => setWorldName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="worldDescription">
              <Form.Label>World Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter world description"
                value={worldDescription}
                onChange={(e) => setWorldDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editingIndex !== null ? 'Save Changes' : 'Create World'}
            </Button>
          </Form>
          <hr />
          <h2>Existing Worlds</h2>
          <ul className="worlds-list">
            {worlds.map((world, index) => (
              <li key={index}>
                <strong>{world.name}</strong>
                <p>{world.description}</p>
                <div className="button-container">
                  <Button className="hexagon-button" onClick={() => console.log('Ref')}>Ref</Button>{' '}
                  <Button className="hexagon-button" onClick={() => handleEdit(index)}>Edit</Button>{' '}
                  <Button className="hexagon-button" variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default WorldsPage;
