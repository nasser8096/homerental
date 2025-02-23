import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Testimonial from './components/Testimonial';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonial/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
