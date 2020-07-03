import React from 'react';

const Text = ({ text, classes = '' }) => (
  <p className={`${classes} text`}>{text}</p>
);

export default Text;
