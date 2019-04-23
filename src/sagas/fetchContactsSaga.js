import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAPI } from '../helpers';
import { FETCH_CONTACTS_REQUEST, fetchContactsSuccess, fetchContactsError } from '../actions';

function* fetchContacts() {
  try {
    const contacts = yield call(fetchAPI, 'https://next.json-generator.com/api/json/get/Eyei-OLcU');
    // const contacts = yield call(fetch, 'http://www.json-generator.com/api/json/get/clLmYQkcvC');
    yield put(fetchContactsSuccess(contacts));
  } catch (error) {
    yield put(fetchContactsError(error));
  }
}

export function* fetchContactsSaga() {
  yield takeLatest(FETCH_CONTACTS_REQUEST, fetchContacts);
}
