import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Icon from '../../components/icon/icon';
import LoginManual from './login-manual/LoginManual';
import { icons } from '../../constant/icons';

const Login = (props) => {
  return (
    <div className='login center-items fade-in rounded-border '>
      <Icon icon={icons.close} classes='close-icon bold-black-text' action={props.closeLogin} />
      <LoginManual />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  closeLogin: () => dispatch(actions.closeLoginToast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
