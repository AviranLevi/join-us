import React from 'react';

const Title = ({ text, classes = '', style = {} }) => (
  <h1 style={style} className={`${classes} title`}>
    {text}
  </h1>
);

export default Title;
