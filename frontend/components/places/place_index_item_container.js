import React from 'react';
import { connect } from 'react-redux';

import PlaceIndexItem from './place_index_item';

const mapStateToProps = ({ places }) => ({
  places,
  // month_modified: state.updated_at.slice(5, 7),
  // day_modified: state.updated_at.slice(8, 10),
  // year_modified: state.updated_at.slice(0, 4),
  month_modified: place.updated_at.slice(5, 7),
  day_modified: place.updated_at.slice(8, 10),
  year_modified: place.updated_at.slice(0, 4),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceIndexItem);