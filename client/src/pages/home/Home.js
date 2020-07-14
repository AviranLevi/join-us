import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Title from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import SignUp from '../sign-up/SignUp';

const Home = (props) => {
  const { user } = props;
  return (
    <div className='home center-items slide-from-right'>
      <Header />

      <div className='middle center-items slide-from-right'>
        {user.loggedIn ? (
          <Dashboard />
        ) : (
          <Title text='Create an AWESOME land-page for your new release!' classes='bold-text main-page-title' />
        )}
      </div>

      {props.features.loginToast ? <Login /> : null}
      {props.features.signUpToast ? <SignUp /> : null}

      <Footer />
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Home);
