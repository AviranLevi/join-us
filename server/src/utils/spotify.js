import SpotifyWebApi from 'spotify-web-api-node';
import { spotifyINFO } from '../config';

const spotifyApi = new SpotifyWebApi({
  clientId: spotifyINFO.client_id,
  clientSecret: spotifyINFO.client_secret,
});

const newToken = () =>
  spotifyApi.clientCredentialsGrant().then(
    (data) => {
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    (err) => {
      console.log(err);
    }
  );

export const getTrack = async (id) => {
  await newToken();
  return await spotifyApi.getTrack(id).then(
    (data) => {
      return data.body;
    },
    (err) => {
      console.log(err);
    }
  );
};

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
