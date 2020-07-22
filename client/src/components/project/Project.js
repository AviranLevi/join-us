import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../constant/icons';
import copy from 'copy-to-clipboard';
import Title from '../title/Title';
import Icon from '../icon/icon';

const Project = ({ songId, title, artists = [], createdDate, coverImage }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const artistsLength = artists.length;

  const copyToClipboard = () => {
    setCopySuccess(true);
    // copy(`www.join-us.com/project/${songId}`);
    copy(`http://localhost:3000/project/${songId}`);

    setTimeout(() => setCopySuccess(false), 2000);
  };

  const backgroundImage = {
    background: `url(${coverImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='dashboard-project center-items fade-in '>
      <div className='dashboard-project-background' style={backgroundImage}></div>

      <div className='project-content center-items'>
        <Title text={title} classes='project-title' />

        <div className='project-artists center-items'>
          {artists.map((name, i) => (artistsLength === i + 1 ? <Title text={name} /> : <Title text={name + ','} />))}
        </div>

        <Title text={createdDate} />

        <Link to={`/project/${songId}`}>
          <Icon icon={icons.goTo} />
        </Link>

        <div onClick={copyToClipboard} className='share-link-copy'>
          <Icon icon={icons.link} />
          {copySuccess ? (
            <div className='copied-toast fade-out'>
              <Title text={'Link copied!'} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
