import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-black-900 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      ></div>

      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
          {t('hero.title')} <span className="text-gold-500">{t('hero.location')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          {t('hero.subtitle')}
        </p>
        
        <button 
          onClick={scrollToServices}
          className="px-8 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
        >
          {t('hero.cta')}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold-500" />
      </div>
    </section>
  );
};

export default Hero;