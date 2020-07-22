import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Redirect } from 'react-router-dom';
import './app.scss';

import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Loading from './components/loading/Loading';

const App = (props) => {
  const { user, features } = props;
  return (
    <div className='app'>
      <Dashboard />

      {user.loggedIn ? <Redirect to='home/dashboard' /> : <Redirect to='/home/login' />}
      {features.loginToast ? <Login /> : null}
      {features.signUpToast ? <SignUp /> : null}
      {features.trackDataLoading ? <Loading /> : null}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(App);
