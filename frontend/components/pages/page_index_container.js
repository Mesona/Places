import React from 'react';
import { connect } from 'react-redux';
import PageIndex from './page_index';
import { fetchPages, deletePage, createPage } from '../../actions/pages_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  // testState: state,
  // viewState: viewState(state),
  // allPlaces: selectAllPlaces(state),
  // currentPlace: ownProps.match.params.placeId,
  // placeTest: ownProps,
  pages: state.entities.pages,
  firstPage: Object.values(state.entities.pages)[0],
  otherPages: Object.values(state.entities.pages).slice(1),
});

const mapDispatchToProps = dispatch => ({
  fetchPages: (id) => dispatch(fetchPages(id)),
  deletePage: id => dispatch(deletePage(id)),
  createPage: (page) => dispatch(createPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);