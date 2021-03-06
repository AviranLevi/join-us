import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Projects from './projects/Projects';
import NoProjects from './no-projects/NoProjects';

const UserProjects = (props) => {
  const { user } = props;
  useEffect(() => {
    props.getUserProjects(user.id);
  }, []);

  return <div className='user-projects'>{user.projects.length !== 0 ? <Projects /> : <NoProjects />}</div>;
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getUserProjects: (id) => dispatch(actions.getUserProjects(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
