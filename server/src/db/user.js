import User from '../models/User';
import Project from '../models/Project';
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

export const getUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, data) => {
  try {
    const { email } = data;
    const emailAlreadyUsed = await User.findOne({ email });
    if (emailAlreadyUsed && emailAlreadyUsed._id.toString() !== userId) {
      return dbResponses.emailAlreadyInUse;
    }

    const user = await User.findOneAndUpdate(userId, data, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const deleteUserProjects = await Project.deleteMany({ userId });
    const userProjectsRemoved = deleteUserProjects.ok;

    if (userProjectsRemoved === 1) {
      const user = await User.deleteOne({ _id: userId });
      const { deletedCount } = user;
      if (deletedCount === 1) {
        return true;
      }
      return false;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
