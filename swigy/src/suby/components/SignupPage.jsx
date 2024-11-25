import React, { useState } from 'react';
import './Signup.css'; 

const SignupPage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setMessage('Thank you for signing up!'); 
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-title">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Username"
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        {message && <p className="signup-message">{message}</p>}
      </div>
    </div>
  );
};

export default SignupPage;
