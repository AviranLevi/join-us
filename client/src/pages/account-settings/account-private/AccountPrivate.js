import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../stores/actions';
import * as joinUsAPI from '../../../api/joinUsApi';

import AccountInput from '../../../components/account-input/AccountInput';
import Button from '../../../components/button/Button';
import ErrorMessage from '../../../components/error-message/ErrorMessage';
import Spinner from '../../../components/spinner/Spinner';

const AccountPrivate = (props) => {
  const { user, edit, errors } = props;
  const { updateUser } = errors;

  const [fileToUpload, setFileToUpload] = useState({});
  const [fileErr, setFileErr] = useState(false);
  const [uploadSpinner, setUploadSpinner] = useState(false);
  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });

  const handleOnChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadSpinner(true);
      joinUsAPI
        .uploadImage(file)
        .then((image) => {
          setFileErr(false);
          setUploadSpinner(false);
          setFileToUpload(image);
        })
        .catch((err) => {
          setUploadSpinner(false);
          setFileErr(true);
          console.log(err);
        });
    }
  };

  if (!user.loggedIn) {
    return <Redirect to='/home/login' />;
  }

  return (
    <div className='account-private-info '>
      <AccountInput
        name='name'
        title='Name'
        value={state.name}
        changeAction={handleOnChange}
        edit={edit}
        maxLength={20}
        minLength={3}
      />
      {updateUser.name ? <ErrorMessage message='*Name should be between 3-20 chararters' /> : null}

      <AccountInput name='email' title='Email' value={state.email} changeAction={handleOnChange} edit={edit} />
      {updateUser.email ? <ErrorMessage message='*Please insert valid email' /> : null}
      {updateUser.emailAlreadyInUse ? <ErrorMessage message='*Email already in use' /> : null}

      <div className='image-upload'>
        <AccountInput name='profilePicture' type='file' title='Profile Picture' changeAction={handleFile} edit={edit} />
        {uploadSpinner ? <Spinner /> : null}
        {fileToUpload ? <span>{fileToUpload.name}</span> : null}
        {fileErr ? <ErrorMessage text='*Please insert a valid jpeg/png file' /> : null}
      </div>

      <Button
        text={'Save'}
        classes='save-profile-btn transition'
        action={() => {
          props.setEdit(true);
          props.updateUser({ ...state, profileImage: fileToUpload });
        }}
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
