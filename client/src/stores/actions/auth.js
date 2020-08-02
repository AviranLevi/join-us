import axios from 'axios';
import * as actionType from './types';
import { apiConfig } from '../../config';

const { url } = apiConfig;

const api = axios.create({
  baseURL: url,
});

export const createNewUser = () => (dispatch, getState) => {
  const data = getState().user;
  const { name, email, password, confirmPassword } = data;
  if (name && email && password && password === confirmPassword) {
    api
      .post('/user', { name, email, password })
      .then((res) => {
        const { data } = res;
        console.log(data);
        dispatch({ type: actionType.CLOSE_SIGN_UP_TOAST });
        // dispatch({ type: actionType.USER_SUBMIT, payload: data });
      })
      .catch((err) => console.log(err));
  }
};

export const userLogin = () => (dispatch, getState) => {
  const { email, password } = getState().user;
  api
    .post('/user/login', { email, password })
    .then((res) => {
      dispatch({ type: actionType.TRACK_DATA_LOADING, payload: true });
      const { data } = res;
      const { isAuthenticated, user } = data;
      if (isAuthenticated) {
        dispatch({ type: actionType.USER_LOG_IN, payload: user });
        dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
        dispatch({ type: actionType.CLOSE_LOGIN_TOAST });
      }
    })
    .catch((err) => {
      dispatch({ type: actionType.USER_NOT_FOUND, payload: true });
    });
};

export const userLogout = () => (dispatch) => {
  api
    .get('/user/logout')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const userAuthenticated = () => (dispatch) => {
  api
    .get('/user/auth')
    .then((res) => {
      if (res.status !== 401) {
        console.log(res);
      }
      return { isAuthenticated: false, user: {} };
    })
    .catch((err) => console.log(err));
};
