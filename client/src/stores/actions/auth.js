import axios from 'axios';
import * as actionType from './types';
import { findErrors } from '../../utils/general';
import { serverURL } from '../../config';

const api = axios.create({
  baseURL: serverURL,
});

export const createNewUser = () => (dispatch, getState) => {
  const { user, errors } = getState();

  const { name, email, password, confirmPassword } = user;

  if (!name) dispatch({ type: actionType.USER_NAME_ERROR, payload: true });
  if (!email) dispatch({ type: actionType.USER_EMAIL_ERROR, payload: true });
  if (!password) dispatch({ type: actionType.USER_PASSWORD_ERROR, payload: true });
  if (!confirmPassword) dispatch({ type: actionType.USER_CONFIRM_PASSWORD_ERROR, payload: true });

  const noErrors = findErrors(errors.signUp);

  if (noErrors && name && email && password === confirmPassword) {
    dispatch({ type: actionType.TRACK_DATA_LOADING, payload: true });
    axios
      .post(`${serverURL}/user`, { name, email, password })
      .then((res) => {
        const { data } = res;
        const { error } = data;
        if (error) {
          dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
          dispatch({ type: actionType.USER_ALREADY_EXISTS, payload: true });
        } else {
          dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
          dispatch({ type: actionType.CLOSE_SIGN_UP_TOAST });
          dispatch({ type: actionType.USER_ALREADY_EXISTS, payload: false });
          dispatch({ type: actionType.LOGIN_TOAST, payload: true });
        }
      })
      .catch((err) => console.log(err));
  }
};

export const userLogin = () => (dispatch, getState) => {
  const { email, password } = getState().user;
  dispatch({ type: actionType.TRACK_DATA_LOADING, payload: true });

  api
    .post(`/user/login`, { email, password })
    .then((res) => {
      const { data } = res;
      const { isAuthenticated, user, accessToken } = data;
      if (isAuthenticated) {
        localStorage.setItem('accessToken', accessToken);
        dispatch({ type: actionType.CLOSE_LOGIN_TOAST });
        dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
        window.location.reload();
      }
      if (data.error) {
        dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
        dispatch({ type: actionType.USER_ALREADY_EXISTS, payload: true });
      }
    })
    .catch((err) => {
      dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
      dispatch({ type: actionType.USER_NOT_FOUND, payload: true });
    });
};

export const userLogout = () => (dispatch) => {
  const token = localStorage.getItem('accessToken');
  api
    .get(`/user/logout`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      const { data } = res;
      const { user } = data;
      dispatch({ type: actionType.USER_LOG_OUT, payload: user });
      localStorage.removeItem('accessToken');
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

export const userAuthenticated = () => (dispatch) => {
  const token = localStorage.getItem('accessToken');
  api
    .get(`/user/auth`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      if (res.status !== 401) {
        const { data } = res;
        const { user } = data;
        dispatch({ type: actionType.USER_LOG_IN, payload: user });
      } else {
        dispatch({ type: actionType.USER_LOG_OUT });
      }
    })
    .catch((err) => console.log(err));
};
