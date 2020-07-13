import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Login from '../login/Login';

const Main = (props) => {
  return (
    <div className='main center-items slide-from-right'>
      <Header />
      <div className='middle center-items slide-from-right'>
        <Title text='Create an AWESOME land-page for your new release!' classes='bold-text' />
      </div>

      {props.features.loginToast ? <Login /> : null}

      <Footer />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Main);
