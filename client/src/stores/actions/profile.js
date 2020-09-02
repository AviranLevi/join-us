import axios from 'axios';
import * as actionType from './types';
import { serverURL } from '../../config';

const api = axios.create({
  baseURL: serverURL,
});

export const getUserProfile = (userId) => (dispatch) => {
  const token = localStorage.getItem('accessToken');
  api
    .get(`/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      const { data } = res;
      const { user, projects } = data;
      dispatch({ type: actionType.PROFILE_DATA, payload: { ...user, projects } });
    })
    .catch((err) => console.log(err));
};
