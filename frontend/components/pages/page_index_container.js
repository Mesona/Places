import React from 'react';
import { connect } from 'react-redux';
import PageIndex from './page_index';
import { fetchPages, deletePage } from '../../actions/pages_actions';
import { selectAllPlaces, selectPages, viewState, selectAllPages } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  // testState: state,
  // viewState: viewState(state),
  // allPlaces: selectAllPlaces(state),
  // currentPlace: ownProps.match.params.placeId,
  // placeTest: ownProps,
  pages: state.entities.pages,
});

const mapDispatchToProps = dispatch => ({
  fetchPages: (id) => dispatch(fetchPages(id)),
  deletePage: id => dispatch(deletePage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);