import {
  FETCH_CONTACTS_SUCCESS,
  // SEARCH_CONTACT,
  // DELETE_CONTACT,
  // CREATE_CONTACT,
  // FETCH_CONTACTS_ERROR,
} from '../actions/contacts';

export function contacts(state = [], action) {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return action.payload;
    // case FETCH_CONTACTS_ERROR:
    //   return {...state, error: action.payload};
    // case SEARCH_CONTACT:
    //   return state.filter(
    //     item => item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
    //   );
    // case CREATE_CONTACT:
    //   return state.concat(action.payload);
    // case DELETE_CONTACT:
    //   return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
