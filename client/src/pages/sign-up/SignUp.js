import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Title from '../../components/title/Title';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/icon';
import { icons } from '../../constant/icons';
import { createUser } from '../../api/joinUsApi';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    const userData = { userName, email, password, phone };
    createUser(userData);
  }

  return (
    <div className='sign-up fade-in rounded-border'>
      <Icon icon={icons.close} classes='close-icon bold-black-text' action={props.closeSignUp} />

      <div className='sign-up-content'>
        <Title text='Signup' classes='bold-text' />
        <Input title='Full Name' action={(e) => setUserName(e.target.value)} />
        <Input title='Email' action={(e) => setEmail(e.target.value)} />
        <Input title='Password' type='password' action={(e) => setPassword(e.target.value)} />
        <Input title='Phone' action={(e) => setPhone(e.target.value)} />
        <Button text='Sign-up' classes='bold-text' action={() => setSubmitted(true)} />
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
