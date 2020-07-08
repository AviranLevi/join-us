import * as service from '../../services/joinUsService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;

//READ
export const getSpotifyTrack = (req, res, next) => {
  try {
    const result = service.getSpotifyTrack();
    console.log(result);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};
