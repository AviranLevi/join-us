import * as actionType from '../actions/types';

const initialState = {
  loginToast: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.OPEN_LOGIN_TOAST:
      return {
        ...state,
        loginToast: true,
      };

    case actionType.CLOSE_LOGIN_TOAST:
      return {
        ...state,
        loginToast: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
