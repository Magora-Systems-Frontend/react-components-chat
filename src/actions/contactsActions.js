export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const CREATE_CONTACT = 'CREATE_CONTACT';

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
