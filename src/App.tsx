import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoldRings from './components/GoldRings';
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <div className="font-sans text-black-800">
        <Header />
        <Routes>
          <Route path="/gold-rings" element={<GoldRings />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Services />
              <Expertise />
              <Testimonials />
              <Contact />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;