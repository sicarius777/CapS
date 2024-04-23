// WorldUsersPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './world-users-page.css';

const WorldUsersPage = () => {
  const { worldId } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users' information for the specific world from the backend or application state
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/worlds/${worldId}/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [worldId]);

  return (
    <Container>
      <h1>Users in World {worldId}</h1>
      <div className="users-list">
        {users.map((user) => (
          <Card key={user.id}>
            <Card.Img variant="top" src={user.avatarUrl} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WorldUsersPage;
