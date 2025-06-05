import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Star, Truck, RefreshCw, Ruler, MessageCircle, Phone } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

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
    <div className="pt-20">
      {/* SEO Meta Tags */}
      <head>
        <title>Buy Gold Rings Online – Elegant, Pure & Handcrafted | Basar Jewellery</title>
        <meta
          name="description"
          content="Explore premium handcrafted gold rings online. Pure 22K/24K BIS Hallmarked jewelry with free shipping & easy returns. Shop now!"
        />
      </head>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/header-block.jpg"
          alt="Luxury Gold Rings Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Elegant Gold Rings for Every Occasion
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Timeless Designs, Artisan Craftsmanship, and Purity You Can Trust
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Product Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div>
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

          {/* Product Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Handcrafted Gold Ring Collection
            </h2>
            <p className="text-white/90 text-lg mb-8">
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

            {/* CTA Buttons */}
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
                  className="flex-1 py-3 bg-black-800 text-white font-medium rounded-lg hover:bg-black-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Trusted for Generations in Gold Craftsmanship
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black-800 p-6 rounded-lg text-center">
              <Truck className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Free Delivery</h4>
              <p className="text-white/70">Secure shipping nationwide</p>
            </div>
            <div className="bg-black-800 p-6 rounded-lg text-center">
              <Star className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Lifetime Polish</h4>
              <p className="text-white/70">Free polishing service</p>
            </div>
            <div className="bg-black-800 p-6 rounded-lg text-center">
              <RefreshCw className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Easy Returns</h4>
              <p className="text-white/70">15-day return policy</p>
            </div>
            <div className="bg-black-800 p-6 rounded-lg text-center">
              <Ruler className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-2">Customization</h4>
              <p className="text-white/70">Personalized designs</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Customer Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white/90 italic mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black-900 font-serif font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-3">
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-white/60 text-sm">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldRings;
