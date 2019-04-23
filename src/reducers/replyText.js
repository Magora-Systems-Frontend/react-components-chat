import { REPLY_TEXT } from '../actions/chats';

export function replyTextReducer(state = '', action) {
  switch (action.type) {
    case REPLY_TEXT:
      return { ...state, replyText: action.payload };
    default:
      return state;
  }
}
