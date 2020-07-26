import * as actionType from '../actions/types';

const initialState = {
  loginToast: false,
  signUpToast: false,
  createNewUser: false,
  trackDataLoading: false,
  redirect: false,
  editUser: false,
  createUser: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.OPEN_LOGIN_TOAST:
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

    default:
      return state;
  }
};

export default rootReducer;
