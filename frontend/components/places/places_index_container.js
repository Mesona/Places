import React from 'react';
import { connect } from 'react-redux';

import PlacesIndex from './places_index';
import { fetchPlaces, deletePlace } from '../../actions/places_actions';
import { selectAllPlaces } from '../../reducers/selectors';


const mapStateToProps = state => ({
  places: selectAllPlaces(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPlaces: () => dispatch(fetchPlaces()),
  deletePlace: id => dispatch(deletePlace(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesIndex);