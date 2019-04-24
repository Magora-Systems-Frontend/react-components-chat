import { SEARCH_CONTACT } from '../actions';

export default function searchContact(state = '', action) {
  switch (action.type) {
    case SEARCH_CONTACT:
      return action.payload;
    default:
      return state;
  }
}
