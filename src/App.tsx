import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Add this helper component INSIDE App.tsx file
function GoogleAnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    // For Google Tag Manager (GTM)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: location.pathname + location.search,
    });

    // For gtag.js (if you use it)
    // window.gtag && window.gtag('event', 'page_view', {
    //   page_path: location.pathname + location.search,
    // });
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <GoogleAnalyticsTracker />
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