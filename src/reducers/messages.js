import { SEND_MESSAGE, SET_MESSAGES } from '../actions/messagesActions';
import avatar from '../images/avatar.png';

export function messagesReducer(state = [], action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    case SEND_MESSAGE:
      return state.concat({
        id: state.length+1,
        text: action.payload.replyText,
        avatar: avatar,
        incoming: false,
        name: 'Jon Dow',
        time: '12:45 PM'
      });
    default:
      return state
  }
}
