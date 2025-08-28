import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Calendar, ArrowRight, Zap, Shield, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const News = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const newsItems = [
    {
      id: 1,
      title: t('news.article1.title'),
      excerpt: t('news.article1.excerpt'),
      date: "2025-01-15",
      category: t('news.article1.category'),
      icon: <Zap className="w-5 h-5" />,
      images: [
        "/GOV AI IMAGE 1.jpg",
        "/GOV AI IMAGE 2.jpg", 
        "/GOV AI IMAGE 3.jpg"
      ],
      featured: true,
      link: "https://impactechosnews.com/sago-2025-le-ministere-des-finances-expose-ses-innovations/"
    },
    {
      id: 2,
      title: t('news.article2.title'),
      excerpt: t('news.article2.excerpt'),
      date: "2025-01-10",
      category: t('news.article2.category'),
      icon: <Users className="w-5 h-5" />,
      image: "/Ngomna-Cenadi.webp",
      link: "https://www.digitalbusiness.africa/cameroun-selon-le-cenadi-lapplication-ngomna-pour-l-impression-des-bulletins-de-soldes-et-autres-services-totalise-60-000-telechargements-sur-google-play/"
    },
    {
      id: 3,
      title: t('news.article3.title'),
      excerpt: t('news.article3.excerpt'),
      date: "2025-01-05",
      category: t('news.article3.category'),
      icon: <Shield className="w-5 h-5" />,
      images: [
        "/dgi.jpg",
        "/dgi 2.jpg",
        "/DGI 3.jpg"
      ],
      link: "https://www.facebook.com/minfi.cameroun/posts/ngomna-a-la-faveur-de-la-circulaire-n-000-00003minfidgilril-du-21-mars-2024-pr%C3%A9c/910730437766185/"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Innovation':
        return 'from-green-500 to-emerald-600';
      case 'Téléchargements':
      case 'Downloads':
        return 'from-emerald-500 to-teal-600';
      case 'Partenariat':
      case 'Partnership':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleNewsClick = (news) => {
    if (news.link) {
      window.open(news.link, '_blank');
    }
  };

  return (
    <section id="news" className="py-12 sm:py-16 lg:py-20 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('news.title')}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('news.subtitle')}
          </motion.p>
        </AnimatedSection>

        <div className="mb-8 lg:mb-12 block">
          {/* Featured Article */}
          <AnimatedSection direction="up">
            <motion.article
              onClick={() => handleNewsClick(newsItems[0])}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 block"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ cursor: 'pointer' }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 relative overflow-hidden">
                  <div className="w-full h-48 sm:h-64 lg:h-full">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet news-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active news-bullet-active'
                      }}
                      className="w-full h-full"
                      loop={true}
                    >
                      {newsItems[0].images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <motion.img
                            src={image}
                            alt={`${newsItems[0].title} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </motion.div>
                </div>
                
                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div 
                    className="flex items-center space-x-2 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getCategoryColor(newsItems[0].category)} flex items-center justify-center text-white`}>
                      {newsItems[0].icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {newsItems[0].category}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {newsItems[0].title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {newsItems[0].excerpt}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={16} />
                      <span className="text-sm">{formatDate(newsItems[0].date)}</span>
                    </div>
                    
                    <motion.button 
                      className="group/btn bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                     <span>{t('news.readmore')}</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        </div>

        {/* Other News Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {newsItems.slice(1, 3).map((item, index) => (
            <AnimatedSection
              key={item.id}
              delay={index * 0.1}
              direction="up"
            >
              <motion.article
                onClick={() => handleNewsClick(item)}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ cursor: 'pointer' }}
              >
                <div className="relative overflow-hidden">
                  {item.images ? (
                    <div className="w-full h-40 sm:h-48">
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                          delay: 4000,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                          bulletClass: 'swiper-pagination-bullet news-bullet-small',
                          bulletActiveClass: 'swiper-pagination-bullet-active news-bullet-small-active'
                        }}
                        className="w-full h-full"
                        loop={true}
                      >
                        {item.images.map((image, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <motion.img
                              src={image}
                              alt={`${item.title} - Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : (
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 sm:h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <motion.div 
                    className="flex items-center space-x-2 mb-3"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-6 h-6 rounded-md bg-gradient-to-r ${getCategoryColor(item.category)} flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-3 flex-grow"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 flex-grow"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.excerpt}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-between mt-auto"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={14} />
                      <span className="text-xs sm:text-sm">{formatDate(item.date)}</span>
                    </div>
                    
                    <motion.button 
                      className="text-green-600 hover:text-green-700 font-semibold text-xs sm:text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                     <span>{t('news.readmore')}</span>
                      <ArrowRight size={14} />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        {/* View All News Button */}
        <AnimatedSection className="text-center mt-12" delay={0.6}>
          <motion.button 
            onClick={() => navigate('/news')}
            className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>{t('news.viewall')}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </AnimatedSection>
      </div>
      
      <style jsx>{`
        .news-bullet {
          background: rgba(34, 197, 94, 0.3) !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }

        .news-bullet-active {
          background: linear-gradient(135deg, #22c55e, #16a34a) !important;
          transform: scale(1.2) !important;
          box-shadow: 0 2px 8px rgba(34, 197, 94, 0.4) !important;
        }

        .news-bullet-small {
          background: rgba(34, 197, 94, 0.3) !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          margin: 0 3px !important;
          transition: all 0.3s ease !important;
        }

        .news-bullet-small-active {
          background: linear-gradient(135deg, #22c55e, #16a34a) !important;
          transform: scale(1.2) !important;
          box-shadow: 0 2px 8px rgba(34, 197, 94, 0.4) !important;
        }

        @media (max-width: 639px) {
          .carousel-container {
            padding: 20px 16px;
            gap: 24px;
          }
          
          .description {
            font-size: 1.25rem;
            margin-bottom: 16px;
          }
          
          .smaller-text {
            font-size: 0.9rem;
            margin-bottom: 20px;
          }
          
          .phone-mockup {
            width: 220px;
            height: 440px;
          }
          
          .phone-notch {
            width: 120px;
            height: 24px;
          }
          
          .learn-more-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
          
          .play-pause-btn {
            width: 36px;
            height: 36px;
          }
        }

        /* Responsive fixes for small screens */
        @media (max-width: 768px) {
          .grid.grid-cols-1.sm\\:grid-cols-2.gap-6.lg\\:gap-8 {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .mb-8.lg\\:mb-12 {
            margin-bottom: 2rem !important;
          }
          
          .flex.flex-col.lg\\:flex-row {
            flex-direction: column !important;
          }
          
          .w-full.lg\\:w-1\\/2 {
            width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .text-xl.sm\\:text-2xl.lg\\:text-3xl {
            font-size: 1.125rem !important;
            line-height: 1.4 !important;
          }
          
          .text-base.sm\\:text-lg {
            font-size: 0.875rem !important;
          }
          
          .p-6.sm\\:p-8.lg\\:p-12 {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default News;