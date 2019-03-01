import { connect } from 'react-redux';
import Footer from './footer';
import { createPlace } from '../../actions/places_actions';

const mapStateToProps = (state, ownProps) => ({
  // const place = { title: 'Untitled', private: false, owner_id: 2 };
  // return { place };
  // place,
});

const mapDispatchToProps = (dispatch) => ({
  createPlace: place => dispatch(createPlace(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
