import React from 'react';

const Input = ({ type = 'text', title = '', classes = '', changeAction, value }) => (
  <div className={`${classes} input-box`}>
    <input
      value={value}
      name={title.toLowerCase()}
      type={type}
      onChange={changeAction}
      className={`${classes} input-field`}
      placeholder={title}
    />
    <label className='input-label' htmlFor={title.toLowerCase()}>
      {title}
    </label>
  </div>
);

export default Input;
