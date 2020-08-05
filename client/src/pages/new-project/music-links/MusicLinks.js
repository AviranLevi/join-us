import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../stores/actions';
import { icons } from '../../../constant/icons';
import UserLinkInput from '../../../components/user-link-input/UserLinkInput';
import ErrorMessage from '../../../components/error-message/ErrorMessage';
import Title from '../../../components/title/Title';

const MusicLinks = (props) => {
  const { project, errors } = props;
  const { musicLinks } = project;
  return (
    <div className='music-links center-items'>
      <Title text='Your music here:' classes='bold-text' />

      <div className='music-link center-items'>
        <UserLinkInput value={musicLinks.spotify} icon={icons.spotify} changeAction={props.spotifyLink} />
        {errors.project.spotify ? <ErrorMessage classes='link-error' message='Spotify link required!' /> : null}
      </div>

      <div className='music-link center-items'>
        <UserLinkInput value={musicLinks.appleMusic} icon={icons.appleMusic} changeAction={props.appleMusicLink} />
        {errors.project.appleMusic ? <ErrorMessage classes='link-error' message='Please insert valid link' /> : null}
      </div>

      <div className='music-link center-items'>
        <UserLinkInput value={musicLinks.deezer} icon={icons.deezer} changeAction={props.deezerLink} />
        {errors.project.deezer ? <ErrorMessage classes='link-error' message='Please insert valid link' /> : null}
      </div>

      <div className='music-link center-items'>
        <UserLinkInput value={musicLinks.youtube} icon={icons.youtube} changeAction={props.youtubeLink} />
        {errors.project.youtube ? <ErrorMessage classes='link-error' message='Please insert valid link' /> : null}
      </div>

      <div className='music-link center-items'>
        <UserLinkInput value={musicLinks.soundcloud} icon={icons.soundcloud} changeAction={props.soundCloudLink} />
        {errors.project.soundcloud ? <ErrorMessage classes='link-error' message='Please insert valid link' /> : null}
      </div>

      <div className='music-link center-items'>
        <UserLinkInput value={musicLinks.tidal} icon={icons.tidal} changeAction={props.tidalLink} />
        {errors.project.tidal ? <ErrorMessage classes='link-error' message='Please insert valid link' /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  spotifyLink: (e) => dispatch(actions.getSpotifyLink(e.target.value)),
  appleMusicLink: (e) => dispatch(actions.getAppleMusicLink(e.target.value)),
  youtubeLink: (e) => dispatch(actions.getYoutubeLink(e.target.value)),
  soundCloudLink: (e) => dispatch(actions.getSoundCloudLink(e.target.value)),
  deezerLink: (e) => dispatch(actions.getDeezerLink(e.target.value)),
  tidalLink: (e) => dispatch(actions.getTidalLink(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicLinks);
