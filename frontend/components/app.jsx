import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';
import PlacesIndexContainer from './places/places_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Route path="/" component={ NavBarContainer } />
    <Route exact path="/" component={ PlacesIndexContainer } />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
    <AuthRoute path="/signin" component={ SigninFormContainer } />
    <AuthRoute path="/login" component={ SigninFormContainer } />
    <Route path="/" component={ Footer } />

  </div>
);

export default App;