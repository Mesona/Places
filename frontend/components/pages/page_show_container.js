import React from 'react';
import { connect } from 'react-redux';
import PageShow from './page_show';
import { fetchPage, fetchPages, updatePage } from '../../actions/pages_actions';
import { viewState, thisPlace } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  pages: state.entities.pages,
  // places: state.entities.places,
  places: thisPlace(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  fetchPage: (id) => dispatch(fetchPage(id)),
  updatePage: (page) => dispatch(updatePage(page)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PageShow);