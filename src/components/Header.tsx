import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GemIcon, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { t, language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== `/${language}`) {
      window.location.href = `/${language}#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsProductsOpen(false);
    }
  };

  const productCategories = [
    {
      title: t('nav.rings'),
      items: [
        { name: t('nav.goldRings'), path: `/${language}/gold-rings` },
        { name: t('nav.weddingRings'), path: `/${language}/wedding-rings` },
        { name: t('nav.engagementRings'), path: `/${language}/engagement-rings` },
      ]
    },
    {
      title: t('nav.necklaces'),
      items: [
        { name: t('nav.goldChains'), path: `/${language}/gold-chains` },
        { name: t('nav.mangalsutra'), path: `/${language}/mangalsutra` },
        { name: t('nav.pendantSets'), path: `/${language}/pendant-sets` },
      ]
    },
    {
      title: t('nav.earrings'),
      items: [
        { name: t('nav.goldStuds'), path: `/${language}/gold-studs` },
        { name: t('nav.jhumkas'), path: `/${language}/jhumkas` },
        { name: t('nav.chandbali'), path: `/${language}/chandbali` },
      ]
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to={`/${language}`} className="flex items-center">
            <GemIcon className="text-gold-500 h-8 w-8" />
            <span className="ml-2 text-xl md:text-2xl font-serif font-semibold text-white">
              Basar <span className="text-gold-500">Jewellery</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to={`/${language}`} className="text-white hover:text-gold-500 transition-colors font-medium">
              {t('nav.home')}
            </Link>
            
            {/* Products Mega Menu Trigger */}
            <div className="relative group">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-white hover:text-gold-500 transition-colors font-medium"
              >
                {t('nav.products')}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-[600px] bg-black-900 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-x-1/4">
                <div className="grid grid-cols-3 gap-8 p-8">
                  {productCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-gold-500 font-serif font-bold mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={item.path}
                              className="text-white/80 hover:text-gold-500 transition-colors block py-1"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold-500 transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gold-500 transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-gold-500 transition-colors font-medium"
            >
              {t('nav.testimonials')}
            </button>
            <Link
              to={`/${language}/ContactUs`}
              className="text-white hover:text-gold-500 transition-colors font-medium"
            >
              {t('nav.contact')}
            </Link>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black-900 absolute top-full left-0 w-full animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to={`/${language}`}
                  className="text-white hover:text-gold-500 transition-colors font-medium text-lg block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
              </li>
              
              {/* Mobile Products Menu */}
              <li>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-gold-500 transition-colors font-medium text-lg py-2"
                >
                  {t('nav.products')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {productCategories.map((category, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-gold-500 font-serif font-bold mb-2">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={item.path}
                                className="text-white/80 hover:text-gold-500 transition-colors block py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              
              {['about', 'services', 'testimonials'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-white hover:text-gold-500 transition-colors font-medium text-lg w-full text-left py-2 capitalize"
                  >
                    {t(`nav.${item}`)}
                  </button>
                </li>
              ))}
              
              <li>
                <Link
                  to={`/${language}/ContactUs`}
                  className="text-white hover:text-gold-500 transition-colors font-medium text-lg block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;