import axios from 'axios';
import { serverURL } from '../config';
import { accessToken } from '../config';

const api = axios.create({
  baseURL: serverURL,
  headers: { Authorization: `Bearer ${accessToken}` },
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
    const { data } = await api.post(`/user/image`, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProject = async (userId) => {
  try {
    const { data } = await api.delete(`/project/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
