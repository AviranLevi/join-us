import React from 'react';
import './app.scss';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
