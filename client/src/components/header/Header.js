import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Logo from '../logo/Logo';
import Button from '../button/Button';
import UserLoggedIn from './UserLoggedIn/UserLoggedIn';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { user } = props;
  return (
    <div className='header center-items slide-from-top'>
      <Link to={user.loggedIn ? '/home/dashboard' : '/home/login'} className='logo'>
        <Logo text='JoinUS' classes='bold-black-text' />
      </Link>
      {user.loggedIn ? (
        <UserLoggedIn userId={user.id} userName={user.name} userImageSrc={user.profileImage} />
      ) : (
        <div className='login-signup center-items'>
          <Button action={props.openLogin} text='Login' classes='bold-black-text' />
          <Button action={props.openSignUp} text='Sign-up' classes='bold-black-text' />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  openLogin: () => dispatch(actions.loginToast(true)),
  openSignUp: () => dispatch(actions.openSignUpToast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
