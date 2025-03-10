import axios from 'axios';

const API_KEY = "07bYvD3hV0e010Zj5m01VzCAu0e0SAkGcGkTtPHRP4tP6YZTEMkrj47yEV"; 
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`/search?query=${query}&page=${page}`);
  return data;
};
