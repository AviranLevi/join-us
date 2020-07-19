import React from 'react';

const Logo = ({ text, src, classes = '' }) =>
  text ? (
    <h1 className={`${classes}`}>{text}</h1>
  ) : src || (text && src) ? (
    <img alt={text || 'logo'} className={`${classes} logo`} src={src} />
  ) : null;

export default Logo;
