import React from 'react';
import { connect } from 'react-redux';

import PlaceIndexItem from './place_index_item';
import { deletePlace, updatePlace, receiveErrors } from '../../actions/places_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  deletePlace: id => dispatch(deletePlace(id)),  
  updatePlace: place => dispatch(updatePlace(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceIndexItem);