import React from 'react';
import Title from '../../components/title/Title';
import UserProject from './user-project/UserProject';

function Dashboard() {
  return (
    <div className='dashboard center-items slide-from-bottom'>
      <UserProject />
    </div>
  );
}

export default Dashboard;
