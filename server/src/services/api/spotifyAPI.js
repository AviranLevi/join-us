import * as spotifyHelper from '../../utils/spotify';

export const getSpotifyTrack = async (url) => {
  try {
    const id = await spotifyHelper.getSpotifyId(url);
    if (id) {
      const data = await spotifyHelper.getTrack(id);
      const { album, artists, name, preview_url, external_urls } = data;
      const { images } = album;
      const { spotify } = external_urls;
      const results = {
        trackTitle: name,
        coverImage: images[0].url,
        artists,
        spotify,
        audioPreview: preview_url || '',
      };

      if (results) {
        return results;
      }
      return false;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
