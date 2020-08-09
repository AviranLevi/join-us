import * as db from '../db/user';
import cloudinary from 'cloudinary';
import { cloudinaryINFO } from '../config';

//CREATE
export const createUser = async (data) => {
  try {
    const { email } = data;
    const extractUserName = email.split('@');
    const userName = extractUserName[0];
    const userToDB = Object.assign({ userName }, data);
    const user = await db.createUser(userToDB);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const uploadImage = async (file) => {
  try {
    //upload using cloudinary api
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//READ
export const getUser = async (id) => {
  try {
    const response = await db.getUser(id);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//UPDATE
export const updateUser = async (id, data) => {
  try {
    const response = await db.updateUser(id, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//DELETE
export const deleteUser = async (id) => {
  try {
    const userDeleted = await db.deleteUser(id);
    if (userDeleted) {
      return { success: userDeleted, message: 'User has been deleted' };
    }
    return { success: userDeleted, message: 'Try again later' };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
