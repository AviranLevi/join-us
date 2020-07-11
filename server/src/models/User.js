import mongoose from 'mongoose';
import { isEmail, isMobilePhone } from 'validator';
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
    validate: [isEmail, 'Email is invalid'],
  },
  phone: {
    type: String,
    validate: [isMobilePhone, 'Phone is invalid'],
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20,
    select: true,
    bcrypt: true,
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

export default mongoose.model('user', userSchema);
