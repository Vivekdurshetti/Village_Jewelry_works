import React from 'react';
import { useInView } from '../hooks/useInView';
import { ArrowRight, Sparkles, Heart, Crown, Link, Gem, Moon } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard: React.FC<{
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  link: string;
  delay: number;
}> = ({ title, description, image, icon, link, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`group relative bg-black-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-900/90 via-black-900/50 to-transparent"></div>
        
        {/* Icon */}
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center text-gold-500 border border-gold-500/30 transition-all duration-200 group-hover:bg-gold-500/30 group-hover:scale-110">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-500 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-white/80 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* CTA Button */}
        <RouterLink 
          to={link}
          className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black-900 font-medium rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg group"
        >
          <span>Know More</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </RouterLink>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
    </div>
  );
};

const Expertise: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const products = [
    {
      title: "Gold Rings",
      description: "Exquisite handcrafted gold rings in 22K & 24K purity. From traditional designs to modern styles, each ring is a masterpiece of artisan craftsmanship.",
      image: "https://images.pexels.com/photos/1232935/pexels-photo-1232935.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Sparkles className="w-6 h-6" />,
      link: "/gold-rings"
    },
    {
      title: "Wedding Rings",
      description: "Symbol of eternal love crafted with perfection. Matching his & hers sets with custom engraving and lifetime warranty for your special day.",
      image: "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Heart className="w-6 h-6" />,
      link: "/wedding-rings"
    },
    {
      title: "Engagement Rings",
      description: "Begin your forever with a ring as unique as your love. Featuring certified diamonds and custom designs for the perfect proposal.",
      image: "https://images.pexels.com/photos/1232935/pexels-photo-1232935.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Gem className="w-6 h-6" />,
      link: "/engagement-rings"
    },
    {
      title: "Gold Chains",
      description: "Timeless elegance in every link. Premium gold chains in various styles - rope, box, figaro & cable chains with BIS hallmarked quality.",
      image: "https://images.pexels.com/photos/1232939/pexels-photo-1232939.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Link className="w-6 h-6" />,
      link: "/gold-chains"
    },
    {
      title: "Mangalsutra",
      description: "Sacred symbol of marital bliss crafted with devotion. Traditional & modern designs in 22K & 24K gold with black beads and diamond settings.",
      image: "https://images.pexels.com/photos/1232943/pexels-photo-1232943.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Heart className="w-6 h-6" />,
      link: "/mangalsutra"
    },
    {
      title: "Pendant Sets",
      description: "Complete your look with matching elegance. Beautiful pendant and earring sets featuring temple, floral & modern designs with gemstone accents.",
      image: "https://images.pexels.com/photos/1232947/pexels-photo-1232947.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Gem className="w-6 h-6" />,
      link: "/pendant-sets"
    },
    {
      title: "Gold Studs",
      description: "Perfect for daily elegance. Comfortable gold stud earrings with diamond & gemstone accents, hypoallergenic materials and secure closures.",
      image: "https://images.pexels.com/photos/1232951/pexels-photo-1232951.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Sparkles className="w-6 h-6" />,
      link: "/gold-studs"
    },
    {
      title: "Jhumkas",
      description: "Celebrate heritage with every swing. Traditional jhumkas with temple designs, pearl & kundan accents, lightweight and comfortable for all occasions.",
      image: "https://images.pexels.com/photos/1232955/pexels-photo-1232955.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Crown className="w-6 h-6" />,
      link: "/jhumkas"
    },
    {
      title: "Chandbali",
      description: "Royal elegance in crescent moon beauty. Traditional chandbali earrings with intricate designs, kundan work and pearl drops for festive occasions.",
      image: "https://images.pexels.com/photos/1232959/pexels-photo-1232959.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: <Moon className="w-6 h-6" />,
      link: "/chandbali"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-black-900 to-black-800">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Our Exquisite <span className="text-gold-500">Collection</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-white/90 text-lg">
            Discover our complete range of handcrafted jewelry, each piece telling a unique story of tradition, elegance, and timeless beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              icon={product.icon}
              link={product.link}
              delay={index * 50}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-lg">
            <div className="bg-black-800 px-8 py-6 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-white/80 mb-4">
                We specialize in custom jewelry design. Let us create something unique just for you.
              </p>
              <RouterLink 
                to="/ContactUs"
                className="inline-flex items-center px-6 py-3 bg-gold-500 text-black-900 font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200"
              >
                Contact Us for Custom Design
                <ArrowRight className="w-4 h-4 ml-2" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;