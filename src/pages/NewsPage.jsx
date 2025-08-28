import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Zap, Shield, Users, Star, Globe, Smartphone, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const NewsPage = () => {
  const { t } = useLanguage();

  const allNews = [
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
      image: "/Ngomna-Cenadi.webp",
      link: "https://www.digitalbusiness.africa/cameroun-selon-le-cenadi-lapplication-ngomna-pour-l-impression-des-bulletins-de-soldes-et-autres-services-totalise-60-000-telechargements-sur-google-play/"
    },
    {
      id: 3,
      title: "#Ngomna | A la faveur de la circulaire N° 000 00003/MINFI/DGI/LRI/L du 21 mars 2024, précisant les modalités de mise en œuvre de la déclaration des revenus des contribuables non professionnels, et fort du potentiel de l'application nGomna, la Direction Générale des Impôts (#DGI) a sollicité le Centre National de Développement de l'Informatique (#CENADI) pour une collaboration visant à faciliter l'opération de déclaration des revenus aux agents publics",
      excerpt: "Collaboration entre la DGI et le CENADI pour faciliter la déclaration des revenus des agents publics via nGomna.",
      date: "2025-01-05",
      category: "Partenariat",
      icon: <Users className="w-5 h-5" />,
      images: [
        "/dgi.jpg",
        "/dgi 2.jpg",
        "/DGI 3.jpg"
      ],
      link: "https://www.facebook.com/minfi.cameroun/posts/ngomna-a-la-faveur-de-la-circulaire-n-000-00003minfidgilril-du-21-mars-2024-pr%C3%A9c/910730437766185/"
    },
    {
      id: 4,
      title: "Plus de 2 Millions d'Utilisateurs Actifs",
      excerpt: "nGomna franchit le cap des 2 millions d'utilisateurs actifs, confirmant son succès auprès des fonctionnaires camerounais.",
      date: "2025-01-01",
      category: "Communauté",
      icon: <Users className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Nouvelle Interface Mobile Optimisée",
      excerpt: "Découvrez la nouvelle interface utilisateur de nGomna, conçue pour une expérience mobile encore plus fluide et intuitive.",
      date: "2024-12-28",
      category: "Design",
      icon: <Smartphone className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Partenariat Stratégique avec CENADI",
      excerpt: "Renforcement du partenariat entre nGomna et CENADI pour améliorer les services numériques gouvernementaux.",
      date: "2024-12-20",
      category: "Partenariat",
      icon: <TrendingUp className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      title: "Système de Notifications Intelligent",
      excerpt: "Le nouveau système de notifications de nGomna utilise l'IA pour vous informer au bon moment des mises à jour importantes.",
      date: "2024-12-15",
      category: "Technologie",
      icon: <Star className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      title: "Formation des Agents Publics à nGomna",
      excerpt: "Lancement d'un programme de formation pour accompagner les agents publics dans l'utilisation optimale de nGomna.",
      date: "2024-12-10",
      category: "Formation",
      icon: <Users className="w-5 h-5" />,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Innovation':
        return 'from-green-500 to-emerald-600';
      case 'Sécurité':
        return 'from-red-500 to-red-600';
      case 'Partenariat':
        return 'from-yellow-500 to-orange-500';
      case 'Services':
        return 'from-blue-500 to-blue-600';
      case 'Communauté':
        return 'from-purple-500 to-purple-600';
      case 'Design':
        return 'from-pink-500 to-pink-600';
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

  const handleNewsClick = (news) => {
    if (news.link) {
      window.open(news.link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Actualités nGomna
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Restez informé des dernières nouveautés, mises à jour et développements 
              de l'écosystème nGomna et des services gouvernementaux numériques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-16">
            <motion.article
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              onClick={() => handleNewsClick(allNews[0])}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <motion.img
                    src={allNews[0].image}
                    alt={allNews[0].title}
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
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getCategoryColor(allNews[0].category)} flex items-center justify-center text-white`}>
                      {allNews[0].icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {allNews[0].category}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {allNews[0].title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {allNews[0].excerpt}
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
                      <span className="text-sm">{formatDate(allNews[0].date)}</span>
                    </div>
                    
                    <motion.div 
                      className="flex items-center space-x-2 text-green-600 font-semibold"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>Lire l'article</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        </div>
      </section>

      {/* All News Grid */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Toutes les Actualités
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez l'ensemble de nos actualités et restez informé des derniers développements
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.slice(1).map((news, index) => (
              <AnimatedSection
                key={news.id}
                delay={index * 0.1}
                direction="up"
              >
                <motion.article
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full cursor-pointer"
                  onClick={() => handleNewsClick(news)}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative overflow-hidden">
                    {news.images ? (
                      <div className="w-full h-48">
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
                          {news.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                              <motion.img
                                src={image}
                                alt={`${news.title} - Image ${imgIndex + 1}`}
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
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    )}
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
                      <div className={`w-6 h-6 rounded-md bg-gradient-to-r ${getCategoryColor(news.category)} flex items-center justify-center text-white`}>
                        {news.icon}
                      </div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {news.category}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 flex-grow"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {news.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {news.excerpt}
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
                        <span className="text-sm">{formatDate(news.date)}</span>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;