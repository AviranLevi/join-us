import React from 'react';
import { connect } from 'react-redux';
import RouterConfig from './pages/RouterConfig';
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <RouterConfig />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(App);
