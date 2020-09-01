import axios from 'axios';
import validator from 'validator';
import * as actionType from './types';
import { findErrors } from '../../utils/general';
import { serverURL } from '../../config';
import { accessToken } from '../../config';

const api = axios.create({
  baseURL: serverURL,
  headers: { Authorization: `Bearer ${accessToken}` },
});

export const getTrackData = () => (dispatch, getState) => {
  const { project, user, errors } = getState();
  const { spotify, appleMusic, youtube, soundcloud, deezer, tidal } = project.musicLinks;
  const { tiktok, instagram, facebook, website } = project.socialLinks;
  const { id } = user;
  const userProject = {
    id,
    spotify,
    appleMusic,
    tiktok,
    youtube,
    instagram,
    facebook,
    soundcloud,
    deezer,
    website,
    tidal,
  };

  const noErrors = findErrors(errors.project);

  if (userProject.spotify && noErrors) {
    dispatch({ type: actionType.TRACK_DATA_LOADING });
    api
      .post(`/project`, userProject)
      .then((res) => {
        dispatch({ type: actionType.TRACK_DATA, payload: res.data });
        dispatch({ type: actionType.REDIRECT });
        dispatch({ type: actionType.TRACK_DATA_LOADING });
        dispatch({ type: actionType.SPOTIFY_LINK_ERROR, payload: false });
      })
      .catch((err) => {
        dispatch({ type: actionType.TRACK_DATA_LOADING });
        dispatch({ type: actionType.TRACK_DATA, payload: {} });
      });
  } else {
    dispatch({ type: actionType.SPOTIFY_LINK_ERROR, payload: true });
  }
};

export const getSpotifyLink = (url) => (dispatch) => {
  dispatch({ type: actionType.SPOTIFY_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL) {
    dispatch({ type: actionType.SPOTIFY_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.SPOTIFY_LINK_ERROR, payload: true });
  }
};

export const getAppleMusicLink = (url) => (dispatch) => {
  dispatch({ type: actionType.APPLE_MUSIC_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.APPLE_MUSIC_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.APPLE_MUSIC_LINK_ERROR, payload: true });
  }
};

export const getTiktokLink = (url) => (dispatch) => {
  dispatch({ type: actionType.TIKTOK_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.TIKTOK_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.TIKTOK_LINK_ERROR, payload: true });
  }
};

export const getYoutubeLink = (url) => (dispatch) => {
  dispatch({ type: actionType.YOUTUBE_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.YOUTUBE_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.YOUTUBE_LINK_ERROR, payload: true });
  }
};

export const getInstagramLink = (url) => (dispatch) => {
  dispatch({ type: actionType.INSTAGRAM_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.INSTAGRAM_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.INSTAGRAM_LINK_ERROR, payload: true });
  }
};

export const getFacebookLink = (url) => (dispatch) => {
  dispatch({ type: actionType.FACEBOOK_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.FACEBOOK_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.FACEBOOK_LINK_ERROR, payload: true });
  }
};

export const getSoundCloudLink = (url) => (dispatch) => {
  dispatch({ type: actionType.SOUNDCLOUD_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.SOUNDCLOUD_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.SOUNDCLOUD_LINK_ERROR, payload: true });
  }
};

export const getDeezerLink = (url) => (dispatch) => {
  dispatch({ type: actionType.DEEZER_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.DEEZER_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.DEEZER_LINK_ERROR, payload: true });
  }
};

export const getWebsiteLink = (url) => (dispatch) => {
  dispatch({ type: actionType.WEBSITE_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.WEBSITE_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.WEBSITE_LINK_ERROR, payload: true });
  }
};

export const getTidalLink = (url) => (dispatch) => {
  dispatch({ type: actionType.TIDAL_LINK, payload: url });
  const validURL = validator.isURL(url);
  if (validURL || url === '') {
    dispatch({ type: actionType.TIDAL_LINK_ERROR, payload: false });
  } else {
    dispatch({ type: actionType.TIDAL_LINK_ERROR, payload: true });
  }
};

export const resetProjectState = () => (dispatch) => {
  dispatch({ type: actionType.RESET_PROJECT_STATE });
  dispatch({ type: actionType.REDIRECT });
};
