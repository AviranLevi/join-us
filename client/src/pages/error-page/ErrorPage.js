import React from 'react';
import Title from '../../components/title/Title';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page center-items fade-in '>
      <div className='center-items error-content'>
        <Title classes='error-title bold-text' text='404' />
        <Title classes='error-second-title' text='Page not found :(' />
      </div>

      <Link to='/' className='join-us-link' target='_blank'>
        Powered by JoinUS
      </Link>
    </div>
  );
};

export default ErrorPage;
