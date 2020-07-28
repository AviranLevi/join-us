import * as db from '../db/userDB';
import bcrypt from 'bcryptjs';

//CREATE
export const createUser = async (data) => {
  try {
    const response = await db.createUser(data);
    return response;
  } catch (error) {
    throw error;
  }
};

//READ
export const getUserByEmail = async (data) => {
  try {
    const { email } = data;
    console.log(password);
    const user = await db.getUserByEmail(email, password);
    if (user) {
      return user;
    }
    return 'USER NOT FOUND';
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
