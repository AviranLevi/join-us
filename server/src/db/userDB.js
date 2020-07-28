import User from '../models/User';

export const createUser = async (data) => {
  try {
    const user = new User(data);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email, password) => {
  try {
    const user = await User.findOne({ email }, (err, user) => {
      if (err) return err;
      if (!user) return 'USER NOT FOUND';
      user.comparePassword(password, (data) => data);
    });
    if (user) {
      return user;
    }
    return 'USER_NOT_FOUND';
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
