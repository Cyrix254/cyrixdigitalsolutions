import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, ShoppingCart, Code, Palette, ImageIcon, GraduationCap, Lightbulb, Headphones, MessageCircle } from 'lucide-react';
import servicesData from '@/data/services.json';
import siteData from '@/data/site.json';
import QuickLinks from '@/components/QuickLinks';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const iconMap: { [key: string]: React.ElementType } = {
  Globe,
  ShoppingCart,
  Code,
  Palette,
  ImageIcon,
  GraduationCap,
  Lightbulb,
  Headphones,
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedService, setSelectedService] = useState<any>(null);

  const tabs = ['All', 'Web Development', 'Graphic Design', 'Digital Courses', 'Consultations'];

  const filteredServices =
    activeTab === 'All'
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90">
            At Cyrix Digital Solutions, we build, design, and elevate your digital presence through creativity, strategy, and technology that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-secondary/30 sticky top-16 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card hover:bg-card/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredServices.map((service, index) => {
                const Icon = iconMap[service.icon] || Globe;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-card rounded-2xl overflow-hidden shadow-lg hover-lift hover:shadow-2xl group"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-md rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">
                        {service.category}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.tagline}</p>
                      <div className="text-2xl font-bold text-primary mb-6">{service.price}</div>

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedService(service)}
                          className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
                        >
                          View More
                        </button>
                        <a
                          href={siteData.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center"
                          aria-label="Book on WhatsApp"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <div>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">
                {selectedService.category}
              </div>
              <h2 className="font-display font-bold text-3xl mb-4">{selectedService.title}</h2>
              <p className="text-muted-foreground mb-4">{selectedService.tagline}</p>
              <div className="text-3xl font-bold text-primary mb-6">{selectedService.price}</div>

              <div className="mb-6">
                <h3 className="font-display font-semibold text-xl mb-3">Details</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedService.details}</p>
              </div>

              {selectedService.features && (
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-xl mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Book This Service</span>
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <QuickLinks />
    </div>
  );
};

export default Services;
