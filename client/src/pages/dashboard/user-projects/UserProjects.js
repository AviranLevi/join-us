import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Projects from './projects/Projects';
import NoProjects from './no-projects/NoProjects';

const UserProjects = (props) => {
  useEffect(() => {});

  return <div className='user-projects'>{props.user.projects.length === 0 ? <Projects /> : <NoProjects />}</div>;
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
