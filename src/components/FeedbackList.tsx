import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { format } from 'date-fns';
import { supabase, Feedback } from '../lib/supabase';
import { useInView } from '../hooks/useInView';

const FeedbackCard: React.FC<{ feedback: Feedback; delay: number }> = ({ feedback, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-black-800 rounded-lg p-6 shadow-lg transition-all duration-700 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < feedback.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-400'
            }`}
          />
        ))}
      </div>
      
      <p className="text-white/90 text-lg italic mb-6">"{feedback.message}"</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black-900 font-serif font-bold">
            {feedback.name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="text-white font-medium">{feedback.name}</p>
            <p className="text-white/60 text-sm">
              {format(new Date(feedback.created_at), 'MMMM d, yyyy')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    // Fetch initial feedbacks
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching feedback:', error);
        return;
      }

      setFeedbacks(data || []);
    };

    fetchFeedbacks();

    // Subscribe to new feedbacks
    const subscription = supabase
      .channel('feedback_channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'feedback' },
        (payload) => {
          setFeedbacks((current) => [payload.new as Feedback, ...current]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {feedbacks.map((feedback, index) => (
        <FeedbackCard
          key={feedback.id}
          feedback={feedback}
          delay={index * 100}
        />
      ))}
    </div>
  );
};

export default FeedbackList;