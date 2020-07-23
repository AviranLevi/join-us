import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as actions from '../../stores/actions/';

import Home from '../home/Home';
import Header from '../../components/header/Header';
import Menu from './menu/Menu';
import NewProject from './new-project/NewProject';
import UserProjects from './user-projects/UserProjects';
import Footer from '../../components/footer/Footer';
import Profile from './profile/Profile';

const Dashboard = (props) => {
  const { user } = props;

  useEffect(() => {
    props.getUserProjects('test');
  }, [props.getUserProjects]);

  return (
    <div className='home center-items'>
      <Header />
      <div className='dashboard'>
        {user.loggedIn ? <Menu /> : null}
        <div className='user-workspace slide-from-right'>
          <Switch>
            <Route exact path='/home/login' component={Home} />
            <Route exact path='/home/dashboard' component={UserProjects} /> >
            <Route exact path='/home/profile' component={Profile} />
            <Route exact path='/home/dashboard/new-project' component={NewProject} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  getUserProjects: (id) => dispatch(actions.getUserProjects(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
