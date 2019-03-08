import {
  RECEIVE_PAGES,
  RECEIVE_PAGE,
  REMOVE_PAGE,
  RESET_PAGES,
} from '../actions/pages_actions';
import merge from 'lodash/merge';

const PagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_PAGES:
      return merge({}, action.pages);
    case RECEIVE_PAGE:
      return merge({}, state, {[action.page.id]: action.page});
    case REMOVE_PAGE:
      newState = merge({}, state);
      delete newState[action.pageId];
      return newState;
    case RESET_PAGES:
      return {};
    default:
      return state;
  }
};

export default PagesReducer;