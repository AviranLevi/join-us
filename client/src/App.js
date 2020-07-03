import React from 'react';
import './app.scss';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />

      {props.features.loginToast ? <Login /> : null}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(App);
