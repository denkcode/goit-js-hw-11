import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const BASE_URL = 'https://pixabay.com/api/';
const ApiKey = '54217574-1b59999edbea9c550fa507ae7';

export function getImagesByQuery(query) {
  return axios.get('', {
    params: {
      key: ApiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(response => response.data);
}

export function fetchImages() {
  return fetch(`${BASE_URL}?key=${ApiKey}&q=random&image_type=photo`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => data.hits);
}
