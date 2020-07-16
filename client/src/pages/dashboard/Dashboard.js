import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import UserProject from './user-project/UserProject';
import Button from '../../components/button/Button';
import Menu from './menu/Menu';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Dashboard = (props) => {
  return (
    <div className='home center-items'>
      <Header />
      <div className='dashboard center-items '>
        <Menu />
        <div className='user-workspace slide-from-right'>
          <UserProject />
          <Button text='SHOW ME MY PAGE' classes='execute-btn bold-text transition' action={props.getSpotifyData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getSpotifyData: () => dispatch(actions.getSpotifyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
