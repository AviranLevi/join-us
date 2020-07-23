import React from 'react';
import { icons } from '../../constant/icons';
import Icon from '../../components/icon/icon';

const UserLinkInput = ({ icon, key, placeholderText, classes = '', disabled = false, changeAction, value = '' }) => (
  <div key={key} className='user-link-input bold-text center-items'>
    <Icon icon={icon ? icon : icons.website} />
    <input className={classes} onChange={changeAction} placeholder={placeholderText} disabled={disabled} />
  </div>
);
export default UserLinkInput;
