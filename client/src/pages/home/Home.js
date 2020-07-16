import React from 'react';
import { connect } from 'react-redux';
import Title from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import SignUp from '../sign-up/SignUp';

const Home = (props) => {
  const { features } = props;
  return (
    <div className='home center-items'>
      <Header />

      <div className='middle center-items'>
        <Title
          text='Create an AWESOME land-page for your new release!'
          classes='bold-text main-page-title slide-from-right'
        />
      </div>

      <Footer />

      {features.loginToast ? <Login /> : null}
      {features.signUpToast ? <SignUp /> : null}
    </div>
  );
};

const mapStateToProps = (state = {}) => state;

export default connect(mapStateToProps)(Home);
