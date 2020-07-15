import { icons } from '../constant/icons';
import { socialMedia } from '../constant/enums';
import { searchValues } from '../config';

export const getSocialIcon = (str) => {
  const value = search(str);
  switch (value) {
    case socialMedia.SPOTIFY: {
      return { name: socialMedia.SPOTIFY, icon: icons.spotify };
    }
    case socialMedia.APPLE: {
      return icons.appleMusic;
    }
    case socialMedia.FACEBOOK: {
      return icons.facebook;
    }
    case socialMedia.INSTAGRAM: {
      return icons.instagram;
    }
    case socialMedia.DEEZER: {
      return icons.deezer;
    }
    case socialMedia.YOUTUBE: {
      return icons.youTube;
    }
    case socialMedia.TIKTOK: {
      return icons.tiktok;
    }
    default: {
      return icons.website;
    }
  }
};

const search = (str) => searchValues.find((value) => (str.search(value) >= 0 ? value : false));

export const getSpotifyId = (str) => {
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
