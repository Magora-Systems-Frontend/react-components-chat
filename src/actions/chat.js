export const FETCH_CHAT_REQUEST = 'FETCH_CHAT_REQUEST';
export const FETCH_CHAT_SUCCESS = 'FETCH_CHAT_SUCCESS';
export const FETCH_CHAT_ERROR = 'FETCH_CHAT_ERROR';

export function fetchChatRequest(id) {
  return {
    type: FETCH_CHAT_REQUEST,
    payload: id,
  };
}
export function fetchChatSuccess(chat) {
  return {
    type: FETCH_CHAT_SUCCESS,
    payload: chat,
  };
}
export function fetchChatError(error) {
  return {
    type: FETCH_CHAT_ERROR,
    payload: error,
  };
}
