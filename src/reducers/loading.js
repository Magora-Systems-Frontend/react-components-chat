import {
  FETCH_CHAT_REQUEST,
  FETCH_CHAT_SUCCESS,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from '../actions';

export function loading(state = {}, action) {
  switch (action.type) {
    case FETCH_CHAT_REQUEST:
      return { ...state, chatLoading: true };
    case FETCH_CHAT_SUCCESS:
      return { ...state, chatLoading: false };
    case FETCH_CONTACTS_REQUEST:
      return { ...state, contactsLoading: true };
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contactsLoading: false };
    default:
      return state;
  }
}
