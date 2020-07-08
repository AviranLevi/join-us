import { icons } from '../constant/icons';
import { searchValues } from '../config';
import { getSpotifyToken } from '../api/joinUsApi';

export const searchInString = (str) => {
  const value = search(str);
  switch (value) {
    case 'spotify': {
      getSpotifyToken();
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

const search = (str) =>
  searchValues.find((value) => (str.search(value) >= 0 ? value : false));
