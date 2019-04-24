import { createSelector } from 'reselect';
import { contactsSelector } from './contactsSelector';
import { searchContactSelector } from './searchContactSelector';

export const filteredContactsSelector = createSelector(
  state => contactsSelector(state),
  state => searchContactSelector(state),
  (contacts, searchContact) => contacts.filter(contact => contact.name.toLowerCase().includes(searchContact.toLowerCase()))
);
