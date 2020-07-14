import * as actionType from './types';

export const openLoginToast = () => ({
  type: actionType.OPEN_LOGIN_TOAST,
  payload: true,
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
