import * as service from '../../services/userService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;
import * as JWT from '../../utils/jwt';

//CREATE
export const createUser = async (req, res, next) => {
  try {
    const result = await service.createUser(req.body);
    res.status(OK).json(result);
    next();
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

//READ
export const userLogin = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      const { _id, email } = req.user;
      const token = JWT.signToken(_id);
      res.cookie('access_token', token, { httpOnly: true, sameSite: true });
      res.status(OK).json({ isAuthenticated: true, user: { email } });
    }
    next();
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.getUser(id);
    res.status(OK).json(result);
    next();
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

//UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.updateUser(id, req.body);
    res.status(OK).json(result);
    next();
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

//DELETE
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.deleteUser(id);
    res.status(OK).json(result);
    next();
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};
