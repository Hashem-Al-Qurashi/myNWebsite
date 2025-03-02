
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create the root with improved hydration options for faster initial load
const root = createRoot(rootElement);

// Render with Router for navigation
root.render(
  <Router>
    <App />
  </Router>
);
