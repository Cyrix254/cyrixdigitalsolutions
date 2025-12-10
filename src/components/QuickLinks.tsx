import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Music2, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import siteData from '@/data/site.json';



const QuickLinks = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const socialLinks = [
    { icon: Facebook, url: siteData.socials.facebook, label: 'Facebook' },
    { icon: Instagram, url: siteData.socials.instagram, label: 'Instagram' },
    { icon: Linkedin, url: siteData.socials.linkedin, label: 'LinkedIn' },
    { icon: Music2, url: siteData.socials.tiktok, label: 'TikTok' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Page Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="font-display font-semibold text-2xl mb-6">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Profile Download */}
          <motion.div variants={itemVariants}>
            <a
              href="/Cyrix Digital Solutions (1).pdf"
              download
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Download Company Profile</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;
