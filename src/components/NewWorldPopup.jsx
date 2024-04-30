// NewWorldPopup.jsx

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewWorldPopup = ({ show, handleClose, handleSubmit }) => {
  const [worldName, setWorldName] = useState('');
  const [worldDescription, setWorldDescription] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name: worldName, description: worldDescription });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New World</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
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
            Add World
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewWorldPopup;
