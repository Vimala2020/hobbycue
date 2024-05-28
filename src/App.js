import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AddYourOwn from './components/AddYourOwn';
import Testimonials from './components/Testimonials';
import Hobby from './components/Hobby'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <AddYourOwn />
      <Testimonials />
      <Hobby/>
      <Footer />
    </div>
  );
};

export default App;
