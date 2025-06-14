import React from 'react';
import { useInView } from '../hooks/useInView';
import { Check } from 'lucide-react';

const ExpertiseItem: React.FC<{
  title: string;
  description: string;
  delay: number;
}> = ({ title, description, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`flex items-start transition-all duration-700 transform ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 mr-4">
        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
          <Check className="w-5 h-5 text-black-900" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const Expertise: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const expertiseItems = [
    {
      title: "Detail-Oriented Crafting",
      description: "Every curve, facet, and engraving is perfected by hand with meticulous attention to detail."
    },
    {
      title: "Premium Materials",
      description: "We source hallmarked gold and sterling silver for lasting beauty and value retention."
    },
    {
      title: "Design Collaboration",
      description: "Work one-on-one with our artisans to bring your vision to life through personalized design sessions."
    },
    {
      title: "Community Roots",
      description: "Deeply committed to serving Blossom Village and surrounding areas with integrity and trust."
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-black-900 to-black-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div 
            ref={ref}
            className={`lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Master Artisans at <span className="text-gold-500">Your Service</span>
            </h2>
            <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            <p className="text-white/90 text-lg mb-8">
              With decades of experience and a passion for perfection, our team brings traditional craftsmanship into the modern era, creating jewelry that becomes family heirlooms.
            </p>
            
            <div className="space-y-8">
              {expertiseItems.map((item, index) => (
                <ExpertiseItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://i.pinimg.com/736x/31/30/09/313009240956ed40d7df7ac9259ca76b.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Gold and silver rings from Basar Jewellery" 
              className="rounded-lg shadow-lg h-64 object-cover object-center transform transition-transform hover:scale-105"
            />
            <img 
              src="https://i.pinimg.com/736x/b2/8d/18/b28d18216cf09378a7ee1e6e5c6cf3c3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Gold and silver chains from Basar Jewellery" 
              className="rounded-lg shadow-lg h-64 object-cover object-center transform transition-transform hover:scale-105 mt-8"
            />
            <img 
              src="https://i.pinimg.com/736x/50/26/91/502691410c970509f40df1665ae2c103.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Gold Necklace from Basar Jewellery" 
              className="rounded-lg shadow-lg h-64 object-cover object-center transform transition-transform hover:scale-105"
            />
            <img 
              src="https://i.pinimg.com/736x/ab/14/19/ab1419de80e1ba19f5240db45ed32da7.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Ear rings from Basar Jewellery" 
              className="rounded-lg shadow-lg h-64 object-cover object-center transform transition-transform hover:scale-105 mt-8"
            />
            <img 
  src="https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/Screenshot%202025-05-26%20141508.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Ear rings from Basar Jewellery" 
              className="rounded-lg shadow-lg h-64 object-cover object-center transform transition-transform hover:scale-105 mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;