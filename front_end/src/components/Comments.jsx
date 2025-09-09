import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';

const Comments = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample comments data - in a real app, this would come from an API
  const comments = [
    {
      id: 1,
      name: 'Vladimir Cruise',
      username: '@vladimir_cruise',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: t('comments.user1.comment') || 'This application is very useful for users as it facilitates access to their payslip regardless of where they are and thus prevents being extorted 1000F outside MINFI.',
      date: '2025-07-14',
      verified: true
    },
    {
      id: 2,
      name: 'Freddy Djilo',
      username: '@freddy_djilo',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: t('comments.user2.comment') || 'Hello, dear developers. Your application is a saving solution for users. We (I) recommend it whenever we have the opportunity.',
      date: '2024-03-30',
      verified: true
    },
    {
      id: 3,
      name: 'Sarah Chen',
      username: '@sarah_chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: t('comments.user3.comment') || 'The design is absolutely beautiful! Every interaction feels smooth and delightful. nGomna sets the standard for mobile apps.',
      date: '2024-12-15',
      verified: true
    },
    {
      id: 4,
      name: 'Marcus Rodriguez',
      username: '@marcus_dev',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: t('comments.user4.comment') || 'As a developer, I appreciate the attention to detail in nGomna. The performance is outstanding and the security features give me peace of mind.',
      date: '2024-11-20',
      verified: true
    },
    {
      id: 5,
      name: 'Emily Watson',
      username: '@emily_watson',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: t('comments.user5.comment') || 'Finally, an app that actually cares about user privacy! The end-to-end encryption and clean interface make this my go-to choice.',
      date: '2024-10-05',
      verified: true
    },
    {
      id: 6,
      name: 'David Kim',
      username: '@david_kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      comment: t('comments.user6.comment') || 'I\'ve been using nGomna for 6 months now and it just keeps getting better. The recent AI update is a game-changer!',
      date: '2024-09-12',
      verified: true
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, comments.length]);

  const nextComment = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevComment = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  const goToComment = (index) => {
    setCurrentIndex(index);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.3, 
          delay: i * 0.1,
          type: "spring",
          stiffness: 200
        }}
        viewport={{ once: true }}
      >
        <Star 
          className={`w-4 h-4 sm:w-5 sm:h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`} 
        />
      </motion.div>
    ));
  };

  return (
    <section id="comments" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('comments.title')}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('comments.subtitle')}
          </motion.p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16" delay={0.3}>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-sm sm:text-base text-gray-600">{t('comments.satisfaction')}</div>
          </motion.div>
          
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">24/7</div>
            <div className="text-sm sm:text-base text-gray-600">{t('comments.support')}</div>
          </motion.div>
          
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">50K+</div>
            <div className="text-sm sm:text-base text-gray-600">Reviews</div>
          </motion.div>
        </AnimatedSection>

        {/* Main Comment Display */}
        <AnimatedSection className="max-w-4xl mx-auto mb-8" delay={0.5}>
          <div className="relative">
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden"
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Quote decoration */}
              <motion.div 
                className="absolute top-4 sm:top-6 left-4 sm:left-6 text-green-200"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
              </motion.div>

              <div className="relative z-10">
                {/* User Info */}
                <motion.div 
                  className="flex items-center space-x-4 mb-6"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.img
                    src={comments[currentIndex].avatar}
                    alt={comments[currentIndex].name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-green-100"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {comments[currentIndex].name}
                      </h4>
                      {comments[currentIndex].verified && (
                        <motion.div
                          className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-500">{comments[currentIndex].username}</p>
                  </div>
                </motion.div>

                {/* Rating */}
                <motion.div 
                  className="flex items-center space-x-1 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {renderStars(comments[currentIndex].rating)}
                  <span className="ml-2 text-sm sm:text-base text-gray-600">
                    {formatDate(comments[currentIndex].date)}
                  </span>
                </motion.div>

                {/* Comment Text */}
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  "{comments[currentIndex].comment}"
                </motion.p>
              </div>

              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-100 to-transparent rounded-full transform translate-x-16 translate-y-16"></div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevComment}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.button
              onClick={nextComment}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Pagination Dots */}
        <AnimatedSection className="flex justify-center space-x-2 mb-8" delay={0.7}>
          {comments.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToComment(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-green-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
          ))}
        </AnimatedSection>

        {/* Additional Comments Grid */}
        <AnimatedSection delay={0.8}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comments.slice(0, 3).map((comment, index) => (
              <motion.div
                key={comment.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">{comment.name}</h5>
                    <div className="flex items-center space-x-1">
                      {renderStars(comment.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  "{comment.comment}"
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16" delay={1}>
          <motion.p 
            className="text-sm sm:text-base text-gray-500 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('comments.based')}
          </motion.p>
          
          <motion.button
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join Our Community
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Comments;