import * as actionType from './types';
import validator from 'validator';

export const userName = (name) => (dispatch) => {
  const nameIsValid = validator.isLength(name, { min: 3, max: 20 });
  if (nameIsValid) {
    dispatch({ type: actionType.USER_NAME, payload: name });
    dispatch({ type: actionType.USER_NAME_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_NAME_ERROR, payload: true });
  }
};

export const userEmail = (email) => (dispatch) => {
  const emailIsValid = validator.isEmail(email);
  if (emailIsValid) {
    dispatch({ type: actionType.USER_EMAIL, payload: email });
    dispatch({ type: actionType.USER_EMAIL_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_EMAIL_ERROR, payload: true });
  }
};

export const userPassword = (password) => (dispatch) => {
  const passwordIsValid = validator.isLength(password, { min: 6, max: 25 });
  if (passwordIsValid) {
    dispatch({ type: actionType.USER_PASSWORD, payload: password });
    dispatch({ type: actionType.USER_PASSWORD_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_PASSWORD_ERROR, payload: true });
  }
};

export const userPhone = (phone) => (dispatch) => {
  const phoneIsValid = validator.isMobilePhone(phone, 'he-IL');
  if (phone && phoneIsValid) {
    dispatch({ type: actionType.USER_PHONE, payload: phone });
    dispatch({ type: actionType.USER_PHONE_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.USER_PHONE_ERROR, payload: true });
  }
};

export const createNewUser = () => (dispatch, getState) => {
  const data = getState();
  console.log(data);
};
