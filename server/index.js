
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./authRoutes');
const { connectDB } = require('./db');
const { authMiddleware } = require('./middleware');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Basic route
app.get('/api', (req, res) => {
  res.json({ message: 'API is running' });
});

// Protected route example
app.get('/api/protected-content', authMiddleware, (req, res) => {
  res.json({ 
    message: 'You have access to protected content',
    user: req.user
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
