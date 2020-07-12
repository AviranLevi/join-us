import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Icon from '../../components/icon/icon';
import LoginManual from './login-manual/LoginManual';
import SocialLogin from './social-login/SocialLogin';

const Login = (props) => {
  return (
    <div className='login center-items fade-in rounded-border '>
      <Icon icon='X' classes='close-icon bold-black-text' action={props.closeLogin} />
      <LoginManual />
      <SocialLogin />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  closeLogin: () => dispatch(actions.closeLoginToast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
