import axios from 'axios';
import * as actionType from './types';
import { serverURL } from '../../config';
import { accessToken } from '../../config';

const api = axios.create({
  baseURL: serverURL,
  headers: { Authorization: `Bearer ${accessToken}` },
});

export const getUserProfile = (userId) => (dispatch) => {
  api
    .get(`/user/${userId}`)
    .then((res) => {
      const { data } = res;
      const { user, projects } = data;
      dispatch({ type: actionType.PROFILE_DATA, payload: { ...user, projects } });
    })
    .catch((err) => console.log(err));
};
