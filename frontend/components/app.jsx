import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PlacesIndexContainer from './places/places_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import FooterContainer from './footer/footer_container';
import PlaceShowContainer from './places/place_show_container';
import PageShowContainer from './pages/page_show_container';
import PageIndexContainer from './pages/page_index_container';

const App = () => (
  <div>
    <Modal />
    <Route path="/" component={ NavBarContainer } />
    <Switch>
      <Route exact path="/" component={ PlacesIndexContainer } />
      {/* <Route exact path="/places/:placeId/pages/:pageId" component={ PageShowContainer } /> */}
      {/* <Route path="/places/:placeId/pages" component={ PageIndexContainer } /> */}
      <Route path="/places/:placeId/pages" component={ PageIndexContainer } />
      {/* <Route exact path="/places/:placeId/pages/" component={ PageIndexContainer } /> */}
      {/* <Route path="/pages/:pageId" component={ PageShowContainer } /> */}

      {/* TESTING ROUTES */}
      {/* <Route exact path="/test" component={ PlacesHamburger } /> */}

      {/* <Redirect from="*" to="/" /> */}
    </Switch>
    <Route exact path="/" component={ FooterContainer } />

  </div>
);

export default App;