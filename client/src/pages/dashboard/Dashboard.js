import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as actions from '../../stores/actions/';

import Home from '../home/Home';
import Header from '../../components/header/Header';
import Menu from './menu/Menu';
import NewProject from '../new-project/NewProject';
import UserProjects from '../user-projects/UserProjects';
import Footer from '../../components/footer/Footer';
import Profile from '../profile/Profile';
import AccountSettings from '../account-settings/AccountSettings';

const Dashboard = (props) => {
  useEffect(() => {
    props.userAuthenticated();
  }, []);
  const { user } = props;

  return (
    <div className='home center-items'>
      <Header />
      <div className='dashboard'>
        {user.loggedIn ? <Menu /> : null}
        <div className='user-workspace slide-from-right'>
          <Switch>
            <Route exact path='/home/login' component={Home} />
            <Route exact path='/home/dashboard' component={UserProjects} />
            <Route exact path='/home/profile/:id' component={Profile} />
            <Route exact path='/home/dashboard/new-project' component={NewProject} />
            <Route exact path='/home/dashboard/settings' component={AccountSettings} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userAuthenticated: () => dispatch(actions.userAuthenticated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
