import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/title/Title';
import ArtistLink from '../../components/artist-link/ArtistLink';
import { icons } from '../../constant/icons';

const UserLandPage = (props) => {
  //   useEffect(() => {
  //     const project = getUserProject(id);
  //     setUserProject(project);
  //   }, [userProject]);

  const backgroundStyle = {
    backgroundImage: `url(${props.coverImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(50px)',
  };

  return (
    <div className='user-land-page center-items'>
      <div className='bg-image' style={backgroundStyle}></div>
      <div className='song-content center-items'>
        <audio controls autoPlay loop className='song-audio'>
          <source src={props.audioPreview} /> />
        </audio>

        <img className='song-cover-image' alt={props.trackName} src={props.coverImage} />

        <div className='song-information center-items'>
          {props.artists.map((art, i) => {
            const { spotify } = art.external_urls;
            if (i === 0) {
              return <ArtistLink name={art.name} url={spotify} classes='song-main-artist' />;
            }
          })}

          <Title text={props.trackName} classes='bold-black-text song-title' />

          <div className='song-links center-items'>
            <ArtistLink icon={icons.spotify} url={props.spotify} classes='spotify' />
            <ArtistLink icon={icons.appleMusic} url={props.appleMusic} classes='apple' />
            <ArtistLink icon={icons.youTube} url={props.youTube} classes='youtube' />
            <ArtistLink icon={icons.deezer} url={props.deezer} classes='deezer' />
            <ArtistLink icon={icons.soundcloud} url={props.soundcloud} classes='soundcloud' />
          </div>
        </div>

        <div className='artist-social-links center-items'>
          <ArtistLink icon={icons.instagram} url={props.instagram} classes='instagram' />
          <ArtistLink icon={icons.tiktok} url={props.tiktok} classes='tiktok' />
          <ArtistLink icon={icons.facebook} url={props.facebook} classes='facebook' />
          <ArtistLink icon={icons.website} url={props.website} classes='website' />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state.project;

export default connect(mapStateToProps)(UserLandPage);
