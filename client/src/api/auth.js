
import axios from "axios";

// API base URL - use the server's actual address
const API_BASE_URL = "http://localhost:5000";

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
