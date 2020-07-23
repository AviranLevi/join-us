import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Projects from './projects/Projects';
import NoProjects from './no-projects/NoProjects';
import { Redirect } from 'react-router-dom';

const UserProjects = (props) => {
  const { user } = props;

  if (!user.loggedIn) {
    return <Redirect to='/home/login' />;
  }

  return <div className='user-projects'>{props.user.projects.length !== 0 ? <Projects /> : <NoProjects />}</div>;
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(UserProjects);
