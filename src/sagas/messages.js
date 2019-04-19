import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchData as fetch } from '../helpers/helpers';
import { FETCH_MESSAGES_REQUEST, fetchMessagesFailed, setMessages } from '../actions/messagesActions';

function* fetchMessages() {
  try {
    const messages = yield call(fetch, 'http://www.json-generator.com/api/json/get/cfdonivvNe');
    yield put(setMessages(messages));
  } catch (error) {
    console.log(error);
    yield put(fetchMessagesFailed(error))
  }
}

export function* watchMessages() {
  yield takeLatest(FETCH_MESSAGES_REQUEST, fetchMessages)
}
