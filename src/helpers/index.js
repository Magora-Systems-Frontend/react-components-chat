export const fetchAPI = async (url) => {
  const response = await fetch(url);
  return response.json();
};
