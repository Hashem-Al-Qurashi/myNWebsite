
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.js'
import SignIn from './pages/SignIn.js'
import Protected from './pages/Protected.js'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('token') ? true : false
  )

  const login = (token) => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <div className="container">
        <nav>
          <div className="logo">Auth Demo</div>
          <div>
            <a href="/">Home</a>
            {isAuthenticated ? (
              <>
                <a href="/protected">Protected</a>
                <a href="/" onClick={(e) => {
                  e.preventDefault()
                  logout()
                }}>Logout</a>
              </>
            ) : (
              <a href="/signin">Sign In</a>
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
    </Router>
  )
}

export default App
