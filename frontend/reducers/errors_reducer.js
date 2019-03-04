import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import PlacesErrorsReducer from './places_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  places: PlacesErrorsReducer,
});

export default ErrorsReducer;