import { SEARCH_CONTACT, DELETE_CONTACT, CREATE_CONTACT, SET_CONTACTS, FETCH_CONTACTS_FAILED } from '../actions/contactsActions';

export function contactsReducer(state = [], action) {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload;
    case FETCH_CONTACTS_FAILED:
      return {...state, error: action.payload};
    case SEARCH_CONTACT:
      return state.filter(item => item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
    case CREATE_CONTACT:
      return state.concat(action.payload);
    case DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
