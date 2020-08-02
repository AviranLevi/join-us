import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';
import * as actions from '../../../stores/actions';
import AccountInput from '../../../components/account-input/AccountInput';
import Icon from '../../../components/icon/icon';
import { icons } from '../../../constant/icons';
import Button from '../../../components/button/Button';

const AccountSettings = (props) => {
  const { user, features } = props;
  return (
    <div className='acount-settings fade-in'>
      <Title text='Acount Settings' classes='bold-text acount-settings-title' />
      <Button icon={icons.edit} classes='edit-profile-btn' action={props.editUserInfo} />

      <div className='acount-info'>
        <Title text='Private Information' classes='bold-text' />
        <AccountInput title='Name' value={user.name} changeAction={props.userName} edit={features.editUser} />
        <AccountInput title='Email' value={user.email} changeAction={props.userEmail} edit={features.editUser} />
        <AccountInput type='password' title='Password' value={user.password} edit={features.editUser} />

        <Title text='Your Social Links' classes='bold-text' />
        <AccountInput title='Spotify' value={user.spotify} edit={features.editUser} changeAction={props.userSpotify} />
        <AccountInput
          title='Instagram'
          value={user.instagram}
          edit={features.editUser}
          changeAction={props.userInstagram}
        />
        <AccountInput title='TikTok' value={user.tiktok} edit={features.editUser} changeAction={props.userTiktok} />
        <AccountInput
          title='Facebook'
          value={user.facebook}
          edit={features.editUser}
          changeAction={props.userFacebook}
        />
        <AccountInput title='YouTube' value={user.youtube} edit={features.editUser} changeAction={props.userYouTube} />
        <AccountInput title='Website' value={user.website} edit={features.editUser} changeAction={props.userWebsite} />
      </div>

      <Button text={'Save'} classes='save-profile-btn' disabled={features.editUser} />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userName: (e) => dispatch(actions.userName(e.target.value)),
  userEmail: (e) => dispatch(actions.userEmail(e.target.value)),
  userPassword: (e) => dispatch(actions.userPassword(e.target.value)),
  userSpotify: (e) => dispatch(actions.userSpotify(e.target.value)),
  userInstagram: (e) => dispatch(actions.userInstagram(e.target.value)),
  userTiktok: (e) => dispatch(actions.userTiktok(e.target.value)),
  userFacebook: (e) => dispatch(actions.userFacebook(e.target.value)),
  userYouTube: (e) => dispatch(actions.userYouTube(e.target.value)),
  userWebsite: (e) => dispatch(actions.userWebsite(e.target.value)),
  editUserInfo: () => dispatch(actions.editUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
