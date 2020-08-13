import * as actionType from '../actions/types';

const initialState = {
  loginToast: false,
  signUpToast: false,
  createNewUser: false,
  trackDataLoading: false,
  updateUserSuccessToast: false,
  redirect: false,
  editUser: false,
  createUser: false,
  deleteUserToast: {
    open: false,
    accept: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_TOAST:
      return { ...state, loginToast: action.payload, signUpToast: false };

    case actionType.CLOSE_LOGIN_TOAST:
      return { ...state, loginToast: action.payload };

    case actionType.OPEN_SIGN_UP_TOAST:
      return { ...state, signUpToast: action.payload, loginToast: false };

    case actionType.CLOSE_SIGN_UP_TOAST:
      return { ...state, signUpToast: action.payload };

    case actionType.TRACK_DATA_LOADING:
      return { ...state, trackDataLoading: !state.trackDataLoading };

    case actionType.REDIRECT:
      return { ...state, redirect: !state.redirect };

    case actionType.EDIT_USER_INFO:
      return { ...state, editUser: !state.editUser };

    case actionType.CREATE_NEW_USER:
      return { ...state, createUser: true };

    case actionType.UPDATE_USER_STATUS_TOAST:
      return { ...state, updateUserSuccessToast: action.payload };

    case actionType.DELETE_USER_TOAST_TOGGLE:
      return { ...state, deleteUserToast: { ...state.deleteUserToast, open: action.payload } };

    default:
      return state;
  }
};

export default rootReducer;
