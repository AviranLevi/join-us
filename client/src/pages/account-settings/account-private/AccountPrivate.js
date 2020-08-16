import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../stores/actions';
import * as joinUsAPI from '../../../api/joinUsApi';

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
  });

  const [file, setFile] = useState({});
  console.log(file);
  const handleOnChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleFile = (e) => setFile(e.target.files[0]);

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

      <AccountInput
        name='profilePicture'
        type='file'
        title='Profile Picture'
        value={state.profilePicture}
        changeAction={handleFile}
        edit={edit}
      />

      <Button
        text={'Save'}
        classes='save-profile-btn transition'
        action={() => props.updateUser({ ...state, file })}
        disabled={!edit}
      />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  updateUser: (data) => dispatch(actions.updateUserInfo(data)),
  // uploadImage: (e) => dispatch(actions.uploadImage(e.target.files[0])),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPrivate);
