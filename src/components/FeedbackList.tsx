import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { supabase, Feedback } from '../lib/supabase';
import { useInView } from '../hooks/useInView';

const FeedbackCard: React.FC<{ feedback: Feedback; isLatest?: boolean }> = ({ feedback, isLatest }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-black-800 rounded-lg ${isLatest ? 'p-8' : 'p-6'} shadow-lg transition-all duration-700 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < feedback.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-400'}`}
          />
        ))}
      </div>
      
      <p className={`text-white/90 ${isLatest ? 'text-xl' : 'text-lg'} italic mb-6`}>"{feedback.message}"</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`${isLatest ? 'w-12 h-12' : 'w-10 h-10'} rounded-full bg-gold-500 flex items-center justify-center text-black-900 font-serif font-bold`}>
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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

    const subscription = supabase
      .channel('feedback_channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'feedback' },
        (payload) => {
          setFeedbacks((current) => [payload.new as Feedback, ...current]);
          setCurrentIndex(0); // Reset to first slide when new feedback comes in
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const olderFeedbacks = feedbacks.slice(1);
  const latestFeedback = feedbacks[0];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === olderFeedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? olderFeedbacks.length - 1 : prevIndex - 1
    );
  };

  if (feedbacks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Latest Feedback */}
      {latestFeedback && (
        <div className="mb-12">
          <h3 className="text-xl font-serif font-bold text-white mb-6">Latest Feedback</h3>
          <FeedbackCard feedback={latestFeedback} isLatest={true} />
        </div>
      )}

      {/* Carousel for older feedback */}
      {olderFeedbacks.length > 0 && (
        <div>
          <h3 className="text-xl font-serif font-bold text-white mb-6">More Reviews</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 ease-in-out">
                <FeedbackCard feedback={olderFeedbacks[currentIndex]} />
              </div>
            </div>

            {olderFeedbacks.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 -left-4 md:-left-12 w-10 h-10 rounded-full bg-black-800 border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black-900 transition-colors transform -translate-y-1/2"
                  aria-label="Previous feedback"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 -right-4 md:-right-12 w-10 h-10 rounded-full bg-black-800 border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black-900 transition-colors transform -translate-y-1/2"
                  aria-label="Next feedback"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex justify-center mt-6 space-x-2">
                  {olderFeedbacks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-gold-500 w-4' : 'bg-gold-500/30'
                      }`}
                      aria-label={`Go to feedback ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;