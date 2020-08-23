import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../stores/actions';

import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import MusicLinks from './music-links/MusicLinks';
import SocialLinks from './social-links/SocialLinks';

const NewProject = (props) => {
  const { user, features, project } = props;
  if (!user.isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div className='user-new-project center-items fade-in'>
      {features.redirect ? <Redirect to={`/project/${project.projectId}`} target='_blank' /> : null}

      <Title text='Put your music release links & your social links here:' classes='bold-text user-new-project-title' />

      <div className='project-links center-items'>
        <MusicLinks />
        <SocialLinks />
      </div>
      <Button text='SHOW ME MY PAGE' classes='execute-btn bold-text transition' action={props.getTrackData} />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getTrackData: () => dispatch(actions.getTrackData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
