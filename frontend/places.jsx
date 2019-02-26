import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TESTING IMPORTS
import * as UsersAPIUtils from './util/users';
import { requestAllUsers, requestUser } from './actions/users_actions';

//END TESTING IMPORTS


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TESTING STUFF
  window.getUsers = UsersAPIUtils.getUsers;
  window.getUser = UsersAPIUtils.getUser;
  window.postUser = UsersAPIUtils.postUser;
  window.patchUser = UsersAPIUtils.patchUser;
  window.deleteUser = UsersAPIUtils.deleteUser;

  window.requestAllUsers = requestAllUsers;
  window.requestUser = requestUser;
  // END TESTING STUFF


  // ReactDOM.render("Yo", root);
  ReactDOM.render(<Root store={store} />, root);
});