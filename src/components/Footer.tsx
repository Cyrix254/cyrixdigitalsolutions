import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Music2 } from 'lucide-react';
import siteData from '@/data/site.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--dark-navy))] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center font-display font-bold text-white text-xl">
                C
              </div>
              <div>
                <div className="font-display font-bold text-lg">Cyrix Digital Solutions</div>
                <div className="text-xs text-gray-300">{siteData.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              {siteData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-sm text-gray-300 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/testimonials" className="text-sm text-gray-300 hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Digital Courses</li>
              <li>Consultations</li>
              <li>E-Commerce Solutions</li>
              <li>Brand Identity</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm text-gray-300">{siteData.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href={`mailto:${siteData.email}`} className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href={`tel:${siteData.phone}`} className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {siteData.phone}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href={siteData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteData.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Cyrix Digital Solutions. Designed & Managed by Cyrix Ray.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
