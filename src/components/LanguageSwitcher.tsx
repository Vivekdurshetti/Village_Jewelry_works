import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract current lang from URL, fallback to context
  const pathMatch = location.pathname.match(/^\/([a-z]{2})(\/|$)/);
  const currentLangFromUrl = (pathMatch && pathMatch[1]) || language;

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);

    // Replace the language part of the URL
    let newPath = location.pathname.replace(/^\/([a-z]{2})(\/|$)/, `/${langCode}$2`);
    // If there's no lang prefix, add one
    if (!/^\/[a-z]{2}(\/|$)/.test(location.pathname)) {
      newPath = `/${langCode}${location.pathname}`;
    }
    navigate(newPath + location.search, { replace: true });
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLangFromUrl);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-black-800 hover:bg-black-700 transition-colors text-white border border-gold-500/20"
      >
        <Globe className="w-4 h-4 text-gold-500" />
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-black-800 rounded-lg shadow-xl border border-gold-500/20 z-50">
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-black-700 transition-colors ${
                  currentLangFromUrl === lang.code ? 'bg-gold-500/10 text-gold-500' : 'text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;