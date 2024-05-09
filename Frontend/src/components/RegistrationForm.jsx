import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "react-bootstrap/Container";

export default function RegistrationPage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    // If yes, redirect to homepage
    // Example: if (isLoggedIn) navigate('/');
  }, []);

  async function registerUser() {
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log(data);
      toast(`User: ${user.username} registered`);
      navigate('/api/login');
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error
    }
  }

  function handleRegisterFormSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      window.alert("Passwords must match");
      return;
    }

    delete user.confirmPassword;

    registerUser();
  }

  return (
    <Container>
      <h3>Register</h3>
      <form onSubmit={handleRegisterFormSubmit}>
        <label htmlFor="username">Username</label><br />
        <input type="text" name='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} required/><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" name='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required/><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" name='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required/><br />
        <label htmlFor="confirmPassword">Confirm Password</label><br />
        <input type="password" name='confirmPassword' value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} required/><br />
        <label htmlFor="firstName">First Name</label><br />
        <input type="text" name='firstName' value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} /><br />
        <label htmlFor="lastName">Last Name</label><br />
        <input type="text" name='lastName' value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} /><br />

        <input type="submit" value='Register' />
      </form>
    </Container>
  );
}