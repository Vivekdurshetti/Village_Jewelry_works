import React, { useState, useRef } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      
      await emailjs.sendForm(
        'service_yvvce2q',
        'template_d72x8mf',
        form.current,
        'nslwnC_o_V0pC5m3d'
      );

      // GTM form tracking
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
        formType: 'contact_us',
        formData: { ...formData }
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get in <span className="text-gold-500">Touch</span>
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
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Get In Touch</h2>
            <div className="mb-8 space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <div className="text-white/70">
                    <a
                      href="https://maps.app.goo.gl/FhBNtvxDxpXSWpLn8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold-500 transition-colors"
                    >
                      Beside RCM shop, Basar Village,<br />
                      Nirmal District, Telangana State
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
                    <Phone className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <div className="text-white/70">
                    <a
                      href="tel:+919100432526"
                      className="hover:text-gold-500 transition-colors"
                    >
                      +91 91004 32526
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <div className="text-white/70">
                    <a
                      href="mailto:8247394051vivek@gmail.com"
                      className="hover:text-gold-500 transition-colors"
                    >
                      8247394051vivek@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-green-500">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                  <div className="text-white/70">
                    <a
                      href="https://wa.me/919100432526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors"
                    >
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Business Hours</h3>
                  <div className="text-white/70">Mon–Sat: 10 AM–6 PM | Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-white mb-6">Send us a Message</h3>
            
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black-700 border border-black-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-700 border border-black-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-700 border border-black-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                  placeholder="Your phone (optional)"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black-700 border border-black-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-gold-500 text-black-900 font-medium rounded-lg transition-colors ${
                isSubmitting 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:bg-gold-600'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;