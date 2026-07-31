import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Filter, Code2, Cpu, Eye, X, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'ECE', 'Web', 'AI/ML'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engineering Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-4"
          >
            Featured <span className="text-gradient-cyan-purple">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-sans"
          >
            A curated mix of ECE engineering concepts, web development applications, and beginner AI-oriented projects aligned with my career vision of building intelligent digital solutions.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 border border-cyan-400/40'
                    : isDarkMode
                      ? 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Project Image Banner */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect</span>
                </button>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Links Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                        <span>GitHub Repository</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full bg-[#0f172a] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl text-slate-100 p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Project Details</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-cyan-300 mb-6">{selectedProject.subtitle}</p>

              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/50 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-xs font-mono text-white font-semibold flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
