import * as actionType from '../actions/types';

const initialState = {
  id: '',
  loggedIn: false,
  name: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: '',
  profileImage: '',
  projects: [],
  spotify: '',
  instagram: '',
  tiktok: '',
  facebook: '',
  youtube: '',
  website: '',
  createdAt: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_LOG_IN:
      return { ...state, loggedIn: true };

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

    case actionType.USER_PROJECTS:
      return { ...state, projects: action.payload };

    case actionType.REMOVE_PROJECT:
      const removedProject = state.projects.findIndex((project) => project.projectId === action.payload);
      const projects = state.projects.slice(removedProject, 1);
      return { ...state, projects };

    case actionType.USER_LOG_OUT:
      return state;

    default:
      return state;
  }
};

export default rootReducer;
