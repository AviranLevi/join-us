import React from 'react';

const Button = ({ text, classes = '', action, style = {} }) => (
  <button style={style} onClick={action} className={`btn ${classes}`}>
    {text}
  </button>
);

export default Button;
