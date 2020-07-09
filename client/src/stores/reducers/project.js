import * as actionType from '../actions/types';

const initialState = {
  projectId: '',
  coverImage: '',
  artistName: '',
  trackName: '',
  spotify: '',
  appleMusic: '',
  tiktok: '',
  youtube: '',
  instagram: '',
  facebook: '',
  soundcloud: '',
  deezer: '',
};

const rootReducer = (state = [initialState], action) => {
  switch (action.type) {
    case actionType.SPOTIFY_DATA:
      return {
        ...state,
        spotify: action.payload.link,
        coverImage: action.payload.image,
        artistName: action.payload.artistName,
        trackName: action.payload.trackName,
      };

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
    default:
      return state;
  }
};

export default rootReducer;
