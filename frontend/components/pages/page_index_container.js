import React from 'react';
import { connect } from 'react-redux';
import PageIndex from './page_index';
import { fetchPages, deletePage, createPage, fetchPage } from '../../actions/pages_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  places: state.entities.places,
  pages: state.entities.pages,
  firstPage: Object.values(state.entities.pages)[0],
  otherPages: Object.values(state.entities.pages).slice(1),
  currentPage: state.entities.pages[ownProps.match.params.pageId],
});

const mapDispatchToProps = dispatch => ({
  fetchPlaces: () => dispatch(fetchPage()),
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  fetchPages: (id) => dispatch(fetchPages(id)),
  fetchPage: (id) => dispatch(fetchPage(id)),
  deletePage: id => dispatch(deletePage(id)),
  createPage: (page) => dispatch(createPage(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageIndex));