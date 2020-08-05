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
  project: {
    createError: false,
    spotify: false,
    appleMusic: false,
    youtube: false,
    soundcloud: false,
    deezer: false,
    tidal: false,
    instagram: false,
    tiktok: false,
    facebook: false,
    website: false,
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

    case actionType.USER_NOT_FOUND:
      return { ...state, login: { ...state.login, notFound: action.payload } };

    case actionType.SPOTIFY_LINK_ERROR:
      return { ...state, project: { ...state.project, spotify: action.payload } };

    case actionType.APPLE_MUSIC_LINK_ERROR:
      return { ...state, project: { ...state.project, appleMusic: action.payload } };

    case actionType.DEEZER_LINK_ERROR:
      return { ...state, project: { ...state.project, deezer: action.payload } };

    case actionType.YOUTUBE_LINK_ERROR:
      return { ...state, project: { ...state.project, youtube: action.payload } };

    case actionType.SOUNDCLOUD_LINK_ERROR:
      return { ...state, project: { ...state.project, soundcloud: action.payload } };

    case actionType.INSTAGRAM_LINK_ERROR:
      return { ...state, project: { ...state.project, instagram: action.payload } };

    case actionType.FACEBOOK_LINK_ERROR:
      return { ...state, project: { ...state.project, facebook: action.payload } };

    case actionType.TIKTOK_LINK_ERROR:
      return { ...state, project: { ...state.project, tiktok: action.payload } };

    case actionType.WEBSITE_LINK_ERROR:
      return { ...state, project: { ...state.project, website: action.payload } };

    case actionType.TIDAL_LINK_ERROR:
      return { ...state, project: { ...state.project, tidal: action.payload } };
    default:
      return state;
  }
};

export default rootReducer;
