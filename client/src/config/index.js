import { getTokenFromLocalStorage } from '../utils/general'
export const google = {
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
}

export const facebook = {
  appId: process.env.REACT_APP_FACEBOOK_APP_ID,
}

export const spotify = {
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
}

export const searchValues = ['spotify', 'apple', 'instagram', 'facebook', 'tiktok', 'deezer', 'youtube']

export const spotifyINFO = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
}

export const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api'

export const DEV = process.env.DEV
