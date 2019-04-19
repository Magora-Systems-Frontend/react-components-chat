export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const SET_CONTACTS = 'SET_CONTACTS';
export const FETCH_CONTACTS_FAILED = 'FETCH_CONTACTS_FAILED';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const CREATE_CONTACT = 'CREATE_CONTACT';

export function fetchContacts() {
  return {
    type: FETCH_CONTACTS_REQUEST,
  }
}

export function setContacts(contacts) {
  return {
    type: SET_CONTACTS,
    payload: contacts,
  }
}

export function fetchContactsFailed(error){
  return {
    type: FETCH_CONTACTS_FAILED,
    payload: error
  }
}

export function searchContact(name) {
  return {
    type: SEARCH_CONTACT,
    payload: name,
  }
}

export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    payload: id,
  }
}

export function createContact(contact) {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  }
}
