
export const selectAllPlaces = state => Object.values(Object.values(state.entities.places).filter((e) => e.private === false));

export const selectMyPlaces = state => Object.values(Object.values(state.entities.places).filter((e) => e.owner_id === (typeof state.session.currentUser !== 'undefined' && state.session.currentUser !== null ? state.session.currentUser.id : -1)));
export const selectOtherPlaces = state => Object.values(Object.values(state.entities.places).filter((e) => e.owner_id != (typeof state.session.currentUser !== 'undefined' && state.session.currentUser !== null ? state.session.currentUser.id : -1) && e.private === false));
export const selectPrivatePlaces = state => Object.values(Object.values(state.entities.places).filter((e) => e.private === true && e.owner_id != (typeof state.session.currentUser !== 'undefined' && state.session.currentUser !== null ? state.session.currentUser.id : -1)));

export const selectAllPages = state => Object.values(state.entities.pages);
export const selectPageTitles = state => Object.values(state.entities.pages).map(page => page.title);