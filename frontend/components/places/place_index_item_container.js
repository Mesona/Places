import React from 'react';
import { connect } from 'react-redux';

import PlaceIndexItem from './place_index_item';

const mapStateToProps = ({ places }) => ({
  placePrivate: place.private,
});

const mapDispatchToProps = dispatch => ({
  showState: () => console.log(this.state),
  showProps: () => console.log(this.props),
  showPrivate: () => console.log(this.placePrivate),

});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceIndexItem);