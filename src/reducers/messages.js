import { SEND_MESSAGE } from '../actions/messagesActions';
import avatar from '../images/avatar.png';

const defaultState = [
  {
    id: 1,
    avatar: avatar,
    incoming: true,
    name: 'Rony Maria',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    time: '12:30 PM'
  },
  {
    id: 2,
    avatar: avatar,
    incoming: false,
    name: 'Jon Dow',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time: '12:45 PM'
  },
  {
    id: 3,
    avatar: avatar,
    incoming: false,
    name: 'Jon Dow',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time: '12:45 PM'
  }
];

export function messagesReducer(state = defaultState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.concat({
        id: state.length+1,
        text: action.payload,
        avatar: avatar,
        incoming: false,
        name: 'Jon Dow',
        time: '12:45 PM'
      });
    default:
      return defaultState
  }
}
