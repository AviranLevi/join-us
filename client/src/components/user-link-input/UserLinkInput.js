import React from 'react';
import { icons } from '../../constant/icons';
import Icon from '../../components/icon/icon';

const UserLinkInput = ({ icon, key, placeholderText, classes = '', disabled = false, changeAction, clickAction }) => (
  <div key={key} className='user-link-input bold-text center-items'>
    <Icon icon={icon ? icon : icons.website} />
    <input className={classes} onChange={changeAction} placeholder={placeholderText} disabled={disabled} />
    {/* {saveLink ? (
      <Icon icon={icons.edit} action={(() => clickAction, setSaveLink(false))} classes='edit-btn pointer transition' />
    ) : (
      <Icon icon={icons.save} action={() => setSaveLink(true)} classes='save-btn pointer transition' />
    )} */}
  </div>
);
export default UserLinkInput;
