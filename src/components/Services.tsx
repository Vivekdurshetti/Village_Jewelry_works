import React from 'react';
import { useInView } from '../hooks/useInView';
import { Palette, Settings, BellRing as Ring } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string[];
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`bg-black-800 rounded-lg overflow-hidden shadow-xl transition-all duration-700 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/20 text-gold-500 mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gold-500 mr-2">•</span>
              <span className="text-white/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const services = [
    {
      title: "Custom Gold & Silver Ornaments",
      icon: <Palette className="w-8 h-8" />,
      description: [
        "Bespoke necklaces, bracelets, pendants and more",
        "Wide range of karat options and finishes",
        "CAD-backed design previews and gemstone setting"
      ]
    },
    {
      title: "Repair & Restoration",
      icon: <Settings className="w-8 h-8" />,
      description: [
        "Ring resizing, clasp replacement, soldering",
        "Polishing, rhodium plating, and stone re-setting",
        "Fast turnaround with quality guarantees"
      ]
    },
    {
      title: "Ear & Hand Ring Making",
      icon: <Ring className="w-8 h-8" />,
      description: [
        "Precision crafting of earrings and hand rings",
        "Intricate filigree, traditional temple work, modern styles",
        "Personalized fitting and design consultation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black-900">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Our <span className="text-gold-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg">
            Discover our range of premium jewelry services, crafted with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;