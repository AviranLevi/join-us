import axios from 'axios';
import * as actionType from './types';
import { apiConfig } from '../../config';

const api = axios.create({
  baseURL: apiConfig,
});

export const getSpotifyLink = (url) => ({
  type: actionType.SPOTIFY_LINK,
  payload: url,
});

export const getTrackData = () => (dispatch, getState) => {
  const { project } = getState();
  const { spotify, appleMusic, tiktok, youtube, instagram, facebook, soundcloud, deezer, website } = project;
  const userProject = { spotify, appleMusic, tiktok, youtube, instagram, facebook, soundcloud, deezer, website };
  if (userProject.spotify) {
    dispatch({ type: actionType.TRACK_DATA_LOADING });
    api
      .post('/project', userProject)
      .then((res) => {
        const { data } = res;
        dispatch({ type: actionType.TRACK_DATA, payload: data });
        dispatch({ type: actionType.TRACK_DATA_LOADING });
        dispatch({ type: actionType.REDIRECT });
      })
      .catch((err) => console.log(err));
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
