import axios from 'axios';
import { apiConfig } from '../config';

const api = axios.create({
  baseURL: apiConfig.url,
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

export const removeProject = async (userId) => {
  try {
    const { data } = await api.delete(`/project/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
