import { FETCH_CHAT_SUCCESS, DELETE_CONTACT } from '../actions';

export default function chat(state = null, action) {
  switch (action.type) {
    case FETCH_CHAT_SUCCESS:
      return action.payload;
    case DELETE_CONTACT:
      return null;
    default:
      return state;
  }
}
