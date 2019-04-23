import { createSelector } from 'reselect';

export const contactsSelector = createSelector(
  state => state.contacts,
  contacts => contacts
);
