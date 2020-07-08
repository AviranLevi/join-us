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
