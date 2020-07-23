import * as actionType from '../actions/types';

const initialState = {
  loggedIn: true,
  name: 'Su Xan San',
  password: '123456',
  email: 'aviran233@gmail.com',
  phone: '',
  profileImage:
    'https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg',
  projects: [],
  spotify: '',
  instagram: '',
  tiktok: '',
  facebook: '',
  website: '',
  createdAt: 'Jul 22nd 2020',
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

    case actionType.USER_PROJECTS:
      return { ...state, projects: action.payload };

    case actionType.REMOVE_PROJECT:
      console.log(action.payload);
      const removedProject = state.projects.findIndex((project) => project.projectId === action.payload);
      const projects = state.projects.slice(removedProject, 1);
      console.log(projects);
      return { ...state, projects };

    default:
      return state;
  }
};

export default rootReducer;
