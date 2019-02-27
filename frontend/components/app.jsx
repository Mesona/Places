import React from 'react';
import { Route } from 'react-router-dom';
import nav_bar_container from './nav_bar/nav_bar_container';
// import { NavBarContainer } from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';

const App = () => (
  <div>
    {/* <Route path="/" component={NavBarContainer} /> */}
    <Route path="/" component={ nav_bar_container } />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
    <Route path="/signin" component={ SigninFormContainer } />

  </div>
);

export default App;