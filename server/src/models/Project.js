import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  trackTitle: {
    type: String,
    required: [true, `Song's Title is missing`],
  },
  artists: {
    type: Array,
    required: [true, `Song's artists are missing`],
  },
  coverImage: {
    type: String,
    required: [true, `Song's cover image is missing`],
  },
  audioPreview: {
    type: String,
  },
  spotify: {
    type: String,
    required: [true, `Spotify's Links are missing`],
  },
  appleMusic: {
    type: String,
  },
  deezer: {
    type: String,
  },
  youtube: {
    type: String,
  },
  soundcloud: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  tiktok: {
    type: String,
  },
  website: {
    type: String,
  },
  userId: {
    type: String,
    required: [true, 'User Id is missing.'],
  },
});

export default mongoose.model('project', projectSchema);
