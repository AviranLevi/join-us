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
  const nameIsValid = validator.isLength(name, { min: 3, max: 20 });
  dispatch({ type: actionType.USER_NAME, payload: name });

  if (nameIsValid) {
    dispatch({ type: actionType.USER_NAME_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_NAME_ERROR, payload: true });
  }
};

export const userEmail = (email) => (dispatch) => {
  const emailIsValid = validator.isEmail(email);
  dispatch({ type: actionType.USER_EMAIL, payload: email });

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

export const userPhone = (phone) => (dispatch) => {
  const phoneIsValid = validator.isMobilePhone(phone);
  dispatch({ type: actionType.USER_PHONE, payload: phone });

  if (phone && phoneIsValid) {
    dispatch({ type: actionType.USER_PHONE_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_PHONE_ERROR, payload: true });
  }
};

//on progress
export const createNewUser = () => (dispatch, getState) => {
  const data = getState();
  console.log(data);
};

export const userSpotify = (url) => ({ type: actionType.USER_SPOTIFY, payload: url });

export const userInstagram = (url) => ({ type: actionType.USER_INSTAGRAM, payload: url });

export const userTiktok = (url) => ({ type: actionType.USER_TIKTOK, payload: url });

export const userFacebook = (url) => ({ type: actionType.USER_FACEBOOK, payload: url });

export const userYouTube = (url) => ({ type: actionType.USER_YOUTUBE, payload: url });

export const userWebsite = (url) => ({ type: actionType.USER_WEBSITE, payload: url });
