import { RECEIVE_PLACE_ERRORS } from '../actions/places_actions';

const PlacesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLACE_ERRORS:
    return action.errors;
  default:
    return state;
  }
};

export default PlacesErrorsReducer;