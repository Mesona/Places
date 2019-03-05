import { connect } from 'react-redux';
import Footer from './footer';
import { createPlace, fetchPlaces, receiveErrors } from '../../actions/places_actions';
import { selectAllPlaces } from '../../reducers/selectors';
import { createPage } from '../../actions/pages_actions';

const mapStateToProps = (state, ownProps) => ({
  places: selectAllPlaces(state),
  errors: state.errors.places,
  currentUser: state.session.currentUser,
  // const place = { title: 'Untitled', private: false, owner_id: 2 };
  // return { place };
  // places,
});

const mapDispatchToProps = (dispatch) => ({
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  createPlace: place => dispatch(createPlace(place)),
  fetchPlaces: () => dispatch(fetchPlaces()),
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  createPage: (page) => dispatch(createPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
