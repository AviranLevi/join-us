import React from 'react';
import Title from '../../../../components/title/Title';
import Project from '../../../../components/project/Project';

const Projects = (props) => (
  <div className='projects center-items'>
    <Title text={`My Projects`} />
    <Project />
  </div>
);

export default Projects;
