import * as PlacesAPIUtils from '../util/places';

export const RECEIVE_PLACES = `RECEIVE_PLACES`;
export const RECEIVE_PLACE = `RECEIVE_PLACE`;
export const CREATE_PLACE = `CREATE_PLACE`;
export const REMOVE_PLACE = `REMOVE_PLACE`;
export const RECEIVE_PLACE_ERRORS = `RECEIVE_PLACE_ERRORS`;

const receivePlaces = places => ({
  type: RECEIVE_PLACES,
  places,
});

const receivePlace = place => ({
  type: RECEIVE_PLACE,
  place,
});

const removePlace = placeId => ({
  type: REMOVE_PLACE,
  placeId,
});

export const receiveErrors = errors => ({
  type: RECEIVE_PLACE_ERRORS,
  errors,
});

export const fetchPlaces = () => dispatch => (
  PlacesAPIUtils.getPlaces()
    .then(places => dispatch(receivePlaces(places))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);

export const fetchPlace = id => dispatch => (
  PlacesAPIUtils.getPlace(id)
    .then(id => dispatch(receivePlace(id))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);

export const createPlace = place => dispatch => (
  PlacesAPIUtils.postPlace(place)
    .then(place => dispatch(receivePlace(place))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);

export const updatePlace = place => dispatch => (
  PlacesAPIUtils.patchPlace(place)
    .then(place => dispatch(receivePlace(place))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);

export const deletePlace= placeId => dispatch => (
  PlacesAPIUtils.deletePlace(placeId)
    .then( place => dispatch(removePlace(placeId))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);