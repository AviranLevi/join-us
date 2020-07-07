import React, { useState } from 'react';
import Title from '../../../components/title/Title';
import UserLinkInput from '../../../components/user-link-input/UserLinkInput';
import Icon from '../../../components/icon/icon';
import { icons } from '../../../constant/icons';

const UserProject = () => {
  const [linksCounter, setLinksCounter] = useState(1);
  return (
    <div className='user-project center-items slide-from-right'>
      <Title
        text='Put your music release links here:'
        classes='bold-text user-project-title'
      />

      <div className='music-links center-items'>
        {[...Array(linksCounter)].map(() => (
          <UserLinkInput placeholderText='Put any link here...' />
        ))}
      </div>

      <Icon icon={icons.plus} action={() => setLinksCounter(linksCounter++)} />
    </div>
  );
};

export default UserProject;
