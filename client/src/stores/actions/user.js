import axios from 'axios';
import validator from 'validator';
import * as actionType from './types';
import { findErrors } from '../../utils/general';

export const getUser = (userId) => (dispatch) => {};

export const getUserProjects = (userId) => (dispatch) => {
  axios
    .get(`/api/project/user/${userId}`)
    .then((res) => {
      const { data } = res;
      console.log(data);
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
  dispatch({ type: actionType.USER_PASSWORD, payload: password });
  const passwordIsValid = validator.isLength(password, { min: 6, max: 25 });

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

export const userSpotify = (url) => ({
  type: actionType.USER_SPOTIFY,
  payload: url,
});

export const userInstagram = (url) => ({
  type: actionType.USER_INSTAGRAM,
  payload: url,
});

export const userTiktok = (url) => ({
  type: actionType.USER_TIKTOK,
  payload: url,
});

export const userFacebook = (url) => ({
  type: actionType.USER_FACEBOOK,
  payload: url,
});

export const userYouTube = (url) => ({
  type: actionType.USER_YOUTUBE,
  payload: url,
});

export const userWebsite = (url) => ({
  type: actionType.USER_WEBSITE,
  payload: url,
});

export const updateUserInfo = (updatedUserInfo) => (dispatch, getState) => {
  const { name, email, oldPassword, password, confirmPassword } = updatedUserInfo;
  const nameIsValid = validator.isLength(name, { min: 3, max: 20 });
  const emailIsValid = validator.isEmail(email);
  const passwordIsValid = validator.isLength(password, { min: 6, max: 25 });
  const { id } = getState().user;

  if (name) {
    if (nameIsValid) {
      dispatch({ type: actionType.UPDATE_USER_NAME_ERROR, payload: false });
    } else {
      dispatch({ type: actionType.UPDATE_USER_NAME_ERROR, payload: true });
    }
  }

  if (email) {
    if (emailIsValid) {
      dispatch({ type: actionType.UPDATE_USER_EMAIL_ERROR, payload: false });
    } else {
      dispatch({ type: actionType.UPDATE_USER_EMAIL_ERROR, payload: true });
    }
  }

  if (password) {
    if (passwordIsValid) {
      dispatch({ type: actionType.UPDATE_USER_PASSWORD_ERROR, payload: false });
    } else {
      dispatch({ type: actionType.UPDATE_USER_PASSWORD_ERROR, payload: true });
    }
  }

  if (confirmPassword) {
    if (passwordIsValid && password === confirmPassword) {
      dispatch({ type: actionType.UPDATE_USER_CONFIRM_PASSWORD_ERROR, payload: false });
    } else {
      dispatch({ type: actionType.UPDATE_USER_CONFIRM_PASSWORD_ERROR, payload: true });
    }
  }

  const errs = getState().errors;
  const noErrors = findErrors(errs.updateUser);

  if (noErrors) {
    axios
      .patch(`/api/user/${id}`, updatedUserInfo)
      .then((res) => {
        const { data } = res;
        const { error } = data;
        if (error) {
          dispatch({ type: actionType.UPDATE_EMAIL_ALREADY_IN_USE_ERROR, payload: true });
        } else {
          dispatch({ type: actionType.UPDATE_USER, payload: data });
          dispatch({ type: actionType.UPDATE_USER_STATUS_TOAST, payload: true });
          dispatch({ type: actionType.UPDATE_EMAIL_ALREADY_IN_USE_ERROR, payload: false });
        }
      })
      .catch((err) => console.log(err));
  }
};

export const deleteUser = () => (dispatch, getState) => {
  const { id } = getState().user;
  axios
    .delete(`/api/user/${id}`)
    .then((res) => {
      const { data } = res;
      const { success } = data;
      if (success) {
        dispatch({ type: actionType.USER_LOG_OUT });
      }
    })
    .catch((err) => console.log(err));
};
