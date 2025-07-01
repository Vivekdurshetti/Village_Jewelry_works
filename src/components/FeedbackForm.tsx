import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { useLanguage } from '../contexts/LanguageContext';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message || !rating) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('feedback')
        .insert([{ name, message, rating }]);

      if (error) throw error;

      toast.success('Thank you for your feedback!');
      setName('');
      setMessage('');
      setRating(0);
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black-800 p-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-xl font-serif font-bold text-white mb-6">{t('testimonials.shareTitle')}</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-white/80 mb-2">{t('contact.name')}</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-black-700 border border-black-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
          placeholder={t('contact.namePlaceholder')}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-white/80 mb-2">{t('contact.message')}</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 bg-black-700 border border-black-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white resize-none h-24"
          placeholder="Share your experience..."
          required
        />
      </div>

      {/* Emoji Rating Section */}
      <div className="mb-6">
        <label className="block text-white/80 mb-2">{t('common.rating')}</label>
        <div className="flex items-center justify-between gap-2">
          {[
            { value: 5, emoji: "😁", label: t('common.excellent') },
            { value: 4, emoji: "🙂", label: t('common.good') },
            { value: 3, emoji: "😐", label: t('common.average') },
            { value: 2, emoji: "😕", label: t('common.poor') },
            { value: 1, emoji: "😨", label: t('common.worst') },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setRating(item.value)}
              className={`flex flex-col items-center focus:outline-none 
                ${rating === item.value ? "scale-110" : "opacity-60 hover:opacity-100"}
                transition-transform`}
              aria-label={item.label}
            >
              <span className="text-4xl">{item.emoji}</span>
              <span className={`mt-2 text-xs ${rating === item.value ? "text-gold-500 font-bold" : "text-white/60"}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
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
        {isSubmitting ? t('common.submitting') : t('common.submitFeedback')}
      </button>
    </form>
  );
};

export default FeedbackForm;