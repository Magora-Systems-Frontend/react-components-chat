import { SEARCH_CONTACT, DELETE_CONTACT, CREATE_CONTACT } from '../actions/contactsActions';
import avatar from '../images/avatar.png';

const defaultState = [
  {
    id: 1,
    avatar: avatar,
    name: 'John Marry',
    lastMessage: 'Hello, you',
    date: '4:41 PM',
  },
  {
    id: 2,
    avatar: avatar,
    name: 'John Dow',
    lastMessage: 'What\'s up, Joey?',
    date: '4:42 PM',
  },
  {
    id: 3,
    avatar: avatar,
    name: 'Lion King',
    lastMessage: 'All right',
    date: '4:42 PM',
  },
];

export function contactsReducer(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_CONTACT:
      return defaultState.filter(item => item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
    case CREATE_CONTACT:
      return state.concat(action.payload);
    case DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
