import * as actionType from '../actions/types';

const initialState = {
  loggedIn: false,
  name: '',
  password: '',
  email: '',
  profileImage: '',
  projects: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
