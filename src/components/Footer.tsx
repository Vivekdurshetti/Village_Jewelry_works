import React from 'react';
import { GemIcon, Facebook, Instagram, MessageCircle, MapPin, Phone, Mail} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-6">
              <GemIcon className="text-gold-500 h-8 w-8" />
              <span className="ml-2 text-xl font-serif font-semibold text-white">
                Basar <span className="text-gold-500">Jewellery</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/villagejewellery" className="w-10 h-10 rounded-full bg-black-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/villagejewellery" className="w-10 h-10 rounded-full bg-black-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/9100432526" className="w-10 h-10 rounded-full bg-black-800 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black-900 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {['home', 'about', 'services', 'expertise', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-white/70 hover:text-gold-500 transition-colors capitalize"
                  >
                    {t(`nav.${item}`) || item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">{t('contact.contact')}</h4>
            <address className="not-italic text-white/70 space-y-4">
              <p className="flex items-start mb-3">
                <MapPin className="w-5 h-5 mr-2 text-gold-500 mt-1" />
                <a
                  href="https://maps.app.goo.gl/FhBNtvxDxpXSWpLn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-500 transition-colors"
                >
                  Beside RCM shop, Basar Village,
                  <br />
                  Nirmal District, Telangana State
                </a>
              </p>
              <p className="flex items-center mb-3">
                <Phone className="w-5 h-5 mr-2 text-gold-500" />
                <a
                  href="tel:+919100432526"
                  className="hover:text-gold-500 transition-colors"
                >
                  +91-9100432526
                </a>
              </p>
              <p className="flex items-center mb-3">
                <Mail className="w-5 h-5 mr-2 text-gold-500" />
                <a
                  href="mailto: 8247394051vivek@gmail.com"
                  className="hover:text-gold-500 transition-colors"
                >
                  8247394051vivek@gmail.com
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">{t('footer.businessHours')}</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex justify-between">
                <span>{t('footer.monday')}</span>
                <span>{t('footer.mondayHours')}</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.saturday')}</span>
                <span>{t('footer.saturdayHours')}</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.sunday')}</span>
                <span>{t('footer.sundayHours')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 text-sm hover:text-gold-500 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-gold-500 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;