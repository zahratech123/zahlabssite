import React from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Award, Sparkles, Trophy, CheckCircle2, Zap } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

interface AchievementsSectionProps {
  isDarkMode: boolean;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ isDarkMode }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00ffe5', '#a855f7', '#3b82f6', '#fbbf24']
    });
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Discipline Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-4"
          >
            National & Technical <span className="text-gradient-cyan-purple">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-sans"
          >
            Recognized for leadership excellence, cadet training discipline in NCC, and continuous technical mastery.
          </motion.p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ACHIEVEMENTS_DATA.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={triggerConfetti}
              className={`glass-card rounded-3xl p-8 border hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                ach.type === 'gold'
                  ? 'border-amber-500/40 hover:shadow-amber-500/20'
                  : ach.type === 'silver'
                    ? 'border-slate-400/40 hover:shadow-slate-400/20'
                    : 'border-purple-500/40 hover:shadow-purple-500/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl group-hover:scale-125 transition-transform">
                    {ach.icon}
                  </div>
                  <span className="text-xs font-mono text-cyan-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    {ach.issuer}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Click to Celebrate!
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Celebrate CTA Button */}
        <div className="text-center">
          <button
            onClick={triggerConfetti}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-cyan-500 text-white font-semibold text-xs font-mono inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            <span>Trigger Celebration Confetti 🎉</span>
          </button>
        </div>

      </div>
    </section>
  );
};
