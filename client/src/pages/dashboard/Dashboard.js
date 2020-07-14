import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../stores/actions';
import UserProject from './user-project/UserProject';
import Button from '../../components/button/Button';
import Menu from './menu/Menu';

const Dashboard = (props) => {
  return (
    <div className='dashboard center-items slide-from-bottom'>
      <Menu />
      <div className='user-workspace'>
        <UserProject />
        <Button text='SHOW ME MY PAGE' classes='execute-btn bold-text transition' action={props.getSpotifyData} />
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getSpotifyData: () => dispatch(actions.getSpotifyData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
