import merge from 'lodash/merge';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER,
} from '../actions/users_actions';

const _nullSession = {
  currentUser: null,
};

const UsersReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      let user = action.payload.user;
      return merge({}, state, { [user.id]: user });
    default:
      return state;
  }
};

export default UsersReducer;