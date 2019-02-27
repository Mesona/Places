import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import nav_bar_container from './nav_bar/nav_bar_container';
// import { NavBarContainer } from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    {/* <Route path="/" component={NavBarContainer} /> */}
    <Route path="/" component={ nav_bar_container } />
    <Route path="/signup" component={ SignupContainer } />
  </div>
);

export default App;