import React, { useState } from 'react';
import Button from '../button/Button';
import { icons } from '../../constant/icons.js';

const AudioPlayer = ({ audioSrc, classes = '', autoPlay = true }) => {
  const [audioPause, setAudioPause] = useState(false);
  const style = {
    display: 'none',
  };

  const play = () => {
    setAudioPause(false);
    document.getElementById('player').play();
  };

  const pause = () => {
    setAudioPause(true);
    document.getElementById('player').pause();
  };

  return (
    <div className={`${classes} audio-player`}>
      <audio id='player' controls autoPlay={autoPlay} loop className='song-audio'>
        <source src={audioSrc} /> />
      </audio>
      <div className='audio-btns'>
        <Button style={!audioPause ? style : null} action={play} text={icons.play} classes='play-btn fade-in' />
        <Button style={audioPause ? style : null} action={pause} text={icons.pause} classes='pause-btn fade-in' />
      </div>
    </div>
  );
};

export default AudioPlayer;
