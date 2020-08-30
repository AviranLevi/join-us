import axios from 'axios';
import { serverURL } from '../config';

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
    const { data } = await axios.post(`${serverURL}/user/image`, formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProject = async (userId) => {
  try {
    const { data } = await axios.delete(`${serverURL}/project/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
