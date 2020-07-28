import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../stores/actions';
import Title from '../../../components/title/Title';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

const LoginManual = (props) => (
  <div className='login-manual center-items'>
    <div className='login-box'>
      <Title text='Login' classes='bold-black-text login-title' />
      <Input title='Email' classes='username-input' changeAction={props.userEmail} />
      <Input title='Password' classes='pass-input' changeAction={props.userPassword} />
      <Button text='Login' classes='bold-black-text login-btn rounded-border' action={props.userLogin} />
    </div>
  </div>
);

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userEmail: (e) => dispatch(actions.userEmail(e.target.value)),
  userPassword: (e) => dispatch(actions.userPassword(e.target.value)),
  userLogin: () => dispatch(actions.userLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginManual);
