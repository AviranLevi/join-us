import axios from 'axios';

export const getUserProject = async (id) => {
  try {
    const { data } = await axios.get(`/api/project/${id}`);
    if (data) return data;
  } catch (error) {
    throw error;
  }
};

export const removeProject = async (userId) => {
  try {
    const { data } = await axios.delete(`/api/project/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
