import { all } from 'redux-saga/effects';
import { watchContacts } from './contacts';
import { watchMessages } from './messages';

export function* rootSaga() {
  yield all([
    watchMessages(),
    watchContacts()
  ])
}
