import axios from 'axios';
import * as actionType from './types';

export const createNewUser = () => (dispatch, getState) => {
  const data = getState().user;
  const { name, email, password, confirmPassword } = data;
  if (name && email && password && password === confirmPassword) {
    axios
      .post('/api/user', { name, email, password })
      .then((res) => {
        const { data } = res;
        const { error } = data;
        if (error) {
          dispatch({ type: actionType.USER_ALREADY_EXISTS, payload: true });
        } else {
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
  axios
    .post('/api/user/login', { email, password })
    .then((res) => {
      dispatch({ type: actionType.TRACK_DATA_LOADING, payload: true });
      const { data } = res;
      const { isAuthenticated, user } = data;
      if (isAuthenticated) {
        dispatch({ type: actionType.USER_LOG_IN, payload: user });
        dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
        dispatch({ type: actionType.CLOSE_LOGIN_TOAST });
      }
      if (data.error) {
        dispatch({ type: actionType.USER_ALREADY_EXISTS, payload: true });
      }
    })
    .catch((err) => {
      dispatch({ type: actionType.USER_NOT_FOUND, payload: true });
    });
};

export const userLogout = () => (dispatch) => {
  axios
    .get('/api/user/logout')
    .then((res) => {
      const { data } = res;
      const { user } = data;
      dispatch({ type: actionType.USER_LOG_OUT, payload: user });
      dispatch({ type: actionType.USER_LOG_OUT });
    })
    .catch((err) => console.log(err));
};

export const userAuthenticated = () => (dispatch) => {
  axios
    .get('/api/user/auth')
    .then((res) => {
      if (res.status !== 401) {
        const { data } = res;
        const { user } = data;
        console.log(data);
        dispatch({ type: actionType.USER_LOG_IN, payload: user });
      }
    })
    .catch((err) => console.log(err));
};
