import React from 'react';
import { connect } from 'react-redux';
import PageIndexItem from './page_index_item';
import { fetchPage, deletePage } from '../../actions/pages_actions';

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (id) => dispatch(fetchPage(id)),
  deletePage: id => dispatch(deletePage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageIndexItem);