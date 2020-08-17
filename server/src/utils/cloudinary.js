import { v2 as cloudinary } from 'cloudinary';
import { cloudinaryINFO } from '../config';
import fs from 'fs';

const { cloud_name, api_key, api_secret } = cloudinaryINFO;

cloudinary.config({ cloud_name, api_key, api_secret });

export const cloud = (path) => {
  const image = new Promise((resolve) => {
    cloudinary.uploader.upload(path, (err, image) => {
      if (err) resolve(err);
      console.log('Image uploaded to Cloudinary');
      fs.unlinkSync(path);
      resolve({ url: image.url, cloudID: image.public_id, name: image.original_filename });
    });
  });
  return image;
};
