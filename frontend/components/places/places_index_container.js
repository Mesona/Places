import React from 'react';
import { connect } from 'react-redux';

import PlacesIndex from './places_index';
import { fetchPlaces, deletePlace } from '../../actions/places_actions';
import { selectMyPlaces, selectOtherPlaces, selectPrivatePlaces, selectAllPlaces } from '../../reducers/selectors';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  myPlaces: selectMyPlaces(state),
  otherPlaces: selectOtherPlaces(state),
  privatePlaces: selectPrivatePlaces(state),
  allPlaces: selectAllPlaces(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPlaces: () => dispatch(fetchPlaces()),
  deletePlace: id => dispatch(deletePlace(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesIndex);