import axios from 'axios';
const BASE_KEY = '38678956-a1561c04372c108d76606b5d7';
const BASE_URL = 'https://pixabay.com/api/';

const getPhotosBySearch = async (searchValue, page) => {
  try {
    const { data } = await axios(
      `${BASE_URL}?q=${searchValue}&page=${page}&key=${BASE_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (!data.ok) {
      throw new Error('Failed to fetch data');
    }
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export default getPhotosBySearch;
