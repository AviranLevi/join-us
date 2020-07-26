import React from 'react';

const Button = ({ text, classes = '', action, style = {}, icon, disabled = false }) => (
  <button style={style} onClick={action} className={`btn ${classes}`} disabled={disabled}>
    {text} {icon}
  </button>
);

export default Button;
