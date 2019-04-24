import {
  FETCH_CONTACTS_SUCCESS,
  DELETE_CONTACT,
  // SEARCH_CONTACT,
  // CREATE_CONTACT,
  // FETCH_CONTACTS_ERROR,
} from '../actions';

export default function contacts(state = [], action) {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return action.payload;
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    // case SEARCH_CONTACT:
    //   return state.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()));
    // case FETCH_CONTACTS_ERROR:
    //   return {...state, error: action.payload};
    // case CREATE_CONTACT:
    //   return state.concat(action.payload);
    default:
      return state;
  }
}
