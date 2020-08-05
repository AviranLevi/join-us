import * as actionType from '../actions/types';

const initialState = {
  projectId: '',
  userId: '',
  coverImage: '',
  artists: [],
  trackTitle: '',
  audioPreview: '',
  musicLinks: {
    spotify: '',
    appleMusic: '',
    youtube: '',
    deezer: '',
    soundcloud: '',
    tidal: '',
  },
  socialLinks: {
    instagram: '',
    tiktok: '',
    facebook: '',
    website: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TRACK_DATA:
      const { _id } = action.payload;
      return {
        ...state,
        projectId: _id,
      };
    case actionType.SPOTIFY_LINK:
      return { ...state, musicLinks: { ...state.musicLinks, spotify: action.payload } };

    case actionType.APPLE_MUSIC_LINK:
      return { ...state, musicLinks: { ...state.musicLinks, appleMusic: action.payload } };

    case actionType.SOUNDCLOUD_LINK:
      return { ...state, musicLinks: { ...state.musicLinks, soundcloud: action.payload } };

    case actionType.DEEZER_LINK:
      return { ...state, musicLinks: { ...state.musicLinks, deezer: action.payload } };

    case actionType.YOUTUBE_LINK:
      return { ...state, musicLinks: { ...state.musicLinks, youtube: action.payload } };

    case actionType.TIKTOK_LINK:
      return { ...state, socialLinks: { ...state.socialLinks, tiktok: action.payload } };

    case actionType.INSTAGRAM_LINK:
      return { ...state, socialLinks: { ...state.socialLinks, instagram: action.payload } };

    case actionType.FACEBOOK_LINK:
      return { ...state, socialLinks: { ...state.socialLinks, facebook: action.payload } };

    case actionType.WEBSITE_LINK:
      return { ...state, socialLinks: { ...state.socialLinks, website: action.payload } };

    case actionType.RESET_PROJECT_STATE:
      return initialState;

    default:
      return state;
  }
};

export default rootReducer;
