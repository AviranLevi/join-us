import * as service from '../../services/authService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;

//READ
export const getSpotifyToken = (req, res, next) => {
  try {
    const result = service.getSpotifyToken();
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};
