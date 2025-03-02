
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Auth Demo</h1>
      <p>This is a demonstration of JWT authentication with React and Express.</p>
      <p>
        <Link to="/signin">Sign in</Link> to access protected content.
      </p>
    </div>
  );
}

export default Home;
