import React from 'react';
import Title from '../../title/Title';
import { Link } from 'react-router-dom';

const UserLoggedIn = ({ userId, userName, userImageSrc }) => {
  return (
    <div className='signed-in'>
      <Link to={`/home/profile/${userId}`} className='center-items'>
        {userImageSrc ? <img src={userImageSrc} alt={userName} /> : <i className='fas fa-user-circle profile-icon'></i>}
        <Title text={userName} classes='profile-header-name bold-text' />
      </Link>
    </div>
  );
};

export default UserLoggedIn;
