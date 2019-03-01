import {
  RECEIVE_PLACES,
  RECEIVE_PLACE,
  REMOVE_PLACE,
} from '../actions/places_actions';
import merge from 'lodash/merge';

const PlacesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLACES:
      return action.places;
    case RECEIVE_PLACE:
      return merge({}, state, {[action.place.id]: action.place});
    case REMOVE_PLACE:
      let newState = merge({}, state);
      delete newState[action.placeId];
      return newState;
    default:
      return state;
  }
};

export default PlacesReducer;