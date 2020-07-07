import React, { useState } from 'react';
import Icon from '../icon/icon';
import { icons } from '../../constant/icons';
import { searchInString } from '../../utils/general';

const UserLinkInput = ({ text = '', placeholderText, classes = '' }) => {
  const [link, setLink] = useState('');
  const [saveLink, setSaveLink] = useState(false);

  return (
    <div className='user-link-input bold-text center-items'>
      <Icon icon={searchInString(link)} />
      <label htmlFor={text.toLowerCase()}>{text}</label>
      <input
        onChange={(e) => setLink(e.target.value)}
        name={text.toLowerCase()}
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
