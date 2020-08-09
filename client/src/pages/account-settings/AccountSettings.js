import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../stores/actions';
import { icons } from '../../constant/icons';

import Title from '../../components/title/Title';
import AccountInput from '../../components/account-input/AccountInput';
import Button from '../../components/button/Button';
import AccountSocial from './AccountSocial/AccountSocial';
import Toast from '../../components/toast/Toast';

const AccountSettings = (props) => {
  const { user, features } = props;
  if (!user.loggedIn) {
    return <Redirect to='/home/login' />;
  }
  return (
    <div className='acount-settings fade-in'>
      <Title text='Acount Settings' classes='bold-text acount-settings-title' />
      <Button icon={icons.edit} classes='edit-profile-btn' action={props.editUserInfo} />

      <div className='account-info'>
        <Title text='Private Information' classes='bold-text' />
        <AccountInput title='Name' value={user.name} changeAction={props.userName} edit={features.editUser} />
        <AccountInput title='Email' value={user.email} changeAction={props.userEmail} edit={features.editUser} />
        <AccountInput
          type='file'
          title='Profile Picture'
          value={user.profilePicture}
          edit={features.editUser}
          changeAction={props.uploadImage}
        />

        {/* <AccountSocial /> */}

        <Button text='Delete User' classes='delete-user-btn transition' action={props.openDeleteUserToast} />
      </div>
      <Button text={'Save'} classes='save-profile-btn' disabled={features.editUser} />

      {features.deleteUserToast.open ? (
        <Toast
          message='Are you sure about it? :('
          agreeAction={props.deleteUser}
          closeAction={props.closeDeleteUserToast}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userName: (e) => dispatch(actions.userName(e.target.value)),
  userEmail: (e) => dispatch(actions.userEmail(e.target.value)),
  userPassword: (e) => dispatch(actions.userPassword(e.target.value)),
  uploadImage: (e) => dispatch(actions.uploadImage(e.target.files[0])),
  openDeleteUserToast: () => dispatch(actions.deleteUserToast(true)),
  closeDeleteUserToast: () => dispatch(actions.deleteUserToast(false)),
  deleteUser: () => dispatch(actions.deleteUser()),
  editUserInfo: () => dispatch(actions.editUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
