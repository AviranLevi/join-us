import axios from 'axios';

export const getUserProject = async (id) => {
  try {
    const { data } = await axios.get(`/api/project/${id}`);
    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await axios.post('/api/user/image', formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProject = async (userId) => {
  try {
    const { data } = await axios.delete(`/api/project/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
