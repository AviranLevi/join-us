import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Logo from '../logo/Logo';
import Button from '../button/Button';
import UserLoggedIn from './UserLoggedIn/UserLoggedIn';

const Header = (props) => {
  const { user } = props;
  return (
    <div className='header center-items slide-from-top'>
      <Logo text='JoinUS' classes='bold-black-text' />
      {user.loggedIn ? (
        <UserLoggedIn userName={user.name} userImageSrc={user.profileImage} />
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
  openLogin: () => dispatch(actions.openLoginToast()),
  openSignUp: () => dispatch(actions.openSignUpToast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
