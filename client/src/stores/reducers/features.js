import * as actionType from '../actions/types';

const initialState = {
  loginToast: false,
  signUpToast: false,
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

    default:
      return state;
  }
};

export default rootReducer;
