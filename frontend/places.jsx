import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  const store = configureStore(preloadedState);

  // TESTING STUFF
  window.getState = store.getState;
  
  window.fetchPlace = PlacesAPIUtils.fetchPlace;
  // END TESTING STUFF


  ReactDOM.render(<Root store={store} />, root);
});