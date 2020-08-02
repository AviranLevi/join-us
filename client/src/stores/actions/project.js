import axios from 'axios';
import * as actionType from './types';

export const getSpotifyLink = (url) => ({
  type: actionType.SPOTIFY_LINK,
  payload: url,
});

export const getTrackData = () => (dispatch, getState) => {
  const { project, user } = getState();
  const { spotify, appleMusic, tiktok, youtube, instagram, facebook, soundcloud, deezer, website } = project;
  const { id } = user;
  const userProject = { id, spotify, appleMusic, tiktok, youtube, instagram, facebook, soundcloud, deezer, website };

  if (userProject.spotify) {
    dispatch({ type: actionType.TRACK_DATA_LOADING });
    axios
      .post('/api/project', userProject)
      .then((res) => {
        dispatch({ type: actionType.TRACK_DATA, payload: res.data });
        dispatch({ type: actionType.REDIRECT });
        dispatch({ type: actionType.TRACK_DATA_LOADING });
      })
      .catch((err) => {
        dispatch({ type: actionType.TRACK_DATA_LOADING });
        dispatch({ type: actionType.TRACK_DATA, payload: {} });
      });
  }
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

export const getWebsiteLink = (url) => ({
  type: actionType.WEBSITE_LINK,
  payload: url,
});

export const resetProjectState = () => (dispatch) => {
  dispatch({ type: actionType.RESET_PROJECT_STATE });
  dispatch({ type: actionType.REDIRECT });
};
