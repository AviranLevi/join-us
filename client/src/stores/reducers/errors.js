import * as actionType from '../actions/types';

const initialState = {
  signUp: {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
  },
  login: {
    notFound: false,
    authenticated: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_NAME_ERROR:
      return { ...state, signUp: { ...state.signUp, name: action.payload } };
    case actionType.USER_EMAIL_ERROR:
      return { ...state, signUp: { ...state.signUp, email: action.payload } };

    case actionType.USER_PASSWORD_ERROR:
      return { ...state, signUp: { ...state.signUp, password: action.payload } };

    case actionType.USER_CONFIRM_PASSWORD_ERROR:
      return { ...state, signUp: { ...state.signUp, confirmPassword: action.payload } };

    case actionType.USER_PHONE_ERROR:
      return { ...state, signUp: { ...state.signUp, phone: action.payload } };

    case actionType.USER_NOT_FOUND: {
      return { ...state, login: { ...state.login, notFound: action.payload } };
    }

    default:
      return state;
  }
};

export default rootReducer;
