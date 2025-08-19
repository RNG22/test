// src/api/api.js

const API_BASE_URL = 'https://dummyjson.com/auth';

/**
 * Authenticate a user with username and password
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<object>} Response data with user details and token
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        // expiresInMins: 60 // optional, can be added if needed
      }),
    });
console.log('API Response:', response.ok);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Get current user details using token
 * @param {string} token 
 * @returns {Promise<object>} User details
 */
export const getCurrentUser = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }

    return await response.json();
  } catch (error) {
    console.error('Get user error:', error);
    throw error;
  }
};