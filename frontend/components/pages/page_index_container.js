import React from 'react';
import { connect } from 'react-redux';
import PageIndex from './page_index';
import { fetchPages, deletePage } from '../../actions/pages_actions';
import { selectAllPlaces, selectPages } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  // parentPlace: selectAllPlaces(state).filter((e) => e.id === ownProps.match.params.placeId),
  // pages: state.entities.places[125],
  testState: state,
  // allPages: selectPages(state),
  // place: state.entities.place
  // place: state.place[ownProps.match.params.placeId],
  // pages: state.place[ownProps.match.params.]
});

const mapDispatchToProps = dispatch => ({
  fetchPages: () => dispatch(fetchPages()),
  deletePage: id => dispatch(deletePage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);