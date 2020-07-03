import React from 'react';
import Title from '../../components/title/Title';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/icon';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';

const Login = (props) => {
  return (
    <div className='login center-items fade-in rounded-border'>
      <Icon
        icon='X'
        classes='close-icon bold-black-text'
        action={props.closeLogin}
      />

      <div className='login-manual center-items'>
        <div className='login-box'>
          <Title text='Login' classes='bold-black-text login-title' />
          <Input title='Username' classes='username-input' />
          <Input title='Password' classes='pass-input' />
          <Button
            text='Login'
            classes='bold-black-text login-btn rounded-border'
          />
        </div>
      </div>

      <div className='login-social'>
        <Button text='Facebook' />
        <Button text='Google' />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  closeLogin: () => dispatch(actions.closeLoginToast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
