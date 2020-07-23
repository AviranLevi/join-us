import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';
import { icons } from '../../../constant/icons';
import Icon from '../../../components/icon/icon';
import ProfileSocialLinks from './profile-social-links/ProfileSocialLinks';
import ProfileInfo from './profile-info/ProfileInfo';

const Profile = (props) => {
  return (
    <div className='profile center-items fade-in'>
      {props.profileImage ? (
        <img className='profile-image' src={props.profileImage} alt={props.name} />
      ) : (
        <div className='profile-image-icon'>
          <Icon icon={icons.image} />
        </div>
      )}

      <div className='profile-content'>
        <Title text={props.name} classes='bold-text profile-name' />
        <ProfileInfo />
        <ProfileSocialLinks />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state.user;

export default connect(mapStateToProps)(Profile);
