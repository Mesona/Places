import React from 'react';
import { connect } from 'react-redux';
import PageShow from './page_show';
import { fetchPage, fetchPages, updatePage } from '../../actions/pages_actions';
import { viewState, thisPlace, selectAllPages } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
  currentUser: state.session.currentUser,
  thesePages: state.entities.pages,
  pages: selectAllPages(state),
  thesePages: selectAllPages(state),
  // places: state.entities.places,
  places: thisPlace(state),
  thisPlace: state.entities.places[ownProps.match.params.placeId],
  allPages: getState().entities.pages,
  test: getState(),
  }
)};

// const mapStateToProps = (state, ownProps) => ({
//   currentUser: state.session.currentUser,
//   thesePages: state.entities.pages,
//   pages: selectAllPages(state),
//   thesePages: selectAllPages(state),
//   // places: state.entities.places,
//   places: thisPlace(state),
//   thisPlace: state.entities.pages[ownProps.match.params.placeId],
//   allPages: getState().entities.pages,
//   test: getState(),
// });

// const mapStateToProps = (state, ownProps) => {
//   const defaultPage = {pageTitle: '', pageBody: '', placeTitle: ''};
//   const page = state.entities.pages[ownProps.match.params.pageId] || defaultPage;
//   const currentUser = state.session.currentUser;
//   const currentPlace =  state.entities.pages[ownProps.match.params.pageId];

//   return {
//     page,
//     pages,
//     currentUser,
//     currentPlace,
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  fetchPage: (id) => dispatch(fetchPage(id)),
  updatePage: (page) => dispatch(updatePage(page)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageShow));