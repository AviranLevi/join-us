import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getTrackData = async (id) => {
  try {
    const { data } = await api.get('/api/spotify', { params: { id } });
    if (data) return data;
  } catch (error) {
    throw error;
  }
};
