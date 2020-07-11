import * as service from '../../services/userService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;

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
