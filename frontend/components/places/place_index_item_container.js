import React from 'react';
import { connect } from 'react-redux';

import PlaceIndexItem from './place_index_item';
import { deletePlace, updatePlace, receiveErrors } from '../../actions/places_actions';

const mapStateToProps = state => ({
  // placePrivate: place.private,
  // errors: state.errors.places,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  deletePlace: id => dispatch(deletePlace(id)),  
  updatePlace: place => dispatch(updatePlace(place)),
  // receiveErrors: errors => dispatch(receiveErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceIndexItem);