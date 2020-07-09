import * as spotifyHelper from '../utils/spotify';

export const getSpotifyTrack = async (id) => {
  try {
    if (id) {
      const results = await spotifyHelper.getTrack(id);
      if (results) {
        return results;
      }
      return 'TRACK NOT FOUND';
    }
    return 'ID NOT VALID';
  } catch (error) {
    throw error;
  }
};
