import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
};

export default App;
