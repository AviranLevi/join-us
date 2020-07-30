import * as service from '../../services/userService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;
import * as JWT from '../../utils/jwt';

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

export const userLogin = (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      const user = req.user;
      const { _id } = user;
      const token = JWT.signToken(_id);
      res.cookie('access_token', token, { httpOnly: true, sameSite: true });
      res.status(OK).json({ isAuthenticated: true, user });
    }
    next();
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

export const userLogout = (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(OK).json({ user: {}, success: true });
    next();
  } catch (error) {
    res.status(ERR).json({ message: error.message, success: false });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.getUser(id);
    res.status(OK).json(result);
    next();
  } catch (error) {
    console.log('error', error);
    res.status(ERR).json(error);
    throw error;
  }
};

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
