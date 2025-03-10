import axios from 'axios';

const API_KEY = 'O7byrD3hV6O1qZejm50YlVzCAueQ5aKGCkIpHPR4tP6yZTEmKrj47yEV';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page = 1) => {
  try {
    const { data } = await axios.get('/search', {
      params: { query, page },
    });
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return null; // Або throw error, якщо хочеш, щоб виклик `getPhotos` обробляв помилки самостійно
  }
};

