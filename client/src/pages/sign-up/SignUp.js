import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Title from '../../components/title/Title';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/icon';
import { icons } from '../../constant/icons';
import ErrorMessage from '../../components/errorMessage/errorMessage';

const SignUp = (props) => {
  const { user, errors } = props;
  const { signUp } = errors;

  return (
    <div className='sign-up fade-in rounded-border'>
      <Icon icon={icons.close} classes='close-icon bold-black-text' action={props.closeSignUp} />
      <div className='sign-up-content'>
        <Title text='Signup' classes='bold-text' />

        <div className='sign-up-input'>
          <Input title='Full Name' value={user.name} changeAction={props.userName} />
          {signUp.name ? <ErrorMessage message='*Name is required (minimum 3 characters)' /> : null}
        </div>

        <div className='sign-up-input'>
          <Input title='Email' value={user.email} changeAction={props.userEmail} />
          {signUp.email ? <ErrorMessage message='*Please enter valid email' /> : null}
        </div>

        <div className='sign-up-input'>
          <Input title='Password' value={user.password} type='password' changeAction={props.userPassword} />
          {signUp.password ? <ErrorMessage message='*Password is required (minimun 6 characters)' /> : null}
        </div>

        <div className='sign-up-input'>
          <Input
            title='Confirm Password'
            value={user.confirmPassword}
            type='password'
            changeAction={props.userConfirmPassword}
          />
          {signUp.confirmPassword ? <ErrorMessage message='*Passwords are not matched' /> : null}
        </div>

        <Button text='Sign-up' classes='bold-text' action={props.createNewUser} />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  closeSignUp: () => dispatch(actions.closeSignUpToast()),
  userName: (e) => dispatch(actions.userName(e.target.value)),
  userEmail: (e) => dispatch(actions.userEmail(e.target.value)),
  userPassword: (e) => dispatch(actions.userPassword(e.target.value)),
  userConfirmPassword: (e) => dispatch(actions.userConfirmPassword(e.target.value)),
  createNewUser: () => dispatch(actions.createNewUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
