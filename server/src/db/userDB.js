import User from '../models/User';

export const createUser = async (data) => {
  try {
    const user = await new User(data);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserLogin = async (data) => {
  try {
    const { email, password } = data;
    const user = await User.findOne({ email, password });
    console.log(user);
    return user;
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
