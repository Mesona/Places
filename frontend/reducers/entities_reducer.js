import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

const EntititiesReducer = combineReducers({
  users: UsersReducer,
});

export default EntititiesReducer;