import React from 'react';
import Title from '../../components/title/Title';

const Home = () => {
  return (
    <div className='home center-items'>
      <div className='middle center-items'>
        <Title
          text='Create an AWESOME land-page for your new release!'
          classes='bold-text main-page-title slide-from-right'
        />
      </div>
    </div>
  );
};

export default Home;
