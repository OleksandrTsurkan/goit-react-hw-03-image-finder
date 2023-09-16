const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38678956-a1561c04372c108d76606b5d7';

export const searchPhoto = (searchValue, page) => {
  return fetch(
    `${BASE_URL}?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default searchPhoto;
