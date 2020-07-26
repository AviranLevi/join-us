import React from 'react';

const AcountInput = ({ title, type = 'text', classes = '', edit, changeAction, value, style = {} }) => (
  <div className={`acount-input ${classes}`} style={style}>
    <label>{title}</label>
    <input value={value} type={type} onChange={changeAction} disabled={!edit} placeholder={`${title}...`} />
  </div>
);

export default AcountInput;
