import React from 'react';
import { connect } from 'react-redux';
import Title from '../../../components/title/Title';

const ProfileInfo = (props) => {
  return (
    <div className='profile-info'>
      <div className='profile-time'>
        <Title text='With us since' classes='profile-info-title bold-text' />
        <Title text={props.createdAt} classes='profile-info-value' />
      </div>
      <div className='profile-projects-length'>
        <Title text='Projects' classes='profile-info-title bold-text' />
        <Title text={props.projects.length} classes='profile-info-value' />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state.user;

export default connect(mapStateToProps)(ProfileInfo);
