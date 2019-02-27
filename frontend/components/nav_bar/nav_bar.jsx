import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render () {

    const { currentUser, logout } = this.props;
    const display = currentUser ? (
      <div>
        <p>Hello, { currentUser.username }</p>
        <button onClick={ logout }>Sign Out</button>
      </div>
    ) : (
      <div className="logged-out-options">
        <Link className="button" to="/signup">Sign Up</Link>
        <Link className="button" to="/signin">Sign In</Link>
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

  }
};

export default NavBar;