import * as spotifyHelper from '../utils/spotify';

export const getSpotifyTrack = async (id = '4JB0EAT4BkLShTyTt50FmO') => {
  try {
    const results = await spotifyHelper.getTrack(id);
    console.log(results);
    return results;
  } catch (error) {
    throw error;
  }
};
