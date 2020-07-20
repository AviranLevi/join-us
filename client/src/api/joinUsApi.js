import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const createUser = async (userInfo = {}) => {
  try {
    const { data } = await api.post('/user/create', userInfo);
    if (data) return data;
  } catch (error) {
    throw error;
  }
};

export const getUserProject = async (id) => {
  try {
    const { data } = await api.get(`/project/${id}`);
    if (data) return data;
  } catch (error) {
    throw error;
  }
};
