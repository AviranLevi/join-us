import User from '../models/User';
import { dbResponses } from '../constant';

export const createUser = async (data) => {
  try {
    const { email } = data;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return dbResponses.alreadyExists;
    } else {
      const user = new User(data);
      user.save();
      return user;
    }
  } catch (error) {
    throw error;
  }
};

export const getUser = (id) => {
  try {
    const user = User.find({ id });
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, data) => {
  try {
    const user = await User.findOneAndUpdate(id, data);
    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const user = await User.deleteOne(id);
    const { deletedCount } = user;
    if (deletedCount === 1) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
