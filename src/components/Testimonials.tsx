import React from 'react';
import { useInView } from '../hooks/useInView';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import { Toaster } from 'react-hot-toast';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-black-900">
      <Toaster position="top-right" />
      <div 
        ref={ref}
        className="container mx-auto px-4 md:px-6"
      >
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            {t('testimonials.title')} <span className="text-gold-500">{t('testimonials.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Latest Feedback */}
            <div className="order-2 lg:order-1">
              <FeedbackList />
            </div>
            
            {/* Right Side - Share Your Experience */}
            <div className="order-1 lg:order-2">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;