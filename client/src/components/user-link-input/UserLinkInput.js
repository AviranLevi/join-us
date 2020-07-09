import React, { useState } from 'react';
import Icon from '../icon/icon';
import { icons } from '../../constant/icons';
import { getSocialIcon } from '../../utils/general';

const UserLinkInput = ({ key = '', placeholderText, classes = '' }) => {
  const [link, setLink] = useState('');
  const [saveLink, setSaveLink] = useState(false);

  return (
    <div key={key} className='user-link-input bold-text center-items'>
      <Icon icon={getSocialIcon(link)} />
      <input
        onChange={(e) => setLink(e.target.value)}
        placeholder={placeholderText}
        disabled={saveLink}
      />
      {saveLink ? (
        <Icon
          icon={icons.edit}
          action={() => setSaveLink(false)}
          classes='edit-btn pointer transition'
        />
      ) : (
        <Icon
          icon={icons.save}
          action={() => setSaveLink(true)}
          classes='save-btn pointer transition'
        />
      )}
    </div>
  );
};
export default UserLinkInput;
