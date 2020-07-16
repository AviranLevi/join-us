import React from 'react';
import Title from '../../title/Title';

const UserLoggedIn = ({ userName, userImageSrc }) => {
  return (
    <div className='signed-in center-items'>
      {userImageSrc ? <img src={userImageSrc} alt={userName} /> : <i className='fas fa-user-circle profile-icon'></i>}
      <Title text={userName} classes='bold-text' />
    </div>
  );
};

export default UserLoggedIn;
