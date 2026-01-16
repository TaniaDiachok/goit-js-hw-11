import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54202886-b679fb307351c5ca332e2dbc0';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
