import React from 'react';
import { connect } from 'react-redux';

import PlaceIndexItem from './place_index_item';
import { deletePlace } from '../../actions/places_actions';

const mapStateToProps = state => ({
  // placePrivate: place.private,
});

const mapDispatchToProps = dispatch => ({
  deletePlace: id => dispatch(deletePlace(id)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceIndexItem);