import * as actionType from '../actions/types';

const initialState = {
  projectId: '',
  coverImage: '',
  artists: [],
  trackName: '',
  audioPreview: '',
  spotify: '',
  appleMusic: 'wwww.applemusic.com',
  tiktok: 'www.tiktok.com',
  youtube: 'www.youtube.com',
  instagram: 'www.instagram.com',
  facebook: 'www.facebook.com',
  soundcloud: 'www.soundcloud.com',
  deezer: 'www.deezer.com ',
  website: 'www.aviran-levi.com',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SPOTIFY_DATA:
      const { spotify, coverImage, artists, trackName, audioPreview } = action.payload;
      return {
        ...state,
        spotify,
        coverImage,
        artists,
        trackName,
        audioPreview,
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
