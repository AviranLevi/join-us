import React from 'react';
import Title from '../../../components/title/Title';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

const LoginManual = () => (
  <div className='login-manual center-items'>
    <div className='login-box'>
      <Title text='Login' classes='bold-black-text login-title' />
      <Input title='Username' classes='username-input' />
      <Input title='Password' classes='pass-input' />
      <Button text='Login' classes='bold-black-text login-btn rounded-border' />
    </div>
  </div>
);

export default LoginManual;
