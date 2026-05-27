import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ activeCategory, setActiveCategory, showAll, setShowAll, filteredProjects }) => (
  <section id="projects" className="px-4 py-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
        Featured Projects
      </h2>

      <div className="flex justify-center gap-4 mb-12">
        {['All', 'Full Stack', 'Web App', 'Mobile App', 'IoT Project', 'AI & Automation'].map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border border-white/20 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 text-white'
                : 'text-white/70 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-800 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.slice(0, showAll ? filteredProjects.length : 6).map((project, index) => (
          <div key={index} className="overflow-hidden transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105 group">
            <div className="relative overflow-hidden">
              <img src={project.image} alt={project.title} loading="lazy" className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
              <p className="mb-4 leading-relaxed text-white/70">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 text-sm text-purple-400 border rounded-full bg-purple-700/20 border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              {project.status === 'coming-soon' && (
                <span className="absolute px-3 py-1 text-xs font-bold text-white uppercase bg-purple-600 rounded-full shadow-lg top-3 right-3 animate-bounce">
                  Coming Soon
                </span>
              )}

              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 transition-colors hover:text-purple-500">
                    <Github className="mr-1" size={18} /> GitHub
                  </a>
                )}

                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 transition-colors hover:text-pink-500">
                    <ExternalLink className="mr-1" size={18} /> Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && filteredProjects.length > 6 && (
        <div className="mt-12 text-center">
          <button onClick={() => setShowAll(true)} className="px-6 py-3 font-semibold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25">
            View More
          </button>
        </div>
      )}
    </div>
  </section>
);

export default Projects;
