import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntititiesReducer from './entities_reducer';

export default combineReducers({
  entities: EntititiesReducer,
  session: SessionReducer,
});
