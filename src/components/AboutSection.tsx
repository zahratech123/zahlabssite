import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Rocket, ShieldCheck, MapPin, Sparkles, Cpu, BookOpen, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  isDarkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Technical Profile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-4"
          >
            About <span className="text-gradient-cyan-purple">Zahra Zaranwala</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans"
          >
            {PERSONAL_INFO.aboutDetailed}
          </motion.p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-display font-bold text-slate-100 mb-3 flex items-center gap-2">
                🎓 Education
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {PERSONAL_INFO.educationDetails}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                GEC Dahod, Gujarat
              </span>
              <span>2023 - Present</span>
            </div>
          </motion.div>

          {/* Card 2: Career Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-display font-bold text-slate-100 mb-3 flex items-center gap-2">
                🤖 Career Vision
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {PERSONAL_INFO.careerVision}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-purple-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Intelligent Digital Solutions
              </span>
              <span>Long-Term Growth</span>
            </div>
          </motion.div>

          {/* Card 3: Discipline & Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-emerald-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-display font-bold text-slate-100 mb-3 flex items-center gap-2">
                📖 Discipline & Excellence
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {PERSONAL_INFO.disciplinePhilosophy}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-blue-400">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                Ethical Technology
              </span>
              <span>Faith & Practice</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
