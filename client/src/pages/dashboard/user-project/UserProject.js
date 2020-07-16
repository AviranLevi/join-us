import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../stores/actions';
import { icons } from '../../../constant/icons';

import Title from '../../../components/title/Title';
import UserLinkInput from '../../../components/user-link-input/UserLinkInput';

const UserProject = (props) => {
  return (
    <div className='user-project center-items '>
      <Title text='Put your music release links & your social links here:' classes='bold-text user-project-title' />

      <div className='music-links center-items'>
        <UserLinkInput icon={icons.spotify} changeAction={props.getSpotifyData} />
        <UserLinkInput icon={icons.instagram} changeAction={props.getInstagramLink} />
        <UserLinkInput icon={icons.appleMusic} changeAction={props.getAppleMusicLink} />
        <UserLinkInput icon={icons.facebook} changeAction={props.getFacebookLink} />
        <UserLinkInput icon={icons.deezer} changeAction={props.getDeezerLink} />
        <UserLinkInput icon={icons.tiktok} changeAction={props.getTiktokLink} />
        <UserLinkInput icon={icons.youTube} changeAction={props.getYoutubeLink} />
        <UserLinkInput changeAction={props.getWebsiteLink} />
        <UserLinkInput icon={icons.soundcloud} changeAction={props.getSoundCloudLink} />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getSpotifyData: (e) => dispatch(actions.getSpotifyData(e.target.value)),
  getAppleMusicLink: (e) => dispatch(actions.getAppleMusicLink(e.target.value)),
  getInstagramLink: (e) => dispatch(actions.getInstagramLink(e.target.value)),
  getTiktokLink: (e) => dispatch(actions.getTiktokLink(e.target.value)),
  getYoutubeLink: (e) => dispatch(actions.getYoutubeLink(e.target.value)),
  getFacebookLink: (e) => dispatch(actions.getFacebookLink(e.target.value)),
  getSoundCloudLink: (e) => dispatch(actions.getSoundCloudLink(e.target.value)),
  getDeezerLink: (e) => dispatch(actions.getDeezerLink(e.target.value)),
  getWebsiteLink: (e) => dispatch(actions.getWebsiteLink(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProject);
