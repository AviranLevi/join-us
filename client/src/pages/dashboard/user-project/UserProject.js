import React, { useState } from 'react';
import Title from '../../../components/title/Title';
import UserLinkInput from '../../../components/user-link-input/UserLinkInput';
import Icon from '../../../components/icon/icon';
import { icons } from '../../../constant/icons';

const UserProject = () => {
  const [linksCounter, setLinksCounter] = useState(1);

  const style = {
    display: 'none',
  };

  return (
    <div className='user-project center-items slide-from-right'>
      <Title text='Put your music release links here:' classes='bold-text user-project-title' />

      <div className='music-links center-items'>
        {[...Array(linksCounter)].map((count) => (
          <UserLinkInput key={count} placeholderText='Put any link here...' />
        ))}
      </div>

      <Icon
        style={linksCounter >= 9 ? style : null}
        icon={icons.plus}
        action={() => setLinksCounter(linksCounter + 1)}
        classes='pointer transition plus-btn'
      />
    </div>
  );
};

export default UserProject;
