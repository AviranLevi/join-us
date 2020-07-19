import * as actionType from './types';
// import * as api from '../../api/joinUsApi';
import { getSpotifyId } from '../../utils/general';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

const data = require('./test.json');

export const getSpotifyLink = (url) => ({
  type: actionType.SPOTIFY_LINK,
  payload: url,
});

export const getTrackData = () => (dispatch, getState) => {
  const { project } = getState();
  const { spotify, appleMusic, tiktok, youtube, instagram, facebook, soundcloud, deezer, website } = project;
  const userProject = { spotify, appleMusic, tiktok, youtube, instagram, facebook, soundcloud, deezer, website };
  if (userProject.spotify) {
    api
      .post('/api/project', userProject)
      .then((res) => {
        const { data } = res;
        console.log(data);
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
