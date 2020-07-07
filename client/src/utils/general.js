import { icons } from '../constant/icons';

export const searchInString = (str) => {
  const value = search(str);
  console.log(value);
  switch (value) {
    case 'spotify': {
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

const searchValues = [
  'spotify',
  'apple',
  'instagram',
  'facebook',
  'tiktok',
  'deezer',
  'youtube',
];

const search = (str) =>
  searchValues.find((value) => (str.search(value) >= 0 ? value : false));
