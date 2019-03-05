import React from 'react';
import { connect } from 'react-redux';
import PageShow from './page_show';
import { fetchPage } from '../../actions/pages_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  testState: state,
  // page: state.pages[ownProps.match.params.pageId],
});

const mapDispatchToProps = dispatch => ({
  fetchPages: () => dispatch(fetchPages()),
  fetchPage: (id) => dispatch(fetchPage(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PageShow);