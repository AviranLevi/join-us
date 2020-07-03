import React from 'react';
import Logo from '../logo/Logo';
import Button from '../button/Button';

function Header() {
  return (
    <div className='header center-items fade-in'>
      <Logo text='JoinUS' classes='bold-black-text' />
      <div className='login-signup center-items'>
        <Button text='Login' classes='bold-black-text' />
        <Button text='Sign-up' classes='bold-black-text' />
      </div>

      {/* <div className="signed-in">

      </div> */}
    </div>
  );
}

export default Header;
