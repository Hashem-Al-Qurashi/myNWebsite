
import React, { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Protected from './pages/Protected';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('token') ? true : false
  );

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">Auth Demo</div>
        <div>
          <Link to="/">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/protected">Protected</Link>
              <Link to="/" onClick={(e) => {
                e.preventDefault();
                logout();
              }}>Logout</Link>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/signin" 
          element={isAuthenticated ? <Navigate to="/protected" /> : <SignIn onLogin={login} />} 
        />
        <Route 
          path="/protected" 
          element={isAuthenticated ? <Protected /> : <Navigate to="/signin" />} 
        />
      </Routes>
    </div>
  );
}

export default App;
