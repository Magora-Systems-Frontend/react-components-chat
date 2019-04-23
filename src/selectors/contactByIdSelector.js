import { createSelector } from 'reselect';

export const contactByIdSelector = createSelector(
  state => state.contactId,
  state => state.contacts,
  (contactId, contacts) => contacts.filter(contact => contact.id === contactId)[0]
);
