// ReturnToWorld.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ReturnToWorld.css';

const ReturnToWorld = () => {
  return (
    <div className="return-button">
      <Link to="/WorldsPage" className="btn btn-primary">
        <i className="bi bi-globe"></i> {/* Bootstrap Globe Icon */}
        Return to Worlds Page
      </Link>
    </div>
  );
};

export default ReturnToWorld;
