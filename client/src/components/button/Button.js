import React from 'react';

const Button = ({ text, classes = '', action, style = {}, icon }) => (
  <button style={style} onClick={action} className={`btn ${classes}`}>
    {text} {icon}
  </button>
);

export default Button;
