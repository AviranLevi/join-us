import * as actionType from './types';

export const loginToast = (bool) => ({
  type: actionType.LOGIN_TOAST,
  payload: bool,
});

export const closeLoginToast = () => ({
  type: actionType.CLOSE_LOGIN_TOAST,
  payload: false,
});

export const openSignUpToast = () => ({
  type: actionType.OPEN_SIGN_UP_TOAST,
  payload: true,
});

export const closeSignUpToast = () => ({
  type: actionType.CLOSE_SIGN_UP_TOAST,
  payload: false,
});

export const editUserInfo = () => ({
  type: actionType.EDIT_USER_INFO,
});

export const closeErrorToast = () => ({
  type: actionType.CLOSE_ERROR_TOAST,
  payload: false,
});

export const deleteUserToast = (bool) => ({
  type: actionType.DELETE_USER_TOAST_TOGGLE,
  payload: bool,
});
