import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, FileCode, Terminal, GitBranch, Cpu, BrainCircuit, Microchip, Lightbulb, Sparkles, Filter } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Hardware & ECE', 'AI & Data', 'Tools & Web'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'FileCode': return FileCode;
      case 'Terminal': return Terminal;
      case 'GitBranch': return GitBranch;
      case 'Cpu': return Cpu;
      case 'BrainCircuit': return BrainCircuit;
      case 'Microchip': return Microchip;
      case 'Lightbulb': return Lightbulb;
      default: return Code;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

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
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-4"
          >
            Advanced <span className="text-gradient-cyan-purple">Tech Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-sans"
          >
            Core technical capabilities developed through coursework at GEC Dahod, practical projects, certifications, and self-learning.
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
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 border border-cyan-400/40'
                    : isDarkMode
                      ? 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Filter className="w-3 h-3" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIcon(skill.iconName);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                      {skill.percentage}%
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    {skill.category}
                  </span>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Animated Progress Indicator */}
                <div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden p-0.5 border border-slate-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
