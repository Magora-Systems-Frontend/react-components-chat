export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const REPLY_TEXT = 'REPLY_TEXT';
export const FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED';

export function fetchMessages() {
  return {
    type: FETCH_MESSAGES_REQUEST,
  }
}

export function fetchMessagesFailed() {
  return {
    type: FETCH_MESSAGES_Failed,
  }
}

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    payload: messages,
  }
}

export function replyText(text) {
  return {
    type: REPLY_TEXT,
    payload: text,
  }
}

export function sendMessage(text) {
  return {
    type: SEND_MESSAGE,
    payload: text,
  }
}
