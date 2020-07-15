import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import UserLandPage from './pages/user-land-page/UserLandPage';
import './app.scss';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Home} />
        <Route path='/:id' component={UserLandPage} />
      </div>
    </Router>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(App);
