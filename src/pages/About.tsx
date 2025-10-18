import { motion } from 'framer-motion';
import { Target, Eye, Heart, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import siteData from '@/data/site.json';
import QuickLinks from '@/components/QuickLinks';

const About = () => {
  const counterRef = useRef(null);
  const isCounterInView = useInView(counterRef, { once: true });

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver nothing less than exceptional quality in every project we undertake.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to provide cutting-edge solutions for your business.',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'Your success is our success. We build lasting relationships, not just websites.',
    },
  ];

  const stats = [
    { label: 'Websites Built', value: siteData.counters.websitesBuilt, suffix: '+' },
    { label: 'Clients Served', value: siteData.counters.clientsServed, suffix: '+' },
    { label: 'Students Trained', value: siteData.counters.studentsTrained, suffix: '+' },
    { label: 'Projects Completed', value: siteData.counters.projectsCompleted, suffix: '+' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              About Cyrix Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              We're a passionate team dedicated to empowering businesses with exceptional digital solutions. From web development, graphic design to digital strategy we bring your vision to life with creativity and technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between business ambitions and digital excellence, Cyrix Digital Solutions has grown from a one-person operation to a trusted partner for businesses across Kenya and beyond. We combine technical expertise with creative flair to deliver solutions that don't just look good—they drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-lg"
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance brand visibility, and create lasting impact in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-lg"
            >
              <Eye className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading digital partner for businesses across Africa, known for excellence, innovation, and transformative digital experiences.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-3xl text-center mb-12">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl text-center hover-lift hover:shadow-xl"
                >
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-display font-bold text-xl mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
              Meet the Founder
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
                <img
                  src="src/assets/cyrix.jpg"
                  alt="Cyrix Ray - Founder of Cyrix Digital Solutions"
                  className="relative rounded-2xl shadow-2xl w-full glow-effect"
                />
              </div>

              {/* Founder Info */}
              <div>
                <h3 className="font-display font-bold text-3xl mb-2">Cyrix Ray</h3>
                <p className="text-accent font-semibold mb-4">Founder & Lead Developer</p>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-6 italic">
                  <p className="text-lg leading-relaxed">
                    "I believe every business deserves a powerful digital presence. My mission is to make world-class web solutions accessible to businesses of all sizes."
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  With years of experience in web development, graphic design, and digital strategy, Cyrix has helped hundreds of businesses establish and grow their online presence. His passion for technology and design drives every project, ensuring clients receive solutions that are both beautiful and functional.
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={siteData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={siteData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={siteData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Counter */}
      <section ref={counterRef} className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-4xl md:text-5xl mb-2">
                  {isCounterInView && (
                    <CountUp
                      end={stat.value}
                      duration={1.6}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuickLinks />
    </div>
  );
};

export default About;
