import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Title from '../../components/title/Title';
import { icons } from '../../constant/icons';
import Icon from '../../components/icon/icon';
import ProfileSocialLinks from './profile-social-links/ProfileSocialLinks';
import ProfileInfo from './profile-info/ProfileInfo';

const Profile = (props) => {
  const { profile } = props;

  useEffect(() => {
    const { id } = props.match.params;
    props.getUserProfile(id);
  }, [props.getUserProfile]);

  return (
    <div className='profile center-items fade-in'>
      {profile.profileImage ? (
        <img className='profile-image' src={profile.profileImage.url} alt={profile.name} />
      ) : (
        <div className='profile-image-icon center-items'>
          <Icon icon={icons.profile} />
        </div>
      )}

      <div className='profile-content'>
        <Title text={profile.name} classes='bold-text profile-name' />
        <ProfileInfo />
        <ProfileSocialLinks />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (id) => dispatch(actions.getUserProfile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
