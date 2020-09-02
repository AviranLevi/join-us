import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import { icons } from '../../constant/icons';

import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import Toast from '../../components/toast/Toast';
import AccountPrivate from './account-private/AccountPrivate';

const AccountSettings = (props) => {
  const { user, features } = props;
  const [edit, setEdit] = useState(false);

  return (
    <div className='acount-settings fade-in'>
      <Title text='Acount Settings' classes='bold-text acount-settings-title' />
      <Button icon={icons.edit} classes='edit-profile-btn transition' action={() => setEdit(!edit)} />

      <div className='account-info'>
        <Title text='Private Information' classes='bold-text' />

        <AccountPrivate edit={edit} setEdit={setEdit} />

        <Button text='Delete User' classes='delete-user-btn' action={props.openDeleteUserToast} />
      </div>

      {features.updateUserSuccessToast ? (
        <Toast
          message='Saved! 🎉'
          userDecisions={false}
          closeAction={props.closeSavedUpdateToast}
          classes='save-success-toast'
        />
      ) : null}

      {features.deleteUserToast.open ? (
        <Toast
          message='Are you sure about it? :('
          classes='delete-user-toast'
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
  closeSavedUpdateToast: () => dispatch(actions.updateUserToast(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
