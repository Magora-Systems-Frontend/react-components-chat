export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const CREATE_CONTACT = 'CREATE_CONTACT';

export function fetchContactsRequest() {
  return {
    type: FETCH_CONTACTS_REQUEST,
  };
}

export function fetchContactsSuccess(contacts) {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: contacts,
  };
}

export function fetchContactsError(error) {
  return {
    type: FETCH_CONTACTS_ERROR,
    payload: error,
  };
}

export function searchContact(name) {
  return {
    type: SEARCH_CONTACT,
    payload: name,
  };
}

export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
}
//----------------
export function createContact(contact) {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
}
