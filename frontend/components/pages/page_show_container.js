import React from 'react';
import { connect } from 'react-redux';
import PageShow from './page_show';
import { fetchPage, fetchPages } from '../../actions/pages_actions';
import { viewState } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  testState: state,
  // page: state.pages[ownProps.match.params.pageId],
  viewState: viewState(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPages: () => dispatch(fetchPages()),
  fetchPage: (id) => dispatch(fetchPage(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PageShow);