import React from 'react';
import Title from '../title/Title';
import AudioPlayer from '../audio-player/AudioPlayer';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';
import { icons } from '../../constant/icons';

const Project = ({ songId, title, artists, createdDate, coverImage, audioSrc }) => (
  <div className='project center-items fade-in'>
    <AudioPlayer audioSrc={audioSrc} />
    <img alt={title} src={coverImage} />
    <Title text={title} />
    <Title text={artists} />
    <Title text={createdDate} />
    <Link to={`/project/${songId}`}>
      <Icon icon={icons.goTo} />
    </Link>
  </div>
);

export default Project;
