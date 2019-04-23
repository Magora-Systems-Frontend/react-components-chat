import { createSelector } from 'reselect';

export const contactIdSelector = createSelector(
  state => state.contactId,
  contactId => contactId
);
