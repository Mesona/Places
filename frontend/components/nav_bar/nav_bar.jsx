import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render () {

    const { currentUser, logout } = this.props;
    const display = currentUser ? (
      <div className="login-logout-options">
        <p>Hello, { currentUser.username }</p>
        <button onClick={ logout }>Sign Out</button>
      </div>
    ) : (
      <div className="login-logout-options">
        <Link className="button" to="/signup">Sign Up</Link>
        <Link className="button" to="/signin">Sign In</Link>
      </div>
    );
    
    return (
      <header className="nav-bar">
        <div className="logo">
          <Link className="logo-button" to='/' ><img src={'https://www.gstatic.com/images/branding/product/1x/atari_48dp.png'}></img></Link>
          <Link className="logo-button" to='/'><p>Places</p></Link>
        </div>
        <div className="nav-display">
          { display }
        </div>
      </header>
    );

  }
};

export default NavBar;