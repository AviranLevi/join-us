import React from 'react';

const Title = ({ text, classes = '' }) => (
  <h1 className={`${classes} title`}>{text}</h1>
);

export default Title;
