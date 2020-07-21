import React from 'react';
import Title from '../title/Title';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';
import { icons } from '../../constant/icons';

const Project = ({ songId, title, artists = [], createdDate, coverImage }) => {
  const artistsLength = artists.length;
  const backgroundImage = {
    background: `url(${coverImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='dashboard-project center-items fade-in'>
      <div className='dashboard-project-background' style={backgroundImage}></div>
      <div className='project-content center-items'>
        <Title text={title} />
        <div className='project-artists center-items'>
          {artists.map((name, i) => (artistsLength === i + 1 ? <Title text={name} /> : <Title text={name + ','} />))}
        </div>
        <Title text={createdDate} />
        <Link to={`/project/${songId}`}>
          <Icon icon={icons.goTo} />
        </Link>
      </div>
    </div>
  );
};

export default Project;
