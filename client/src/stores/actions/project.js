import * as actionType from './types';
import * as api from '../../api/joinUsApi';

const data = require('./test.json');

export const getSpotifyData = (trackID) => (dispatch) => {
  //   const { album } = api.getTrackData(trackID);
  const { album, artists, name, preview_url, external_urls } = data;
  const { images } = album;
  const { spotify } = external_urls;

  dispatch({
    type: actionType.SPOTIFY_DATA,
    payload: {
      trackName: name,
      coverImage: images[0].url,
      artists,
      spotify,
      audioPreview: preview_url,
    },
  });
};

export const getAppleMusicLink = (url) => ({
  type: actionType.APPLE_MUSIC_LINK,
  payload: url,
});

export const getTiktokLink = (url) => ({
  type: actionType.TIKTOK_LINK,
  payload: url,
});

export const getYoutubeLink = (url) => ({
  type: actionType.YOUTUBE_LINK,
  payload: url,
});

export const getInstagramLink = (url) => ({
  type: actionType.INSTAGRAM_LINK,
  payload: url,
});

export const getFacebookLink = (url) => ({
  type: actionType.FACEBOOK_LINK,
  payload: url,
});

export const getSoundCloudLink = (url) => ({
  type: actionType.SOUNDCLOUD_LINK,
  payload: url,
});

export const getDeezerLink = (url) => ({
  type: actionType.DEEZER_LINK,
  payload: url,
});
