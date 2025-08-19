// src/js/api.test.js
import { login, getCurrentUser } from './api';

// Mock global fetch
beforeAll(() => {
  global.fetch = jest.fn();
});

describe('API Service', () => {
  const mockToken = 'test-token-123';
  
  beforeEach(() => {
    fetch.mockClear();
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('successfully logs in with valid credentials', async () => {
      const mockResponse = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        token: mockToken,
      };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });

      const result = await login('testuser', 'testpass');

      expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'testuser',
          password: 'testpass',
        }),
      });
      expect(result).toEqual(mockResponse);
    });

    it('throws error when response is not ok', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      });

      await expect(login('wrong', 'wrong')).rejects.toThrow('Invalid credentials');
    });
  });

  describe('getCurrentUser', () => {
    it('fetches current user with valid token', async () => {
      const mockUser = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
      };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUser),
      });

      const result = await getCurrentUser(mockToken);

      expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${mockToken}`,
        },
      });
      expect(result).toEqual(mockUser);
    });

    it('throws error when token is invalid', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
      });

      await expect(getCurrentUser('invalid-token')).rejects.toThrow(
        'Failed to fetch user details'
      );
    });
  });
});