import React from 'react';
import { connect } from 'react-redux';

import PlaceIndexList from './place_index_list';
import { deletePlace, updatePlace, receiveErrors } from '../../actions/places_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  deletePlace: id => dispatch(deletePlace(id)),  
  updatePlace: place => dispatch(updatePlace(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceIndexList);