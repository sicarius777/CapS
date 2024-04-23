import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const LandingPage = () => {
  return (
    <Container>
      {/* Header */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/worlds">Worlds</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section>
        <h1>Welcome to Your World Builder</h1>
        <p>A platform for writers and game masters to bring their fictional worlds to life.</p>
        <Button variant="primary" className="custom-button">Get Started</Button>
      </section>

      {/* Features Section */}
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Create and manage multiple worlds/universes.</li>
          <li>Organize notes for characters, locations, plot ideas, etc.</li>
          <li>Add tags or categories to notes for easy organization and retrieval.</li>
          <li>Attach images, documents, or links to notes.</li>
          <li>Collaborate with others by sharing worlds/notes.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2>What Our Users Say</h2>
        <p>"Your World Builder has revolutionized the way I develop my game worlds. Highly recommended!"</p>
        <p>"As a writer, I've found Your World Builder to be an invaluable tool for organizing my story ideas."</p>
      </section>

      {/* Call-to-Action */}
      <section>
        <h2>Ready to Get Started?</h2>
        <Button variant="primary" className="custom-button">Sign Up Now</Button>
      </section>

      {/* Footer */}
      <footer>
        <nav>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </footer>
    </Container>
  );
};

export default LandingPage;
