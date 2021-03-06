import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../stores/actions';
import Title from '../../../components/title/Title';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import ErrorMessage from '../../../components/error-message/ErrorMessage';

const LoginManual = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.userLogin();
  };
  return (
    <form className='login-manual center-items' onSubmit={handleSubmit}>
      <div className='login-box'>
        <Title text='Login' classes='bold-black-text login-title' />
        <Input title='Email' classes='username-input' value={props.user.email} changeAction={props.userEmail} />
        <Input
          title='Password'
          type='password'
          classes='pass-input'
          value={props.user.password}
          changeAction={props.userPassword}
        />
        {props.errors.login.notFound ? <ErrorMessage message='Email or password are incorrect.' /> : null}
        <Button text='Login' classes='bold-black-text login-btn rounded-border' action={props.userLogin} />
      </div>
    </form>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userEmail: (e) => dispatch(actions.userEmail(e.target.value)),
  userPassword: (e) => dispatch(actions.userPassword(e.target.value)),
  userLogin: () => dispatch(actions.userLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginManual);
