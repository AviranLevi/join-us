import React, { useEffect, lazy, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/title/Title';
import { icons } from '../../constant/icons';
import Loading from '../../components/loading/Loading';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import AudioPlayer from '../../components/audio-player/AudioPlayer';
import * as joinUsAPI from '../../api/joinUsApi';

const ArtistLink = lazy(() => import('../../components/artist-link/ArtistLink'));

const UserLandPage = ({ match }) => {
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    const id = match.params.id;
    const project = async () =>
      joinUsAPI
        .getUserProject(id)
        .then((res) => {
          setProjectData(res);
        })
        .catch((err) => console.log(err));

    project();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${projectData.coverImage})`,
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
            {projectData.audioPreview ? (
              <AudioPlayer audioSrc={projectData.audioPreview} classes='center-items transition' />
            ) : null}
            <img className='song-cover-image' alt={projectData.trackTitle} src={projectData.coverImage} />
          </div>

          <div className='song-information center-items'>
            <Title text={projectData.trackTitle} classes='bold-text song-title' />

            {projectData.artists
              ? projectData.artists.map((art, i) => {
                  const { spotify } = art.external_urls;
                  if (i === 0) {
                    return <ArtistLink name={art.name} url={spotify} classes='song-main-artist' />;
                  }
                  return;
                })
              : null}

            <div className='song-links center-items'>
              <ArtistLink icon={icons.spotify} url={projectData.spotify} classes='spotify' />
              {projectData.appleMusic ? (
                <ArtistLink icon={icons.appleMusic} url={projectData.appleMusic} classes='apple' />
              ) : null}
              {projectData.youtube ? (
                <ArtistLink icon={icons.youTube} url={projectData.youtube} classes='youtube' />
              ) : null}
              {projectData.deezer ? <ArtistLink icon={icons.deezer} url={projectData.deezer} classes='deezer' /> : null}
              {projectData.soundcloud ? (
                <ArtistLink icon={icons.soundcloud} url={projectData.soundcloud} classes='soundcloud' />
              ) : null}
            </div>
          </div>

          <div className='artist-social-links center-items'>
            {projectData.instagram ? (
              <ArtistLink icon={icons.instagram} url={projectData.instagram} classes='instagram' />
            ) : null}
            {projectData.tiktok ? <ArtistLink icon={icons.tiktok} url={projectData.tiktok} classes='tiktok' /> : null}
            {projectData.facebook ? (
              <ArtistLink icon={icons.facebook} url={projectData.facebook} classes='facebook' />
            ) : null}
            {projectData.website ? (
              <ArtistLink icon={icons.website} url={projectData.website} classes='website' />
            ) : null}
          </div>
        </div>

        <Link to='/'>
          <Logo text='Powered by JoinUS' />
        </Link>
      </div>
    </Suspense>
  );
};

const mapStateToprojectData = (state = {}) => state.project;

export default connect(mapStateToprojectData)(UserLandPage);
