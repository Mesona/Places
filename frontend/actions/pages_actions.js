import * as PagesAPIUtils from '../util/pages';

export const RECEIVE_PAGES = `RECEIVE_PAGES`;
export const RECEIVE_PAGE = `RECEIVE_PAGE`;
export const CREATE_PAGE = `CREATE_PAGE`;
export const REMOVE_PAGE = `REMOVE_PAGE`;
export const RECEIVE_PAGE_ERRORS = `RECEIVE_PAGE_ERRORS`;

const receivePages = pages => ({
  type: RECEIVE_PAGES,
  pages,
});

const receivePage = page => ({
  type: RECEIVE_PAGE,
  page,
});

const removePage = pageId => ({
  type: REMOVE_PAGE,
  pageId,
});

export const receiveErrors = errors => ({
  type: RECEIVE_PAGE_ERRORS,
  errors,
});

export const fetchPages = placeId => dispatch => (
  PagesAPIUtils.getPages(placeId)
    .then(pages => dispatch(receivePages(pages))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);

export const fetchPage = id => dispatch => (
  PagesAPIUtils.getPage(id)
    .then(id => dispatch(receivePage(id))),
      errors => dispatch(receiveErrors(errors.responseJSON))
);

export const createPage = page => dispatch => (
  PagesAPIUtils.postPage(page)
    .then(page=> dispatch(receivePage(page)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const updatePage = page => dispatch => (
  PagesAPIUtils.patchPage(page)
    .then(page => dispatch(receivePage(page)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deletePage = pageId => dispatch => (
  PagesAPIUtils.deletePage(pageId)
    .then( page => dispatch(removePage(pageId)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
);