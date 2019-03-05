import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PlacesReducer from './place_reducer';
import PagesReducer from './page_reducer';

const EntititiesReducer = combineReducers({
  users: UsersReducer,
  places: PlacesReducer,
  pages: PagesReducer,
});

export default EntititiesReducer;