import * as actionType from '../actions/types';

const initialState = {
  id: '',
  loggedIn: false,
  userName: '',
  name: '',
  password: '',
  confirmPassword: '',
  email: '',
  profileImage: {},
  projects: [],
  spotify: '',
  instagram: '',
  tiktok: '',
  facebook: '',
  youtube: '',
  website: '',
  createdAt: '',
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_LOG_IN:
      return {
        ...state,
        loggedIn: true,
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        userName: action.payload.userName,
        createdAt: action.payload.createdAt,
        profileImage: action.payload.profileImage || {},
        isAuthenticated: true,
      };

    case actionType.USER_NAME:
      return { ...state, name: action.payload };

    case actionType.USER_EMAIL:
      return { ...state, email: action.payload };

    case actionType.USER_PASSWORD:
      return { ...state, password: action.payload };

    case actionType.USER_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };

    case actionType.USER_SUBMIT:
      const { _id, name, email } = action.payload;
      return { ...state, id: _id, name, email, loggedIn: true };

    case actionType.FACEBOOK_LOGIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        profileImage: action.payload.imageSrc,
        loggedIn: true,
      };

    case actionType.USER_PROJECTS:
      return { ...state, projects: action.payload };

    case actionType.REMOVE_PROJECT:
      const removedProject = state.projects.findIndex((project) => project.projectId === action.payload);
      const projects = state.projects.slice(removedProject, 1);
      return { ...state, projects };

    case actionType.UPDATE_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        profileImage: action.payload.profileImage || state.profileImage,
      };

    case actionType.USER_LOG_OUT:
      return initialState;

    default:
      return state;
  }
};

export default rootReducer;
