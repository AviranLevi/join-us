import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../stores/actions';
import { icons } from '../../../constant/icons';

import Title from '../../../components/title/Title';
import UserLinkInput from '../../../components/user-link-input/UserLinkInput';
import Button from '../../../components/button/Button';

const NewProject = (props) => {
  const { user, features, project } = props;
  console.log(project);
  if (!user.loggedIn) {
    return <Redirect to='/home/login' />;
  }
  return (
    <div className='user-new-project center-items fade-in'>
      {features.redirect ? <Redirect to={`/project/${project.projectId}`} target='_blank' /> : null}

      <Title text='Put your music release links & your social links here:' classes='bold-text user-new-project-title' />

      <div className='music-links center-items'>
        <UserLinkInput icon={icons.spotify} changeAction={props.getSpotifyLink} />
        <UserLinkInput
          icon={icons.instagram}
          changeAction={props.getInstagramLink}
          value={project.instagram ? project.instagram : user.instagram}
        />
        <UserLinkInput icon={icons.appleMusic} changeAction={props.getAppleMusicLink} />
        <UserLinkInput icon={icons.facebook} changeAction={props.getFacebookLink} />
        <UserLinkInput icon={icons.deezer} changeAction={props.getDeezerLink} />
        <UserLinkInput icon={icons.tiktok} changeAction={props.getTiktokLink} />
        <UserLinkInput icon={icons.youTube} changeAction={props.getYoutubeLink} />
        <UserLinkInput changeAction={props.getWebsiteLink} />
        <UserLinkInput icon={icons.soundcloud} changeAction={props.getSoundCloudLink} />
      </div>
      <Button text='SHOW ME MY PAGE' classes='execute-btn bold-text transition' action={props.getTrackData} />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getSpotifyLink: (e) => dispatch(actions.getSpotifyLink(e.target.value)),
  getAppleMusicLink: (e) => dispatch(actions.getAppleMusicLink(e.target.value)),
  getInstagramLink: (e) => dispatch(actions.getInstagramLink(e.target.value)),
  getTiktokLink: (e) => dispatch(actions.getTiktokLink(e.target.value)),
  getYoutubeLink: (e) => dispatch(actions.getYoutubeLink(e.target.value)),
  getFacebookLink: (e) => dispatch(actions.getFacebookLink(e.target.value)),
  getSoundCloudLink: (e) => dispatch(actions.getSoundCloudLink(e.target.value)),
  getDeezerLink: (e) => dispatch(actions.getDeezerLink(e.target.value)),
  getWebsiteLink: (e) => dispatch(actions.getWebsiteLink(e.target.value)),
  getTrackData: () => dispatch(actions.getTrackData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
