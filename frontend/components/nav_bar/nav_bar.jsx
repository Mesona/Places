import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, { currentUser.username }</p>
      <button onClick={ logout }>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="button" to="/signup">Sign Up</Link>
      <Link className="button" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">PLACES</h1>
      <div>
        { display }
      </div>
    </header>
  );
};
