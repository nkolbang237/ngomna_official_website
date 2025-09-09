import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink, Zap, Shield, Users, Star, Globe, Smartphone, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';

const News = () => {
  const { t } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample news data - in a real app, this would come from an API
  const sampleNews = [
    {
      id: 1,
      title: "GOV IA : UNE RÉVOLUTION POUR L'ADMINISTRATION PUBLIQUE CAMEROUNAISE",
      excerpt: "Découvrez comment l'intelligence artificielle transforme les services publics camerounais avec des innovations révolutionnaires qui changent la donne pour les citoyens.",
      date: "2025-01-15",
      category: "Innovation",
      icon: <Zap className="w-5 h-5" />,
      image: "/GOV AI IMAGE 1.jpg",
      featured: true,
      link: "https://impactechosnews.com/sago-2025-le-ministere-des-finances-expose-ses-innovations/"
    },
    {
      id: 2,
      title: "nGomna 3.0 : Nouvelles Fonctionnalités de Sécurité Avancées",
      excerpt: "La dernière mise à jour de nGomna introduit des fonctionnalités de sécurité révolutionnaires pour protéger vos données personnelles.",
      date: "2025-01-10",
      category: "Sécurité",
      icon: <Shield className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Plus de 2 Millions d'Utilisateurs Actifs",
      excerpt: "nGomna franchit le cap des 2 millions d'utilisateurs actifs, confirmant son succès auprès des fonctionnaires camerounais.",
      date: "2025-01-01",
      category: "Communauté",
      icon: <Users className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Nouvelle Interface Mobile Optimisée",
      excerpt: "Découvrez la nouvelle interface utilisateur de nGomna, conçue pour une expérience mobile encore plus fluide et intuitive.",
      date: "2024-12-28",
      category: "Design",
      icon: <Smartphone className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchNews = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setNews(sampleNews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Innovation':
        return 'from-green-500 to-emerald-600';
      case 'Sécurité':
        return 'from-red-500 to-red-600';
      case 'Services':
        return 'from-blue-500 to-blue-600';
      case 'Communauté':
        return 'from-purple-500 to-purple-600';
      case 'Design':
        return 'from-pink-500 to-pink-600';
      case 'Partenariat':
        return 'from-orange-500 to-orange-600';
      case 'Technologie':
        return 'from-yellow-500 to-yellow-600';
      case 'Formation':
        return 'from-indigo-500 to-indigo-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleNewsClick = (newsItem) => {
    if (newsItem.link) {
      window.open(newsItem.link, '_blank');
    }
  };

  if (loading) {
    return (
      <section id="news" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="news" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-red-600">Erreur lors du chargement des actualités: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-12 sm:py-16 lg:py-20 bg-white">
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

        {/* Featured News */}
        {news.length > 0 && news[0].featured && (
          <AnimatedSection className="mb-16">
            <motion.article
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              onClick={() => handleNewsClick(news[0])}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <motion.img
                    src={news[0].image}
                    alt={news[0].title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      À la Une
                    </span>
                  </motion.div>
                </div>
                
                <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div 
                    className="flex items-center space-x-2 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getCategoryColor(news[0].category)} flex items-center justify-center text-white`}>
                      {news[0].icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {news[0].category}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {news[0].title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {news[0].excerpt}
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
                      <span className="text-sm">{formatDate(news[0].date)}</span>
                    </div>
                    
                    <motion.div 
                      className="flex items-center space-x-2 text-green-600 font-semibold"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>Lire l'article</span>
                      <ExternalLink size={16} />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        )}

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((newsItem, index) => (
            <AnimatedSection
              key={newsItem.id}
              delay={index * 0.1}
              direction="up"
            >
              <motion.article
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full cursor-pointer"
                onClick={() => handleNewsClick(newsItem)}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <motion.div 
                    className="flex items-center space-x-2 mb-3"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-6 h-6 rounded-md bg-gradient-to-r ${getCategoryColor(newsItem.category)} flex items-center justify-center text-white`}>
                      {newsItem.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {newsItem.category}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 flex-grow"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {newsItem.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {newsItem.excerpt}
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
                      <span className="text-sm">{formatDate(newsItem.date)}</span>
                    </div>
                    
                    <motion.div 
                      className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>Lire plus</span>
                      <ArrowRight size={14} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        {/* View All News Button */}
        <AnimatedSection className="text-center mt-16" delay={0.8}>
          <motion.button
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/news'}
          >
            {t('news.viewall')}
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default News;