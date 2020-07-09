import * as service from '../../services/joinUsService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;

//READ
export const getSpotifyTrack = async (req, res, next) => {
  try {
    const { id } = req.query;
    const result = await service.getSpotifyTrack(id);
    console.log(result);
    res.status(OK).json(result);
    next();
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};
