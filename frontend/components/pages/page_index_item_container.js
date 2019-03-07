import React from 'react';
import { connect } from 'react-redux';
import PageIndexItem from './page_index_item';
import { fetchPage, fetchPages, deletePage, createPage } from '../../actions/pages_actions';
import { fetchPlaces } from '../../actions/places_actions';
import { childTest } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
  childrenTest: childTest(state, ownProps.pageId),
});

const mapDispatchToProps = dispatch => ({
  fetchPlaces: () => dispatch(fetchPlaces()),
  fetchPages: (id) => dispatch(fetchPages(id)),

  createPage: (page) => dispatch(createPage(page)),
  fetchPage: (id) => dispatch(fetchPage(id)),
  deletePage: id => dispatch(deletePage(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndexItem);