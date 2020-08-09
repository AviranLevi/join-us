import React, { useEffect, lazy, Suspense, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { icons } from '../../constant/icons';
import * as joinUsAPI from '../../api/joinUsApi';
import { isEmpty } from '../../utils/general';
import * as actions from '../../stores/actions';

import Title from '../../components/title/Title';
import Loading from '../../components/loading/Loading';
import AudioPlayer from '../../components/audio-player/AudioPlayer';

const ArtistLink = lazy(() => import('../../components/artist-link/ArtistLink'));

const UserLandPage = (props) => {
  const [projectData, setProjectData] = useState({});
  const [projectDataNotFound, setProjectDataNotFound] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    const project = async () =>
      joinUsAPI
        .getUserProject(id)
        .then((res) => {
          if (!isEmpty(res)) {
            setProjectData(res);
          } else {
            setProjectDataNotFound(true);
          }
        })
        .catch((err) => console.log(err));

    project();
    props.resetProjectState();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${projectData.coverImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(50px) saturate(1.5)',
  };
  if (projectDataNotFound) {
    return <Redirect to='/error' />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className='user-land-page center-items fade-in'>
        <div className='bg-image' style={backgroundStyle}></div>
        <MetaTags>
          <meta property='og:url' content={`https://www.join-us.com/project/${projectData._id}`} />
          <meta property='og:type' content='article' />
          <meta property='og:title' content={projectData.trackTitle} />
          <meta property='og:image' content={projectData.coverImage} />
          <meta property='og:site_name' content='JoinUS' />
        </MetaTags>

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
                <ArtistLink icon={icons.youtube} url={projectData.youtube} classes='youtube' />
              ) : null}
              {projectData.deezer ? <ArtistLink icon={icons.deezer} url={projectData.deezer} classes='deezer' /> : null}
              {projectData.soundcloud ? (
                <ArtistLink icon={icons.soundcloud} url={projectData.soundcloud} classes='soundcloud' />
              ) : null}

              {projectData.tidal ? <ArtistLink icon={icons.tidal} url={projectData.tidal} classes='tidal' /> : null}
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

        <Link to='/home/dashboard' target='_blank'>
          Powered by JoinUS
        </Link>
      </div>
    </Suspense>
  );
};

const mapStateToProjectData = (state = {}) => state.project;

const mapDispatchToProjectData = (dispatch) => ({
  resetProjectState: () => dispatch(actions.resetProjectState()),
});

export default connect(mapStateToProjectData, mapDispatchToProjectData)(UserLandPage);
