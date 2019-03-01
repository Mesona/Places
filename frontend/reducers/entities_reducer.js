import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PlacesReducer from './place_reducer';

const EntititiesReducer = combineReducers({
  users: UsersReducer,
  places: PlacesReducer,
});

export default EntititiesReducer;