import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../constant/icons';
import copy from 'copy-to-clipboard';
import Title from '../title/Title';
import Icon from '../icon/icon';
import * as joinUsApi from '../../api/joinUsApi';

const Project = ({ songId, title, artists = [], createdDate, coverImage }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [removeProject, setRemoveProject] = useState(false);
  const [removeProjectAnimation, setRemoveProjectAnimation] = useState(false);
  const artistsLength = artists.length;

  const copyToClipboard = () => {
    setCopySuccess(true);
    // copy(`www.join-us.com/project/${songId}`);
    copy(`http://localhost:3000/project/${songId}`);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const deleteProject = async () => {
    const project = await joinUsApi.removeProject(songId);
    const { deleted } = project;
    if (deleted) {
      setRemoveProjectAnimation(true);
      setTimeout(() => setRemoveProject(true), 1000);
    }
  };

  const backgroundImage = {
    background: `url(${coverImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className={`dashboard-project center-items ${removeProjectAnimation ? 'fade-out' : 'fade-in'} `}
      style={{ display: removeProject ? 'none' : 'grid' }}
    >
      <div className='dashboard-project-background' style={backgroundImage}></div>

      <div className='project-content center-items'>
        <Title text={title} classes='project-title' />

        <div className='project-artists center-items'>
          {artists.map((name, i) => (artistsLength === i + 1 ? <Title text={name} /> : <Title text={name + ','} />))}
        </div>

        <Title text={createdDate} />

        <Link to={`/project/${songId}`} target='_blank' title='Go To Page'>
          <Icon icon={icons.goTo} />
        </Link>

        <div onClick={copyToClipboard} className='share-link-copy' title='Copy Link'>
          <Icon icon={icons.link} />
          {copySuccess ? (
            <div className='copied-toast fade-in-out'>
              <Title text={'Link copied!'} />
            </div>
          ) : null}
        </div>

        <div onClick={deleteProject} className='remove-project' title='Delete Project'>
          <Icon icon={icons.remove} />
        </div>
      </div>
    </div>
  );
};

export default Project;
