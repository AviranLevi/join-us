import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../../components/header/Header';
import Menu from './menu/Menu';
import NewProject from './new-project/NewProject';
import UserProjects from './user-projects/UserProjects';
import Footer from '../../components/footer/Footer';

const Dashboard = (props) => {
  const { user } = props;
  return (
    <div className='home center-items'>
      <Header />
      <div className='dashboard'>
        {user.loggedIn ? <Menu /> : null}
        <div className='user-workspace slide-from-right'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={UserProjects} /> >
            <Route path='/dashboard/new-project' component={NewProject} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Dashboard);
