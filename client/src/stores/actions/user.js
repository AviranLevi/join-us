import axios from 'axios';
import validator from 'validator';
import * as actionType from './types';

export const getUserProjects = (userId) => (dispatch) => {
  axios
    .get(`/api/project/user/${userId}`)
    .then((res) => {
      const { data } = res;
      dispatch({ type: actionType.USER_PROJECTS, payload: data });
    })
    .catch((err) => console.log(err));
};

export const uploadImage = (file) => (dispatch) => {
  if (file) {
    const formData = new FormData();
    formData.append('file', file);
    axios
      .post('/api/user/image', formData, {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
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

export const userSpotify = (url) => ({ type: actionType.USER_SPOTIFY, payload: url });

export const userInstagram = (url) => ({ type: actionType.USER_INSTAGRAM, payload: url });

export const userTiktok = (url) => ({ type: actionType.USER_TIKTOK, payload: url });

export const userFacebook = (url) => ({ type: actionType.USER_FACEBOOK, payload: url });

export const userYouTube = (url) => ({ type: actionType.USER_YOUTUBE, payload: url });

export const userWebsite = (url) => ({ type: actionType.USER_WEBSITE, payload: url });

export const deleteUser = (userId) => (dispatch) => {
  axios
    .delete(`api/user/${userId}`)
    .then((res) => {
      const { data } = res;
      if (data.success) {
        dispatch({ type: actionType.USER_LOG_OUT });
      }
    })
    .catch((err) => console.log(err));
};
