import axios from 'axios';
import validator from 'validator';
import * as actionType from './types';
import { apiConfig } from '../../config';

const { url } = apiConfig;

const api = axios.create({
  baseURL: url,
});

export const getUserProjects = (userId) => (dispatch) => {
  api
    .get(`/project/user/${userId}`)
    .then((res) => {
      const { data } = res;
      dispatch({ type: actionType.USER_PROJECTS, payload: data });
    })
    .catch((err) => console.log(err));
};

export const userName = (name) => (dispatch) => {
  dispatch({ type: actionType.USER_NAME, payload: name });
  const nameIsValid = validator.isLength(name, { min: 3, max: 20 });

  if (nameIsValid) {
    dispatch({ type: actionType.USER_NAME_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_NAME_ERROR, payload: true });
  }
};

export const userEmail = (email) => (dispatch) => {
  dispatch({ type: actionType.USER_EMAIL, payload: email });
  const emailIsValid = validator.isEmail(email);

  if (emailIsValid) {
    dispatch({ type: actionType.USER_EMAIL_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_EMAIL_ERROR, payload: true });
  }
};

export const userPassword = (password) => (dispatch) => {
  const passwordIsValid = validator.isLength(password, { min: 6, max: 25 });
  dispatch({ type: actionType.USER_PASSWORD, payload: password });

  if (passwordIsValid) {
    dispatch({ type: actionType.USER_PASSWORD_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_PASSWORD_ERROR, payload: true });
  }
};

export const userConfirmPassword = (confirmPassword) => (dispatch, getState) => {
  const password = getState().user.password;
  dispatch({ type: actionType.USER_CONFIRM_PASSWORD, payload: confirmPassword });

  if (password !== confirmPassword) {
    dispatch({ type: actionType.USER_CONFIRM_PASSWORD_ERROR, payload: true });
  } else {
    dispatch({ type: actionType.USER_CONFIRM_PASSWORD_ERROR, payload: false });
  }
};

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
        console.log(user);
        dispatch({ type: actionType.USER_LOG_IN, payload: user });
        dispatch({ type: actionType.TRACK_DATA_LOADING, payload: false });
        dispatch({ type: actionType.CLOSE_LOGIN_TOAST });
      }
    })
    .catch((err) => console.log(err));
};

export const userSpotify = (url) => ({ type: actionType.USER_SPOTIFY, payload: url });

export const userInstagram = (url) => ({ type: actionType.USER_INSTAGRAM, payload: url });

export const userTiktok = (url) => ({ type: actionType.USER_TIKTOK, payload: url });

export const userFacebook = (url) => ({ type: actionType.USER_FACEBOOK, payload: url });

export const userYouTube = (url) => ({ type: actionType.USER_YOUTUBE, payload: url });

export const userWebsite = (url) => ({ type: actionType.USER_WEBSITE, payload: url });

export const userLogout = () => ({ type: actionType.USER_LOG_OUT });
