import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isActive: boolean;
}> = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`bg-black-800 rounded-lg p-8 shadow-lg transition-all duration-500 transform ${
        isActive 
          ? 'opacity-100 scale-100 z-10' 
          : 'opacity-0 scale-95 absolute top-0 left-0 right-0'
      }`}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-400'}`} 
          />
        ))}
      </div>
      <p className="text-white/90 text-lg italic mb-6">"{testimonial.text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-black-900 font-serif font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="text-white font-medium">{testimonial.name}</p>
          <p className="text-white/60 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const testimonials: Testimonial[] = [
    {
      name: "Priya S.",
      location: "Meadowbrook",
      text: "I got my wedding earrings made here, and they're simply stunning! Exceptional service and very fair pricing.",
      rating: 5
    },
    {
      name: "Ramesh K.",
      location: "Blossom Village",
      text: "They resized my family heirloom ring and restored its sparkle like new. Highly recommended!",
      rating: 5
    },
    {
      name: "Anjali M.",
      location: "Sunnydale",
      text: "The custom necklace they designed for my anniversary exceeded all expectations. True artisans!",
      rating: 5
    }
  ];

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!inView) return;
    
    const timer = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [current, inView]);

  return (
    <section id="testimonials" className="py-20 bg-black-900">
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
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === current}
              />
            ))}
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-gold-500 w-6' : 'bg-gold-500/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 rounded-full bg-black-800 border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black-900 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 rounded-full bg-black-800 border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black-900 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;