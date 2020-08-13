import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../stores/actions';

import AccountInput from '../../../components/account-input/AccountInput';
import Button from '../../../components/button/Button';
import ErrorMessage from '../../../components/error-message/ErrorMessage';

const AccountPrivate = (props) => {
  const { user, edit, errors } = props;
  const { updateUser } = errors;
  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    oldPassword: '',
    password: '',
    confirmPassword: '',
    profilePicture: user.profilePicture,
  });

  const handleOnChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  if (!user.loggedIn) {
    return <Redirect to='/home/login' />;
  }

  return (
    <div className='account-private-info '>
      <AccountInput name='name' title='Name' value={state.name} changeAction={handleOnChange} edit={edit} />
      {updateUser.name ? <ErrorMessage message='*Name should be between 3-20 chararters' /> : null}

      <AccountInput name='email' title='Email' value={state.email} changeAction={handleOnChange} edit={edit} />
      {updateUser.email ? <ErrorMessage message='*Please insert valid email' /> : null}
      {updateUser.emailAlreadyInUse ? <ErrorMessage message='*Email already in use' /> : null}
      {/* <AccountInput
        name='oldPassword'
        title='Old Password'
        type='password'
        value={state.oldPassword}
        changeAction={handleOnChange}
        edit={edit}
      />
      {updateUser.oldPassword ? <ErrorMessage message='*Old password incorrect' /> : null}

      <AccountInput
        name='password'
        title='New Password'
        type='password'
        value={state.password}
        changeAction={handleOnChange}
        edit={edit}
      />
      {updateUser.password ? <ErrorMessage message='*Password is not valid (minimun 6 characters)' /> : null}

      <AccountInput
        name='confirmPassword'
        title='Confirm Password'
        type='password'
        value={state.confirmPassword}
        changeAction={handleOnChange}
        edit={edit}
      />
      {updateUser.confirmPassword ? <ErrorMessage message='*Passwords are not matched!' /> : null} */}

      <AccountInput
        name='profilePicture'
        type='file'
        title='Profile Picture'
        value={state.profilePicture}
        changeAction={handleOnChange}
        edit={edit}
      />
      <Button
        text={'Save'}
        classes='save-profile-btn transition'
        action={() => props.updateUser(state)}
        disabled={!edit}
      />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(actions.updateUserInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPrivate);
