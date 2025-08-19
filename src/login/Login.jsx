// src/login/Login.jsx
import React, { useState } from 'react';
import { login } from '../js/api';

const Login = ({  }) => {
  // console.log('Login component rendered',onLoginSuccess);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
   const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');
    
    // Validate inputs
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }

    setIsLoading(true);

    try {
      const data = await login(username, password);
      localStorage.setItem('authToken', data.token);
      console.log('Login successful:', data);
       setSuccess(true);
      // if (onLoginSuccess) {
      //   console.log('Calling onLoginSuccess with data:', data);
      //   onLoginSuccess(data);
        
      // }
    } catch (err) {
      setError(err.message || 'Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="(e.g., 'emilys')"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" (e.g., 'emilyspass')"
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
         {error && <div className="error-message">{error}</div>}
         { success && !error &&
           <div className="success-message">success</div>}
    </div>
  );
};

export default Login;