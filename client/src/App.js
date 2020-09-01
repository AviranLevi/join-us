import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';
import * as actions from './stores/actions/';
import './app.scss';

import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Loading from './components/loading/Loading';
import Home from './pages/home/Home';
import UserProjects from './pages/user-projects/UserProjects';
import NewProject from './pages/new-project/NewProject';
import AccountSettings from './pages/account-settings/AccountSettings';
import Header from './components/header/Header';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import Profile from './pages/profile/Profile';

const App = (props) => {
  const { user, features } = props;

  useEffect(() => {
    props.userAuthenticated();
  }, []);
  return (
    <div className='app'>
      <div className='home center-items'>
        <Header />
        <div className='dashboard'>
          {user.isAuthenticated ? <Menu /> : null}
          <div className='user-workspace slide-from-right'>
            {user.isAuthenticated ? (
              <Switch>
                <Route exact path='/' component={UserProjects} />
                <Route exact path='/profile/:id' component={Profile} />
                <Route exact path='/new-project' component={NewProject} />
                <Route exact path='/account-settings' component={AccountSettings} />
              </Switch>
            ) : (
              <Route exact path='/' component={Home} />
            )}
          </div>
        </div>
        <Footer />
      </div>
      {features.loginToast ? <Login /> : null}
      {features.signUpToast ? <SignUp /> : null}
      {features.trackDataLoading ? <Loading /> : null}
      {!user.loggedIn ? <Redirect to='/' /> : null}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

const mapDispatchToProps = (dispatch) => ({
  userAuthenticated: () => dispatch(actions.userAuthenticated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
