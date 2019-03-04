import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {


  render () {

    const { currentUser, logout, openModal } = this.props;
    const display = currentUser ? (
      <div className="login-logout-options">
        <span>Hello, { currentUser.username }</span><br></br>
        <button onClick={ logout }>Sign Out</button>
      </div>
    ) : (
      <div className="login-logout-options">
        <button onClick={() => openModal('login')}>Login</button>
        &nbsp;&nbsp;
        <button onClick={() => openModal('signup')}>Sign Up</button>
        &nbsp;&nbsp;
        <button className="DemoButton" onClick={() => openModal('demo')}>Demo Login</button>
      </div>
    );
    
    return (
      <header className="nav-bar">
        <div className="logo">
          <Link className="logo-button" to='/' ><img src={window.images.headerImg}></img></Link>
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