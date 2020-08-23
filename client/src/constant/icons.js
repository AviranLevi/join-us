import React from 'react';
import Tidal from '../assets/images/tidal-icon.png';

export const icons = {
  plus: <i className='fas fa-plus'></i>,
  edit: <i className='fas fa-edit'></i>,
  save: <i className='fas fa-check-circle'></i>,
  play: <i className='fas fa-play'></i>,
  pause: <i className='fas fa-pause'></i>,
  close: <i className='fas fa-times'></i>,
  projects: <i className='fas fa-link'></i>,
  create: <i className='fas fa-marker'></i>,
  goTo: <i className='fas fa-arrow-circle-right'></i>,
  link: <i className='fas fa-link'></i>,
  remove: <i className='fas fa-trash-alt'></i>,
  image: <i className='far fa-images'></i>,
  settings: <i className='fas fa-cog'></i>,
  profile: <i className='fas fa-user-circle profile-icon'></i>,
  error: <i className='fas fa-exclamation'></i>,
  //social-media
  facebook: <i className='fab fa-facebook'></i>,
  google: <i className='fab fa-google'></i>,
  instagram: <i className='fab fa-instagram'></i>,
  spotify: <i className='fab fa-spotify'></i>,
  appleMusic: <i className='fab fa-apple'></i>,
  deezer: <i className='fab fa-deezer'></i>,
  tidal: <img src={Tidal} alt='Tidal' className='tidal-icon' />,
  youtube: <i className='fab fa-youtube'></i>,
  tiktok: <i className='fab fa-tiktok'></i>,
  soundcloud: <i className='fab fa-soundcloud'></i>,
  website: <i className='fas fa-globe-africa'></i>,
};
