import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import siteData from '@/data/site.json';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Services', path: '/services', icon: 'build' },
    { name: 'Portfolio', path: '/portfolio', icon: 'work' },
    { name: 'Testimonials', path: '/testimonials', icon: 'star' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
    { name: 'FAQ', path: '/faq', icon: 'help' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-display font-bold text-white text-xl">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg text-foreground">
                Cyrix Digital Solutions
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">
                Empowering Digital Growth
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center space-x-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <span className="material-icons">{link.icon}</span>
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle /> {/* Add the ThemeToggle button */}
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle /> {/* Always visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <span className="material-icons">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;