
import axios from 'axios'

// Define base URL for API requests
const API_URL = '/api'

// Configure axios with defaults
axios.defaults.baseURL = API_URL

// Set up auth header for all requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Login function
export const login = async (email: string, password: string) => {
  const response = await axios.post('/auth/login', { email, password })
  return response.data
}

// Logout function
export const logout = () => {
  localStorage.removeItem('token')
}

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}

// Get protected content
export const getProtectedContent = async () => {
  const response = await axios.get('/protected-content')
  return response.data
}

export default {
  login,
  logout,
  isAuthenticated,
  getProtectedContent
}
