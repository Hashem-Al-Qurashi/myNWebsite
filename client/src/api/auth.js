
import axios from 'axios';

// Create an axios instance with the base URL
export const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

// Add token to the headers if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Login function
export const login = async (email, password) => {
  return await api.post('/api/auth/login', { email, password });
};

// Register function (admin only)
export const register = async (email, password, adminKey) => {
  return await api.post(
    '/api/auth/register', 
    { email, password },
    { headers: { 'x-admin-key': adminKey } }
  );
};

// Get protected content
export const getProtectedContent = async () => {
  return await api.get('/api/protected-content');
};
