import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;
const currentDate = moment().format('MMM Do YYYY');

const ProjectSchema = new Schema({
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
  thumbnailCoverImage: {
    type: String,
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
  createdAt: {
    type: String,
    default: currentDate,
  },
});

export default mongoose.model('Project', ProjectSchema);
