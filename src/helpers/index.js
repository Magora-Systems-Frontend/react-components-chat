import moment from 'moment';
export const fetchAPI = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const formatTime = momentDate => moment(momentDate).format('h:mm a');
export const formatConversationStartedAt = momentDate => moment(momentDate).format('MMMM D, YYYY');
