import * as service from '../../services/projectService';
import { httpResponseStatus } from '../../constant';
const { OK, ERR } = httpResponseStatus;

//CREATE
export const createProject = async (req, res, next) => {
  try {
    const result = await service.createProject(req.body);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

//READ
export const getProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.getProject(id);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

export const getUserProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.getUserProjects(id);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

//UPDATE
export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.updateProject(id, req.body);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};

//DELETE
export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.deleteProject(id);
    res.status(OK).json(result);
  } catch (error) {
    res.status(ERR).json(error);
    throw error;
  }
};
