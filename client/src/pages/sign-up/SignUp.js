import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Title from '../../components/title/Title';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/icon';
import { icons } from '../../constant/icons';

const SignUp = (props) => {
  const { user } = props;

  return (
    <div className='sign-up fade-in rounded-border'>
      <Icon icon={icons.close} classes='close-icon bold-black-text' action={props.closeSignUp} />
      <div className='sign-up-content'>
        <Title text='Signup' classes='bold-text' />
        <Input title='Full Name' value={user.userName} action={props.userName} />
        <Input title='Email' value={user.email} action={props.userEmail} />
        <Input title='Password' value={user.password} type='password' action={props.userPassword} />
        <Input title='Confirm Password' type='password' />
        <Input title='Phone' value={user.phone} action={props.usersPhone} />
        <Button text='Sign-up' classes='bold-text' />
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
  userPhone: (e) => dispatch(actions.userName(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
