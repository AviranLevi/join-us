import * as actionType from '../actions/types';

const initialState = {
  loginToast: false,
  signUpToast: false,
  linksCounter: 1,
  createNewUser: false,
  trackDataLoading: false,
  redirect: false,
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

    case actionType.INCREASE_LINK_COUNTER:
      return { ...state, linksCounter: state.linksCounter + 1 };

    case actionType.TRACK_DATA_LOADING:
      return { ...state, trackDataLoading: !state.trackDataLoading };

    case actionType.REDIRECT:
      return { ...state, redirect: !state.redirect };

    default:
      return state;
  }
};

export default rootReducer;
