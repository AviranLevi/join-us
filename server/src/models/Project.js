import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  songTitle: {
    type: String,
    required: [true, `Song's Title is missing`],
  },
  coverImageURL: {
    type: String,
    required: [true, `Song's cover image is missing`],
  },
  songDescription: {
    type: String,
  },
  songLinks: {
    type: [String],
    required: [true, `Song's Links are missing`],
  },
  artists: {
    type: [String],
    required: [true, `Song's artists are missing`],
  },
  userId: {
    type: String,
    required: [true, 'User Id is missing.'],
  },
});

export default mongoose.model('project', projectSchema);
