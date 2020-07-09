import React from 'react';
import UserProject from './user-project/UserProject';
import Button from '../../components/button/Button';

function Dashboard() {
  return (
    <div className='dashboard center-items slide-from-bottom'>
      <UserProject />
      <Button
        text='SHOW ME MY PAGE'
        classes='execute-btn bold-text transition'
      />
    </div>
  );
}

export default Dashboard;
