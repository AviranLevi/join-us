import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../stores/actions';
import { icons } from '../../constant/icons';

import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import Toast from '../../components/toast/Toast';
import AccountPrivate from './account-private/AccountPrivate';

const AccountSettings = (props) => {
  const { user, features } = props;
  const [edit, setEdit] = useState(false);

  if (!user.loggedIn) {
    return <Redirect to='/home/login' />;
  }

  return (
    <div className='acount-settings fade-in'>
      <Title text='Acount Settings' classes='bold-text acount-settings-title' />
      <Button icon={icons.edit} classes='edit-profile-btn transition' action={() => setEdit(!edit)} />

      <div className='account-info'>
        <Title text='Private Information' classes='bold-text' />

        <AccountPrivate edit={edit} />

        <Button text='Delete User' classes='delete-user-btn' action={props.openDeleteUserToast} />
      </div>

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
  openDeleteUserToast: () => dispatch(actions.deleteUserToast(true)),
  closeDeleteUserToast: () => dispatch(actions.deleteUserToast(false)),
  deleteUser: () => dispatch(actions.deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
