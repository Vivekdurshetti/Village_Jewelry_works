import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  delay: number;
}> = ({ icon, title, content, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`flex items-start transition-all duration-700 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-white font-medium mb-1">{title}</h3>
        <div className="text-white/70">{content}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  
  const { ref, inView } = useInView({ threshold: 0.1 });

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
        'nslwnC_o_V0pC5m3d' // Replace with your EmailJS public key
      );
      // ---- ADD THIS BLOCK FOR GTM FORM TRACKING ----
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
        formType: 'contact', // Change if you want to distinguish forms
        formData: { ...formData }
      });
      // ---- END GTM BLOCK ----

      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Beside RCM shop, Basar Village, Nirmal District, Telangana State"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91-9100432526"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: <a href="mailto:8247394051vivek@gmail.com\" className="hover:text-gold-500 transition-colors">8247394051vivek@gmail.com</a>
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      content: "Mon–Sat: 10 AM–6 PM | Sun: Closed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black-800 to-black-900">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Get in <span className="text-gold-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg">
            Have questions or want to schedule a consultation? Reach out to us!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="space-y-8 mb-8">
              {contactInfo.map((item, index) => (
                <ContactInfo
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  delay={index * 150}
                />
              ))}
            </div>
            
            <div className="mt-12">
              <div className="p-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-lg">
                <div className="bg-black-800 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-bold text-white mb-2">Get a Free Consultation</h3>
                  <p className="text-white/70 mb-0">
                    Complete our online form or call us to book a one-on-one design appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form ref={form} onSubmit={handleSubmit} className="bg-black-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif font-bold text-white mb-6">Send us a Message</h3>
              
              <div className="mb-6">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              
              <div className="mb-6">
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
    </section>
  );
};

export default Contact;