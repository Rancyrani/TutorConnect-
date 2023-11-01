// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here
    if (username === 'sampleUser' && password === 'samplePassword') {
      // Successful login
      alert('Login successful! Redirecting to the dashboard...');
      // You can use React Router to navigate to the dashboard page.
    } else {
      // Handle login failure
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container"> {/* Apply a CSS class for styling */}
      <h2>Login to TutorConnect</h2>
      <input
        type="text"
        placeholder="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Log In</button> {/* Apply a CSS class to the button */}
    </div>
  );
};

export default Login;
