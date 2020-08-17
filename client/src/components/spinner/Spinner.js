import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const Spinner = ({ height = 15, width = 3, radius = 1, margin = 1 }) => (
  <div className='spinner center-items fade-in'>
    <FadeLoader height={height} width={width} radius={radius} margin={margin} color={'#ffffff'} />
  </div>
);

export default Spinner;
