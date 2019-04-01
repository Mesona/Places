import React from 'react';
import { connect } from 'react-redux';
import PageShow from './page_show';
import { fetchPage, updatePage } from '../../actions/pages_actions';
import { selectAllPages } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { updatePlace } from '../../actions/places_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
  currentUser: state.session.currentUser,
  pages: selectAllPages(state),
  thisPlace: state.entities.places[ownProps.match.params.placeId],
  thisPage: state.entities.pages[ownProps.match.params.pageId],
  }
)};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  fetchPage: (id) => dispatch(fetchPage(id)),
  updatePage: (page) => dispatch(updatePage(page)),
  updatePlace: (place) => dispatch(updatePlace(place)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageShow));