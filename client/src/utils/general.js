import { icons } from '../constant/icons';
import { searchValues } from '../config';

export const getSocialIcon = (str) => {
  const value = search(str);
  switch (value) {
    case 'spotify': {
      const id = getSpotifyId(str);
      return icons.spotify;
    }
    case 'apple': {
      return icons.appleMusic;
    }
    case 'facebook': {
      return icons.facebook;
    }
    case 'instagram': {
      return icons.instagram;
    }
    case 'deezer': {
      return icons.deezer;
    }
    case 'youtube': {
      return icons.youTube;
    }
    case 'tiktok': {
      return icons.tiktok;
    }
    default: {
      return icons.website;
    }
  }
};

const search = (str) => searchValues.find((value) => (str.search(value) >= 0 ? value : false));

const getSpotifyId = (str) => {
  const [protocol, address, path, id] = str.split('/').filter((el) => el !== '');

  if (id) {
    const unWantedQuery = id.indexOf('?');
    if (unWantedQuery > 0) {
      return id.substr(0, unWantedQuery);
    }
    return id;
  }
  return false;
};
