import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../stores/actions/';
import Title from '../../../components/title/Title';
import { icons } from '../../../constant/icons';
import Icon from '../../../components/icon/icon';
import ProfileSocialLinks from './profile-social-links/ProfileSocialLinks';
import ProfileInfo from './profile-info/ProfileInfo';

const Profile = (props) => {
  useEffect(() => {
    props.getUserProjects('test');
  }, [props.getUserProjects]);

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

const mapDispatchToProps = (dispatch) => ({
  getUserProjects: (id) => dispatch(actions.getUserProjects(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
