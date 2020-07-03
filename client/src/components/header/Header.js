import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import Logo from '../logo/Logo';
import Button from '../button/Button';

const Header = (props) => {
  return (
    <div className='header center-items slide-from-top'>
      <Logo text='JoinUS' classes='bold-black-text' />
      <div className='login-signup center-items'>
        <Button
          action={props.openLogin}
          text='Login'
          classes='bold-black-text'
        />
        <Button text='Sign-up' classes='bold-black-text' />
      </div>

      {/* <div className="signed-in">

      </div> */}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  openLogin: () => dispatch(actions.openLoginToast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
