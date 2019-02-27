import React from 'react';
import { connect } from 'react-redux';

import PlacesIndex from './places_index';


const mapStateToProps = state => ({
  // currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesIndex);