import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/title/Title';
import { icons } from '../../constant/icons';
import Loading from '../../components/loading/Loading';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import AudioPlayer from '../../components/audio/AudioPlayer';

const ArtistLink = lazy(() => import('../../components/artist-link/ArtistLink'));

const UserLandPage = (props) => {
  // console.log(props.match);
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
    <Suspense fallback={<Loading />}>
      <div className='user-land-page center-items'>
        <div className='bg-image' style={backgroundStyle}></div>

        <div className='song-content'>
          <div className='song-cover'>
            <AudioPlayer audioSrc={props.audioPreview} classes='center-items transition' />
            <img className='song-cover-image' alt={props.trackName} src={props.coverImage} />
          </div>

          <div className='song-information center-items'>
            <Title text={props.trackName} classes='bold-text song-title' />

            {props.artists.map((art, i) => {
              const { spotify } = art.external_urls;
              if (i === 0) {
                return <ArtistLink name={art.name} url={spotify} classes='song-main-artist' />;
              }
            })}

            <div className='song-links center-items'>
              <ArtistLink icon={icons.spotify} url={props.spotify} classes='spotify' />
              <ArtistLink icon={icons.appleMusic} url={props.appleMusic} classes='apple' />
              <ArtistLink icon={icons.youTube} url={props.youtube} classes='youtube' />
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

        <Link to='/'>
          <Logo text='Powered by JoinUS' />
        </Link>
      </div>
    </Suspense>
  );
};

const mapStateToProps = (state = {}) => state.project;

export default connect(mapStateToProps)(UserLandPage);
