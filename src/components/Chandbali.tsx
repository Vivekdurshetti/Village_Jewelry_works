import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Star, Truck, RefreshCw, Ruler, MessageCircle, Phone, Moon } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import FeedbackList from './FeedbackList';

const chandbaliImages = [
  {
    url: 'https://images.pexels.com/photos/1232959/pexels-photo-1232959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Traditional Chandbali - Classic Crescent Design',
  },
  {
    url: 'https://images.pexels.com/photos/1232960/pexels-photo-1232960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Kundan Chandbali - Royal Collection',
  },
  {
    url: 'https://images.pexels.com/photos/1232961/pexels-photo-1232961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Pearl Drop Chandbali - Elegant Style',
  },
  {
    url: 'https://images.pexels.com/photos/1232962/pexels-photo-1232962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Antique Chandbali - Heritage Collection',
  },
];

const Chandbali: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="pt-20 bg-gradient-to-b from-black-900 to-black-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black-900 bg-opacity-80">
          <img
            src="https://images.pexels.com/photos/1232959/pexels-photo-1232959.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Chandbali Collection"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/90 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                Exquisite Chandbali for <span className="text-gold-500">Royal Elegance</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Crescent Moon Beauty in Traditional Design
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
              {chandbaliImages.map((image, index) => (
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
              Chandbali Collection
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Step into royal elegance with our stunning chandbali collection. These crescent-shaped earrings are a symbol of traditional Indian jewelry artistry, featuring intricate designs inspired by the moon. Perfect for weddings, festivals, and special celebrations, each chandbali is a masterpiece of craftsmanship.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white/90">
                <Moon className="w-5 h-5 text-gold-500 mr-3" />
                Classic Crescent Moon Design
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                22K Gold with Kundan Work
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Pearl & Gemstone Drops
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Meenakari & Antique Finishes
              </div>
              <div className="flex items-center text-white/90">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                Bridal & Festive Collections
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full py-4 bg-gold-500 text-black-900 font-medium rounded-lg hover:bg-gold-600 transition-colors">
                View Chandbali Collection
              </button>
              <button className="w-full py-4 border-2 border-gold-500 text-gold-500 font-medium rounded-lg hover:bg-gold-500 hover:text-black-900 transition-colors">
                Custom Chandbali Design
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
            Royal Craftsmanship Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <Moon className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Crescent Design</h4>
              <p className="text-white/70">Traditional moon shape</p>
            </div>
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <Star className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Royal Quality</h4>
              <p className="text-white/70">Premium craftsmanship</p>
            </div>
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <Ruler className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Perfect Balance</h4>
              <p className="text-white/70">Comfortable wear</p>
            </div>
            <div className="bg-black-800/50 p-6 rounded-lg text-center backdrop-blur-sm border border-gold-500/10">
              <RefreshCw className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Royal Care</h4>
              <p className="text-white/70">Lifetime service</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="py-20 bg-black-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Royal <span className="text-gold-500">Testimonials</span>
              </h2>
              <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
              <p className="text-white/80 text-lg">
                Experience the royal elegance through our customers' stories
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

export default Chandbali;