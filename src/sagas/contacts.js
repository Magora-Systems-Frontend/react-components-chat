import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchData as fetch } from '../helpers/helpers';
import { FETCH_CONTACTS_REQUEST, fetchContactsFailed, setContacts} from '../actions/contactsActions';

function* fetchContacts() {
  try {
    const contacts = yield call(fetch, 'http://www.json-generator.com/api/json/get/clLmYQkcvC');
    yield put(setContacts(contacts));
  } catch (error) {
    console.log(error);
    yield put(fetchContactsFailed(error))
  }
}

export function* watchContacts() {
    yield takeLatest(FETCH_CONTACTS_REQUEST, fetchContacts)
}
