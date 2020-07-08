import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getSpotifyToken = () => {
  try {
    const { data } = api.get('/api/spotify');
    console.log(data);
  } catch (error) {
    throw error;
  }
};
