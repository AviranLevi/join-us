import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './pages/home/Home';
import UserLandPage from './pages/user-land-page/UserLandPage';
import './app.scss';
import Dashboard from './pages/dashboard/Dashboard';

const App = (props) => {
  const { user } = props;
  return (
    <Router>
      <div className='app'>
        {user.loggedIn ? <Redirect to='/dashboard' /> : <Redirect to='/' />}
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/project/:id' component={UserLandPage} />
      </div>
    </Router>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(App);
