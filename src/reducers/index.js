import { contactsReducer } from './contacts';
import { messagesReducer } from './messages';
import { replyTextReducer } from './replyText';
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  messages: messagesReducer,
  replyText: replyTextReducer,
});
