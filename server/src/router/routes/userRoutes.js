import * as service from '../../services/userService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;
import * as JWT from '../../utils/jwt';
import multer from 'multer';
import { upload } from '../../utils/upload';

export const createUser = async (req, res, next) => {
  try {
    const result = await service.createUser(req.body);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

//*on progress
export const uploadImage = async (req, res, next) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        return res.send({ error: true, message: err });
      }
      res.json(req.file);
    });
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
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

export const userAuth = async (req, res, next) => {
  try {
    const results = { isAuthenticated: true, user: req.user };
    res.status(OK).json(results);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.updateUser(id, req.body);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

export const userLogout = (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(OK).json({ user: {}, success: true });
  } catch (error) {
    res.status(ERR).json({ message: error.message, success: false });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.deleteUser(id);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};
