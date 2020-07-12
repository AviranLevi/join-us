import React from 'react';
import Title from '../title/Title';
import Icon from '../icon/icon';

const ArtistLink = ({ name, url, icon, classes, style = {} }) => {
  return url ? (
    <div className={`artist-link bold-text ${classes}`}>
      <a className='link' target='_blank' href={url} style={style}>
        {name ? name : null}
        {icon ? <Icon icon={icon} /> : null}
      </a>
    </div>
  ) : null;
};

export default ArtistLink;
