import * as actionType from '../actions/types';

const initialState = {
  projectId: '',
  userId: '',
  coverImage: '',
  artists: [],
  trackTitle: '',
  audioPreview: '',
  spotify: '',
  appleMusic: '',
  tiktok: '',
  youtube: '',
  instagram: '',
  facebook: '',
  soundcloud: '',
  deezer: '',
  website: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TRACK_DATA:
      const {
        _id,
        spotify,
        appleMusic,
        tiktok,
        youtube,
        instagram,
        facebook,
        deezer,
        soundcloud,
        website,
        trackTitle,
        coverImage,
        artists,
        audioPreview,
        userId,
      } = action.payload;
      return {
        ...state,
        projectId: _id,
        spotify,
        appleMusic,
        tiktok,
        youtube,
        instagram,
        facebook,
        deezer,
        soundcloud,
        website,
        coverImage,
        artists,
        trackTitle,
        audioPreview,
        userId,
      };
    case actionType.SPOTIFY_LINK:
      return { ...state, spotify: action.payload };

    case actionType.APPLE_MUSIC_LINK:
      return { ...state, appleMusic: action.payload };

    case actionType.TIKTOK_LINK:
      return { ...state, tiktok: action.payload };

    case actionType.YOUTUBE_LINK:
      return { ...state, youtube: action.payload };

    case actionType.INSTAGRAM_LINK:
      return { ...state, instagram: action.payload };

    case actionType.FACEBOOK_LINK:
      return { ...state, facebook: action.payload };

    case actionType.SOUNDCLOUD_LINK:
      return { ...state, soundcloud: action.payload };

    case actionType.DEEZER_LINK:
      return { ...state, deezer: action.payload };

    case actionType.WEBSITE_LINK:
      return { ...state, website: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
