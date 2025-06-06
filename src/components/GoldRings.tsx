import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Star, Truck, RefreshCw, Ruler, MessageCircle, Phone } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import FeedbackList from './FeedbackList';


const ringImages = [
  {
    url: 'https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/Wedding%20rings%20set%20for%20couple_%20palm%20leaf%20satin%20wedding%20band%20for%20him%2C%20Palmira%20ring%20set%20with%20natural%20green%20sapphire%20for%20her%20-%2014K%20rose%20gold%20_%20Lab%20grown%20diamonds.jpg',
    alt: '22K Gold Floral Ring - Traditional Design',
  },
  {
    url: 'https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/Intaglio%20Rings%2C%20Crystal%20Ring%2C%20Red%20Stone%20Ring%2C%20Ancient%20Ring%2C%20Carved%20Rings%2C%20art%20deco%20jewelry%2C%201920s%20jewelry%2C%20antique%20jewelry%2C%20vintage%20jewelry.jpg',
    alt: 'Gold Engagement Ring for Women - Modern Collection',
  },
  {
    url: 'https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/Gold%20ring%2C%20decorated%20with%20diamonds%2C%20lion%20head_.jpg',
    alt: '24K Gold Wedding Ring Set - Luxury Collection',
  },
  {
    url: "https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/14k%20Yellow%20Gold%20Navaratna%20gemstone%20Ring%20-%2014k%20White%20Gold%20Wedding%20Band%20Ring%20-%20Natural%20Ruby%20Emerlad%20Gemstone%20Women%20Men's%20Ring%20-Minimalist%20ring.jpg",
    alt: 'Traditional Gold Ring with Diamond - Premium Collection',
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "Absolutely stunning craftsmanship! The ring exceeded my expectations in every way.",
    date: "March 2024"
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Perfect wedding ring with excellent finish. The customization service was outstanding.",
    date: "February 2024"
  }
];

const GoldRings: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="pt-20 bg-gradient-to-b from-black-900 to-black-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black-900 bg-opacity-80">
          <img
            src="https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/header-block.jpg"
            alt="Luxury Gold Rings Collection"
            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/90 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                Elegant Gold Rings for Every <span className="text-gold-500">Occasion</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Timeless Designs, Artisan Craftsmanship, and Purity You Can Trust
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Product Gallery and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-black-800 p-6 rounded-lg shadow-xl">
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation
              pagination={{ clickable: true }}
              zoom={true}
              className="rounded-lg overflow-hidden"
            >
              {ringImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="bg-black-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Handcrafted Gold Ring Collection
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Experience the perfect blend of traditional craftsmanship and contemporary design with our exclusive gold ring collection. Each piece is meticulously handcrafted by our master artisans using the finest 22K and 24K gold, ensuring unmatched quality and timeless beauty.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Available in 22K & 24K Purity
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Handcrafted by Master Artisans
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Custom Sizes & Engraving Available
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                BIS Hallmarked Jewelry
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full py-4 bg-gold-500 text-black-900 font-medium rounded-lg hover:bg-gold-600 transition-colors">
                Shop Now
              </button>
              <button className="w-full py-4 border-2 border-gold-500 text-gold-500 font-medium rounded-lg hover:bg-gold-500 hover:text-black-900 transition-colors">
                Request Custom Ring
              </button>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/9100432526"
                  className="flex-1 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919100432526"
                  className="flex-1 py-3 bg-black-700 text-white font-medium rounded-lg hover:bg-black-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Trusted for Generations in Gold Craftsmanship
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <Truck className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Free Delivery</h4>
              <p className="text-white/70">Secure shipping nationwide</p>
            </div>
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <Star className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Lifetime Polish</h4>
              <p className="text-white/70">Free polishing service</p>
            </div>
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <RefreshCw className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Easy Returns</h4>
              <p className="text-white/70">15-day return policy</p>
            </div>
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <Ruler className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Customization</h4>
              <p className="text-white/70">Personalized designs</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="py-20 bg-black-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                What Our <span className="text-gold-500">Clients Say</span>
              </h2>
              <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
              <p className="text-white/80 text-lg">
                Read what our valued customers have to say about their experience with us
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <FeedbackList />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GoldRings;