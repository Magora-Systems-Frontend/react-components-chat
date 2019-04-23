export const SELECT_CONTACT_ID = 'SELECT_CONTACT_ID';

export function selectContactId(id) {
  return {
    type: SELECT_CONTACT_ID,
    payload: id,
  };
}
