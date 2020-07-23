import React from 'react';
import { connect } from 'react-redux';
import { icons } from '../../../../constant/icons';
import Icon from '../../../../components/icon/icon';

const ProfileSocialLinks = (props) => (
  <div className='profile-social-links center-items'>
    <a className='spotify-profile' href={props.spotify} target='_blank' rel='noopener noreferrer'>
      <Icon icon={icons.spotify} />
    </a>
    <a className='instagram-profile' href={props.instagram} target='_blank' rel='noopener noreferrer'>
      <Icon icon={icons.instagram} />
    </a>
    <a className='tiktok-profile' href={props.tiktok} target='_blank' rel='noopener noreferrer'>
      <Icon icon={icons.tiktok} />
    </a>
    <a className='youtube-profile' href={props.youtube} target='_blank' rel='noopener noreferrer'>
      <Icon icon={icons.youTube} />
    </a>
    <a className='facebook-profile' href={props.facebook} target='_blank' rel='noopener noreferrer'>
      <Icon icon={icons.facebook} />
    </a>
    <a className='website-profile' href={props.website} target='_blank' rel='noopener noreferrer'>
      <Icon icon={icons.website} />
    </a>
  </div>
);

const mapStateToProps = (state = {}) => state.user;

export default connect(mapStateToProps)(ProfileSocialLinks);
