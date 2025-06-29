import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GemIcon, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
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
      title: 'Rings',
      items: [
        { name: 'Gold Rings', path: '/gold-rings' },
        { name: 'Wedding Rings', path: '/wedding-rings' },
        { name: 'Engagement Rings', path: '/engagement-rings' },
      ]
    },
    {
      title: 'Necklaces',
      items: [
        { name: 'Gold Chains', path: '/gold-chains' },
        { name: 'Mangalsutra', path: '/mangalsutra' },
        { name: 'Pendant Sets', path: '/pendant-sets' },
      ]
    },
    {
      title: 'Earrings',
      items: [
        { name: 'Gold Studs', path: '/gold-studs' },
        { name: 'Jhumkas', path: '/jhumkas' },
        { name: 'Chandbali', path: '/chandbali' },
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
          <Link to="/" className="flex items-center">
            <GemIcon className="text-gold-500 h-8 w-8" />
            <span className="ml-2 text-xl md:text-2xl font-serif font-semibold text-white">
              Basar <span className="text-gold-500">Jewellery</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gold-500 transition-colors font-medium">
              Home
            </Link>
            
            {/* Products Mega Menu Trigger */}
            <div className="relative group">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-white hover:text-gold-500 transition-colors font-medium"
              >
                Products
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
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gold-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-gold-500 transition-colors font-medium"
            >
              Testimonials
            </button>
            <Link
              to="/ContactUs"
              className="text-white hover:text-gold-500 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black-900 absolute top-full left-0 w-full animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gold-500 transition-colors font-medium text-lg block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              
              {/* Mobile Products Menu */}
              <li>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-gold-500 transition-colors font-medium text-lg py-2"
                >
                  Products
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
                    {item}
                  </button>
                </li>
              ))}
              
              <li>
                <Link
                  to="/ContactUs"
                  className="text-white hover:text-gold-500 transition-colors font-medium text-lg block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
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