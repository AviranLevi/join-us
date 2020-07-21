import React from 'react';
import Title from '../../components/title/Title';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
  const { user } = props;
  if (user.loggedIn) {
    return <Redirect to='/home/dashboard' />;
  }
  return (
    <div className='home center-items'>
      <div className='middle center-items'>
        <Title
          text='Create an AWESOME land-page for your new release!'
          classes='bold-text main-page-title slide-from-right'
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Home);
