import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-black-900 to-black-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black-900 bg-opacity-80">
          <img
            src="https://raw.githubusercontent.com/Vivekdurshetti/Village_Jewelry_works/refs/heads/main/src/media/header-block.jpg"
            alt="Contact Village Jewelry Works"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/90 to-transparent flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              Contact <span className="text-gold-500">Us</span>
            </h1>
            <p className="text-lg text-white/90 drop-shadow-md">
              We would love to hear from you. Reach out to us for any queries, orders, or feedback.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Map Section */}
        <div className="flex flex-col items-center bg-black-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">Our Location</h2>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg mb-4">
            <iframe
              title="Village Jewelry Works Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.1781195364716!2d78.47607447486422!3d17.39399230205056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9797e0c1a22b%3A0x1c1c62d6b7b5c7aa!2sCharminar%2C%20Hyderabad%2C%20Telangana%20500002%2C%20India!5e0!3m2!1sen!2sin!4v1717680000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-white/80 text-center">
            Find us at our store in Hyderabad, Telangana.<br />
            Open: Mon-Sat, 10:00 AM - 8:00 PM
          </p>
        </div>

        {/* Contact Details & Form */}
        <div className="bg-black-800 p-8 rounded-lg shadow-xl flex flex-col justify-between">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">Get In Touch</h2>
          <div className="mb-6 space-y-4">
            {/* Address */}
            <div className="flex items-center text-white/90">
              <MapPin className="w-6 h-6 text-gold-500 mr-3" />
              <span>
                #123 Main Bazaar, Near Charminar,<br />
                Hyderabad, Telangana, 500002<br />
                India
              </span>
            </div>
            {/* Phone */}
            <div className="flex items-center text-white/90">
              <Phone className="w-6 h-6 text-gold-500 mr-3" />
              <a href="tel:+919100432526" className="hover:text-gold-500 transition-colors">
                +91 91004 32526
              </a>
            </div>
            {/* WhatsApp */}
            <div className="flex items-center text-white/90">
              <MessageCircle className="w-6 h-6 text-green-500 mr-3" />
              <a
                href="https://wa.me/919100432526"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
            {/* Email */}
            <div className="flex items-center text-white/90">
              <svg
                className="w-6 h-6 text-blue-400 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m0 0l4 4 4-4" />
              </svg>
              <a href="mailto:villagejewelryworks@gmail.com" className="hover:text-blue-300 transition-colors">
                villagejewelryworks@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-4"
            name="contact"
            method="POST"
            data-netlify="true"
            action="#"
            autoComplete="off"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label className="block text-white/80 mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded bg-black-700 text-white border border-gold-500/30 focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded bg-black-700 text-white border border-gold-500/30 focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-white/80 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded bg-black-700 text-white border border-gold-500/30 focus:border-gold-500 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gold-500 text-black-900 font-medium rounded-lg hover:bg-gold-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;