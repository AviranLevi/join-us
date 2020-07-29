import * as db from '../db/user';

//CREATE
export const createUser = async (data) => {
  try {
    const user = await db.createUser(data);
    return user;
  } catch (error) {
    throw error;
  }
};

//READ
export const getUserByEmail = async (email) => {
  try {
    const user = await db.getUserByEmail(email);
    if (user) {
      return user;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await db.getUser(id);
    return response;
  } catch (error) {
    throw error;
  }
};

//UPDATE
export const updateUser = async (id, data) => {
  try {
    const response = await db.updateUser(id, data);
    return response;
  } catch (error) {
    throw error;
  }
};

//DELETE
export const deleteUser = async (id) => {
  try {
    const response = await db.deleteUser(id);
    return response;
  } catch (error) {
    throw error;
  }
};
