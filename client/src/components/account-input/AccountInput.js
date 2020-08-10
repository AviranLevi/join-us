import React from 'react';

const AccountInput = ({ title, name = '', type = 'text', classes = '', edit, changeAction, value, style = {} }) => (
  <div className={`account-input ${classes}`} style={style}>
    <label>{title}</label>
    <input
      className='transition'
      name={name}
      value={value}
      type={type}
      onChange={changeAction}
      disabled={!edit}
      placeholder={`${title}...`}
    />
  </div>
);

export default AccountInput;
