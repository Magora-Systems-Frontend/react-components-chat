import { FETCH_CHAT_SUCCESS } from '../actions';

export function chat(state = null, action) {
  switch (action.type) {
    case FETCH_CHAT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
