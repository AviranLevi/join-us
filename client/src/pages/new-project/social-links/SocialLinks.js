import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../stores/actions';
import { icons } from '../../../constant/icons';

import UserLinkInput from '../../../components/user-link-input/UserLinkInput';
import ErrorMessage from '../../../components/error-message/ErrorMessage';
import Title from '../../../components/title/Title';

const SocialLinks = (props) => {
  const { project, errors, user } = props;
  const { socialLinks } = project;

  return (
    <div className='social-links center-items'>
      <Title text='Your socials here:' classes='bold-text' />

      <div className='social-link center-items'>
        <UserLinkInput value={socialLinks.instagram} icon={icons.instagram} changeAction={props.instagramLink} />
        {errors.project.instagram ? <ErrorMessage classes='link-error' message='Invalid link' /> : null}
      </div>

      <div className='social-link center-items'>
        <UserLinkInput value={socialLinks.facebook} icon={icons.facebook} changeAction={props.facebookLink} />
        {errors.project.facebook ? <ErrorMessage classes='link-error' message='Invalid link' /> : null}
      </div>

      <div className='social-link center-items'>
        <UserLinkInput value={socialLinks.tiktok} icon={icons.tiktok} changeAction={props.tiktokLink} />
        {errors.project.tiktok ? <ErrorMessage classes='link-error' message='Invalid link' /> : null}
      </div>

      <div className='social-link center-items'>
        <UserLinkInput value={socialLinks.website} changeAction={props.websiteLink} />
        {errors.project.website ? <ErrorMessage classes='link-error' message='Invalid link' /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  instagramLink: (e) => dispatch(actions.getInstagramLink(e.target.value)),
  tiktokLink: (e) => dispatch(actions.getTiktokLink(e.target.value)),
  facebookLink: (e) => dispatch(actions.getFacebookLink(e.target.value)),
  websiteLink: (e) => dispatch(actions.getWebsiteLink(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialLinks);
