import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../../components/title/Title';
import Project from '../../../../components/project/Project';

const Projects = (props) => {
  const { user } = props;
  return (
    <div className='projects center-items fade-in'>
      <Title text={`My Projects`} classes='projects-title bold-text' />
      {user.projects.reverse().map((project) => (
        <Project
          key={project._id}
          songId={project._id}
          title={project.trackTitle}
          artists={project.artists.map((artist) => artist.name)}
          createdDate={project.createdAt || 'date'}
          coverImage={project.coverImage}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Projects);
