import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import Title from '../../../../components/title/Title';
// import Project from '../../../../components/project/Project';
import Loading from '../../../../components/loading/Loading';

const Project = lazy(() => import('../../../../components/project/Project'));

const Projects = (props) => {
  const { user } = props;
  return (
    <Suspense fallback={<Loading />}>
      <div className='projects center-items fade-in'>
        <Title text={`My Projects`} classes='projects-title bold-text' />
        {user.projects.map((project) => (
          <Project
            songId={project._id}
            title={project.trackTitle}
            artists={project.artists.map((artist) => artist.name)}
            createdDate={'date'}
            coverImage={project.coverImage}
          />
        ))}
      </div>
    </Suspense>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Projects);
