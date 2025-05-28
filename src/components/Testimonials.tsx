import React from 'react';
import { useInView } from '../hooks/useInView';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import { Toaster } from 'react-hot-toast';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

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
            What Our <span className="text-gold-500">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg">
            Read what our valued customers have to say about their experience with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <FeedbackForm />
          <FeedbackList />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;