const { env } = process

export const spotifyINFO = {
  client_id: env.SPOTIFY_CLIENT_ID,
  client_secret: env.SPOTIFY_CLIENT_SECRET,
}

export const cloudinaryINFO = {
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUD_API_KEY,
  api_secret: env.CLOUD_API_SECRET,
}

export const JWT_KEY = env.JWT_KEY || 'JoinUsKey'
