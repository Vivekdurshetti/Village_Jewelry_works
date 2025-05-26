import React, { useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black-800 to-black-900">
      <div 
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Your Local Artisans of <span className="text-gold-500">Precious Metalwork</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <img 
                src="https://www.freepik.com/free-photo/jeweler-s-hands-making-jewellery_82550794.htm#fromView=search&page=1&position=30&uuid=dfd3f890-46a3-4c86-b7f7-877cedf1d874&query=gold+works?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jewelry craftsman working on a piece" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center">
                <p className="font-serif text-black-900 font-bold">20+ Years</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Located in the heart of Blossom Village, we are a family-run jewelry atelier specializing in exquisite gold and silver pieces. With over 20 years of combined experience, our craftsmen blend traditional techniques with contemporary design—ensuring every ornament tells your unique story.
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              From elegant bridal sets to everyday keepsakes, quality and trust are the cornerstones of our business. Each piece is meticulously handcrafted with attention to detail that honors both the materials and the artisanal tradition.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black-800 border border-gold-500/30 px-6 py-4 rounded-lg">
                <h3 className="text-gold-500 font-serif text-xl mb-1">Quality Materials</h3>
                <p className="text-white/70">Premium gold and silver sourced ethically</p>
              </div>
              <div className="bg-black-800 border border-gold-500/30 px-6 py-4 rounded-lg">
                <h3 className="text-gold-500 font-serif text-xl mb-1">Family Legacy</h3>
                <p className="text-white/70">Three generations of jewelry artisans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;