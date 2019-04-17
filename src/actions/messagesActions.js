export const SEND_MESSAGE = 'SEND_MESSAGE';
export const REPLY_TEXT = 'REPLY_TEXT';

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
