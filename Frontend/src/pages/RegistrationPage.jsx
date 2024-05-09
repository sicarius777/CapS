import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div>
      <h1>Registration</h1>
      <RegistrationForm />
      <Link to="/login">
        <button>Back to Login</button>
      </Link>
    </div>
  );
};

export default RegistrationPage;
