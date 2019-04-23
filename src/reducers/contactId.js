import { SELECT_CONTACT_ID } from '../actions';

export function contactId(state = null, action) {
  switch (action.type) {
    case SELECT_CONTACT_ID:
      return action.payload;

    default:
      return state;
  }
}
