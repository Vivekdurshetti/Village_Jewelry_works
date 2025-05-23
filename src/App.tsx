import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-black-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;