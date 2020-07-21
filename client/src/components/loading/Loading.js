import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Loading = ({ size = 30 }) => (
  <div className='sweet-spinner center-items fade-in'>
    <PacmanLoader size={size} color={'#ffffff'} />
  </div>
);

export default Loading;
