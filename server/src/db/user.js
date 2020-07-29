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

export const updateUser = (id, data) => {
  try {
    const user = User.findOneAndUpdate(id, data);
    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = (id) => {
  try {
    const user = User.deleteOne(id);
    return user;
  } catch (error) {
    throw error;
  }
};
