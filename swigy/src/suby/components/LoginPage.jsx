import React, { useState } from 'react'; // Import useState
import './LoginPage.css'; // Add this CSS file for styling

const LoginPage = () => {
  const [message, setMessage] = useState(''); // State for login message

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setMessage('Login Successfully'); // Update message on form submission
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}> {/* Attach handleSubmit */}
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          /><br /><br />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          /><br /><br />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {message && <p className="login-message">{message}</p>} {/* Display login message */}
      </div>
    </div>
  );
};

export default LoginPage;
