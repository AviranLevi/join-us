import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Dashboard from './pages/dashboard/Dashboard';
import UserLandPage from './pages/user-land-page/UserLandPage';
import './app.scss';

const App = (props) => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' exact component={Main} />
        {/* <Route path='/:id' exact render={({ match }) => <UserLandPage match={match} />} /> */}
        {/* {props.project.audioPreview ? <UserLandPage /> : <Dashboard />} */}
      </div>
    </Router>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(App);
