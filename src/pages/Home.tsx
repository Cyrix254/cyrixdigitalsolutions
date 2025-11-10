import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import siteData from '@/data/site.json';

const Home = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
      alt: 'Modern web development workspace',
    },
    {
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80',
      alt: 'Creative graphic design studio',
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      alt: 'Digital collaboration and strategy',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            className="h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-white"
          >
           {/* Logo */}
<motion.div
  variants={itemVariants}
  className="flex items-center space-x-3 mb-8"
>
  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center font-display font-bold text-2xl sm:text-3xl shadow-2xl">
    CR
  </div>
  <div>
    <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl">
      Cyrix Digital Solutions
    </h1>
    <p className="text-accent text-sm sm:text-lg font-medium">
      {siteData.tagline}
    </p>
  </div>
</motion.div>

            {/* Tagline & Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-light mb-6 leading-relaxed"
            >
              {siteData.description}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl"
            >
              From stunning websites to strategic digital solutions, we help entrepreneurs and businesses turn visibility into credibility and digital learners to grow, create and lead online.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="font-semibold text-lg">Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border-2 border-white/30 hover:bg-white hover:text-primary transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold text-lg">Book Now</span>
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-col items-center"
            >
              <p className="text-sm text-gray-300 mb-2">Scroll to explore</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
              >
                <div className="w-1 h-2 bg-white rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
