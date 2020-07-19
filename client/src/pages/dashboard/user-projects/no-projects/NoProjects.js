import React from 'react';
import Title from '../../../../components/title/Title';

const NoProjects = () => (
  <div className='no-projects fade-in'>
    <Title text={`It's seems you don't have projects yet :(`} style={{ fontSize: '35px' }} />
    <Title text={`Click the 'New page' button to create one!`} classes='bold-text' />
  </div>
);

export default NoProjects;
