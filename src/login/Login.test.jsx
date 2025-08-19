// src/login/Login.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import Login from './Login';
import { login } from '../js/api';

// Mock the API module
jest.mock('../js/api');

describe('Login Component', () => {
  const mockOnLoginSuccess = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('renders the login form correctly', () => {
    render(<Login />);
    
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('shows validation error when form is submitted empty', async () => {
    render(<Login />);
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/please enter both username and password/i)).toBeInTheDocument();
    });
  });

  it('displays loading state during form submission', async () => {
    login.mockImplementationOnce(() => new Promise(() => {}));

    render(<Login />);
    
    fireEvent.change(screen.getByLabelText(/username/i), { 
      target: { value: 'testuser' } 
    });
    fireEvent.change(screen.getByLabelText(/password/i), { 
      target: { value: 'testpass' } 
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    expect(screen.getByText(/logging in.../i)).toBeInTheDocument();
  });

  it('handles successful login', async () => {
    const mockToken = 'test-token-123';
    login.mockResolvedValueOnce({ token: mockToken, username: 'testuser' });
    
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    
    fireEvent.change(screen.getByLabelText(/username/i), { 
      target: { value: 'testuser' } 
    });
    fireEvent.change(screen.getByLabelText(/password/i), { 
      target: { value: 'testpass' } 
    });
    
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /login/i }));
    });
    
    expect(login).toHaveBeenCalledWith('testuser', 'testpass');
    expect(localStorage.getItem('authToken')).toBe(mockToken);
    expect(mockOnLoginSuccess).toHaveBeenCalled();
  });

  it('handles login failure', async () => {
    login.mockRejectedValueOnce(new Error('Invalid credentials'));
    
    render(<Login />);
    
    fireEvent.change(screen.getByLabelText(/username/i), { 
      target: { value: 'wronguser' } 
    });
    fireEvent.change(screen.getByLabelText(/password/i), { 
      target: { value: 'wrongpass' } 
    });
    
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /login/i }));
    });
    
    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });
});