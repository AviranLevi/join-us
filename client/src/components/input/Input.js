import React from 'react';

const Input = ({ type = 'text', title = '', classes = '', changeAction }) => (
  <div className={`${classes} input-box`}>
    <input
      name={title.toLowerCase()}
      type={type}
      onChange={changeAction}
      className={`${classes} input-field`}
      placeholder={title}
    />
    <label className='input-label' for={title.toLowerCase()}>
      {title}
    </label>
  </div>
);

export default Input;
