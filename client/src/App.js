import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import './app.scss';

import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';

const App = (props) => {
  const { user, features } = props;
  return (
    <Router>
      {user.loggedIn ? <Redirect to='/dashboard' /> : <Redirect to='/' />}

      <div className='app'>
        <Dashboard />
        {features.loginToast ? <Login /> : null}
        {features.signUpToast ? <SignUp /> : null}
      </div>
    </Router>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(App);
