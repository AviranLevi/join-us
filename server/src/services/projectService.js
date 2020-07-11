import * as db from '../db/project';

//CREATE
export const createProject = async (data) => {
  try {
    const response = await db.createProject(data);
    return response;
  } catch (error) {
    throw error;
  }
};

//READ
export const getProject = async (id) => {
  try {
    const response = await db.getProject(id);
    return response;
  } catch (error) {
    throw error;
  }
};

//UPDATE
export const updateProject = async (id, data) => {
  try {
    const response = await db.updateProject(id, data);
    return response;
  } catch (error) {
    throw error;
  }
};

//DELETE
export const deleteProject = async (id) => {
  try {
    const response = await db.deleteProject(id);
    return response;
  } catch (error) {
    throw error;
  }
};
