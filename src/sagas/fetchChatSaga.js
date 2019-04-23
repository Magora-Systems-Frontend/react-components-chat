import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAPI } from '../helpers';
import { FETCH_CHAT_REQUEST, fetchChatSuccess, fetchChatError } from '../actions/chat';

// const one = 'https://next.json-generator.com/api/json/get/EJi02_w9U?indent=2';
// const two = 'https://next.json-generator.com/api/json/get/N1VRTuw98?indent=2';
// const three = 'https://next.json-generator.com/api/json/get/EyrzCOw98?indent=2';

function* fetchChat(action) {
  try {
    let idToFetch;
    if (action.payload === '99bd85a3dcb8ff5f9c674bf7') idToFetch = 'EJi02_w9U';
    if (action.payload === '5cbd85a3dcb8ff5f9c674bf7') idToFetch = 'N1VRTuw98';
    if (action.payload === '5cbd8231a841dfb5c30b6372') idToFetch = 'EyrzCOw98';
    const chat = yield call(fetchAPI, `https://next.json-generator.com/api/json/get/${idToFetch}`);
    yield put(fetchChatSuccess(chat));
  } catch (error) {
    yield put(fetchChatError(error));
  }
}

export function* fetchChatSaga() {
  yield takeLatest(FETCH_CHAT_REQUEST, fetchChat);
}
