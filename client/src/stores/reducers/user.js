import * as actionType from '../actions/types';

const initialState = {
  loggedIn: false,
  name: '',
  password: '',
  email: '',
  phone: '',
  profileImage: '',
  projects: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_NAME:
      return { ...state, name: action.payload };

    case actionType.USER_EMAIL:
      return { ...state, email: action.payload };

    case actionType.USER_PASSWORD:
      return { ...state, password: action.payload };

    case actionType.USER_PHONE:
      return { ...state, phone: action.payload };

    case actionType.FACEBOOK_LOGIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        profileImage: action.payload.imageSrc,
        loggedIn: true,
      };

    default:
      return state;
  }
};

export default rootReducer;
