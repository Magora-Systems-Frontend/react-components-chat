import { combineReducers } from 'redux';
import contacts from './contacts';
import chat from './chat';
import contactId from './contactId';
import loading from './loading';
import searchContact from './searchContact';
// import { replyTextReducer } from './replyText';

export default combineReducers({
  contacts,
  chat,
  contactId,
  loading,
  searchContact,
  // replyText: replyTextReducer,
});
