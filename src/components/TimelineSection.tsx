import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Compass, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

interface TimelineSectionProps {
  isDarkMode: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Growth & Leadership History</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-4"
          >
            My Engineering <span className="text-gradient-cyan-purple">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-sans"
          >
            Important milestones in academic, technical, leadership, and personal growth.
          </motion.p>
        </div>

        {/* Timeline Stack */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-600 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Icon Node Center */}
                  <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-20 shadow-lg shadow-cyan-500/20">
                    {index === 0 ? <GraduationCap className="w-4 h-4" /> : index === 1 ? <Award className="w-4 h-4 text-purple-400" /> : <Compass className="w-4 h-4 text-blue-400" />}
                  </div>

                  {/* Content Card Box */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${
                    isEven ? 'sm:pl-10' : 'sm:pr-10 sm:text-right'
                  }`}>
                    <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
                      
                      <div className={`flex items-center gap-2 mb-2 ${
                        isEven ? 'sm:justify-start' : 'sm:justify-end'
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-xs font-mono font-bold text-cyan-300">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-purple-400 mb-3">
                        {item.organization} • {item.role}
                      </p>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-1.5 ${
                        isEven ? 'sm:justify-start' : 'sm:justify-end'
                      }`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
