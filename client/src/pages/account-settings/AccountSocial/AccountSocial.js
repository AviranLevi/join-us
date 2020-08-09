import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';
import * as actions from '../../../stores/actions';
import AccountInput from '../../../components/account-input/AccountInput';

const AccountSocial = (props) => {
  const { user, features } = props;
  return (
    <div className='account-social'>
      <Title text='Your Social Links' classes='bold-text' />
      <AccountInput title='Spotify' value={user.spotify} edit={features.editUser} changeAction={props.userSpotify} />
      <AccountInput
        title='Instagram'
        value={user.instagram}
        edit={features.editUser}
        changeAction={props.userInstagram}
      />
      <AccountInput title='TikTok' value={user.tiktok} edit={features.editUser} changeAction={props.userTiktok} />
      <AccountInput title='Facebook' value={user.facebook} edit={features.editUser} changeAction={props.userFacebook} />
      <AccountInput title='YouTube' value={user.youtube} edit={features.editUser} changeAction={props.userYouTube} />
      <AccountInput title='Website' value={user.website} edit={features.editUser} changeAction={props.userWebsite} />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userSpotify: (e) => dispatch(actions.userSpotify(e.target.value)),
  userInstagram: (e) => dispatch(actions.userInstagram(e.target.value)),
  userTiktok: (e) => dispatch(actions.userTiktok(e.target.value)),
  userFacebook: (e) => dispatch(actions.userFacebook(e.target.value)),
  userYouTube: (e) => dispatch(actions.userYouTube(e.target.value)),
  userWebsite: (e) => dispatch(actions.userWebsite(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSocial);
