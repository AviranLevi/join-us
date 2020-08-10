export const httpResponseStatus = {
  OK: 200,
  ERR: 500,
};

export const spotifyResponses = {
  TRACK_NOT_FOUND: 'TRACK NOT FOUND',
  ID_NOT_VALID: 'ID_NOT_VALID',
};

export const dbResponses = {
  findErr: {
    error: true,
    message: 'Something went wrong',
  },
  alreadyExists: {
    error: true,
    message: 'User already exists',
  },
  emailAlreadyInUse: {
    error: true,
    message: 'Email already in use',
  },
};
