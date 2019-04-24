import { createSelector } from 'reselect';

export const searchContactSelector = createSelector(
  state => state.searchContact,
  searchContact => searchContact
);
