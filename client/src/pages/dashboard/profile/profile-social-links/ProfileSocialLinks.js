import React from 'react';
import { connect } from 'react-redux';
import { icons } from '../../../../constant/icons';
import ArtistLink from '../../../../components/artist-link/ArtistLink';

const ProfileSocialLinks = (props) => (
  <div className='profile-social-links center-items'>
    <ArtistLink icon={icons.spotify} url={props.spotify} classes='spotify-profile' />
    <ArtistLink icon={icons.instagram} url={props.instagram} classes='instagram-profile' />
    <ArtistLink icon={icons.tiktok} url={props.tiktok} classes='tiktok-profile' />
    <ArtistLink icon={icons.youTube} url={props.youtube} classes='youtube-profile' />
    <ArtistLink icon={icons.facebook} url={props.facebook} classes='facebook-profile' />
    <ArtistLink icon={icons.website} url={props.website} classes='website-profile' />
  </div>
);

const mapStateToProps = (state = {}) => state.user;

export default connect(mapStateToProps)(ProfileSocialLinks);
