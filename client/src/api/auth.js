
import axios from "axios";

// API base URL - use the server's actual address with port 5000
const API_BASE_URL = "http://0.0.0.0:5000";

// Create axios instance
export const api = axios.create({ 
  baseURL: API_BASE_URL,
  withCredentials: true
});

// Add authorization header interceptor
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API methods
export const login = async (credentials) => {
  try {
    const response = await api.post('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error' };
  }
};

export const fetchProtectedContent = async () => {
  try {
    const response = await api.get('/api/protected-content');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Network error' };
  }
};
