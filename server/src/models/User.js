import mongoose from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, `User name is required`],
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Email is invalid'],
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20,
  },
  profileImage: {
    type: String,
  },
  projects: {
    type: [String],
  },
  socialMedia: {
    type: [String],
  },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  bcrypt.hash(this.password, 10, (err, passHash) => {
    if (err) return next(err);
    this.password = passHash;
    next();
  });
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    } else {
      if (!isMatch) {
        return cb(null, isMatch);
      }
      return cb(null, this);
    }
  });
};

export default mongoose.model('user', userSchema);
