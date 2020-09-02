import axios from 'axios';
import { serverURL } from '../config';

const api = axios.create({
  baseURL: serverURL,
});

export const getUserProject = async (id) => {
  try {
    const { data } = await axios.get(`${serverURL}/project/${id}`);
    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const token = localStorage.getItem('accessToken');
    const { data } = await api.post(`/user/image`, formData, { headers: { Authorization: `Bearer ${token}` } });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProject = async (userId) => {
  try {
    const token = localStorage.getItem('accessToken');
    console.log(token);
    const { data } = await api.delete(`/project/${userId}`, { headers: { Authorization: `Bearer ${token}` } });
    return data;
  } catch (error) {
    console.log(error);
  }
};
