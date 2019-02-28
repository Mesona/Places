import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PlacesIndexContainer from './places/places_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './footer/footer';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <Route path="/" component={ NavBarContainer } />
    <Switch>
      <Route exact path="/" component={ PlacesIndexContainer } />
      <Redirect from="*" to="/" exact />
    </Switch>
    <Route path="/" component={ Footer } />

  </div>
);

export default App;