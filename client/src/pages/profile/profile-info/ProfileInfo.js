import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';

const ProfileInfo = (props) => {
  const { profile } = props;
  return (
    <div className='profile-info'>
      <div className='profile-time'>
        <Title text='With us since' classes='profile-info-title bold-text' />
        <Title text={profile.createdAt} classes='profile-info-value' />
      </div>
      <div className='profile-projects-length'>
        <Title text='Projects' classes='profile-info-title bold-text' />
        <Title text={profile.projects.length} classes='profile-info-value' />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(ProfileInfo);
