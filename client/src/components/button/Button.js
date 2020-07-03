import React from 'react';

const Button = ({ text, classes = '', action }) => (
  <button onClick={action} className={`btn ${classes}`}>
    {text}
  </button>
);

export default Button;
