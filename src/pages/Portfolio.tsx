import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import QuickLinks from '@/components/QuickLinks';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Graphics', 'Courses'];

  const filteredProjects =
    activeFilter === 'All'
      ? portfolioData
      : portfolioData.filter((project) => project.category === activeFilter);

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
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Explore our work and see how we've helped businesses succeed in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="py-8 bg-secondary/30 sticky top-16 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card hover:bg-card/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover-lift hover:shadow-2xl"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">
                        {project.category}
                      </div>
                      <h3 className="font-display font-bold text-xl text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 mb-3">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                      >
                        <span className="font-medium">View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info (Mobile) */}
                  <div className="p-6 md:hidden">
                    <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <QuickLinks />
    </div>
  );
};

export default Portfolio;
