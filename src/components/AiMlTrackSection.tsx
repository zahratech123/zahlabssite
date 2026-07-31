import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Sparkles, Terminal, Zap, Compass, CheckCircle2 } from 'lucide-react';
import { AI_GROWTH_TRACK } from '../data/portfolioData';

interface AiMlTrackSectionProps {
  isDarkMode: boolean;
  onOpenAiAssistant: () => void;
}

export const AiMlTrackSection: React.FC<AiMlTrackSectionProps> = ({ isDarkMode, onOpenAiAssistant }) => {
  return (
    <section id="ai-track" className="py-24 relative overflow-hidden">
      
      {/* Background Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Banner Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Specialized Career Vision</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-6"
              >
                AI / ML <span className="text-gradient-cyan-purple">Growth Track & Vision</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-8"
              >
                {AI_GROWTH_TRACK.description}
              </motion.p>

              {/* Pillars */}
              <div className="space-y-4 mb-8">
                {AI_GROWTH_TRACK.pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      {idx === 0 ? <Brain className="w-5 h-5" /> : idx === 1 ? <Zap className="w-5 h-5 text-purple-400" /> : <Compass className="w-5 h-5 text-blue-400" />}
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-slate-100">
                        {pillar.title}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400 mb-1">{pillar.subtitle}</p>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{pillar.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={onOpenAiAssistant}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs font-mono flex items-center gap-2 shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                <span>Interrogate Zahra's AI Skills via Gemini Assistant</span>
              </button>
            </div>

            {/* Right Terminal Interactive Preview */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-[#090d16] border border-cyan-500/30 p-5 shadow-2xl font-mono text-xs text-slate-300"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-cyan-400/80">ai_growth_pipeline.py</span>
                </div>

                {/* Code Block */}
                <div className="space-y-2 text-[11px] leading-relaxed">
                  <p className="text-purple-400"># Zahra Zaranwala AI Engineering Pipeline</p>
                  <p><span className="text-cyan-400">import</span> tensorflow <span className="text-cyan-400">as</span> tf</p>
                  <p><span className="text-cyan-400">from</span> ece_hardware <span className="text-cyan-400">import</span> EmbeddedSensors</p>
                  <br />
                  <p className="text-emerald-400">class IntelligentDigitalSolutions:</p>
                  <p className="pl-4 text-slate-300">def __init__(self):</p>
                  <p className="pl-8 text-cyan-300">self.institution = "GEC Dahod"</p>
                  <p className="pl-8 text-cyan-300">self.skills = ["Python", "ML", "CNNs", "GenAI"]</p>
                  <p className="pl-8 text-cyan-300">self.goal = "Hardware-Software Intelligence"</p>
                  <br />
                  <p className="pl-4 text-purple-300">def build_future_technology(self):</p>
                  <p className="pl-8 text-slate-300">return "Combining ECE Hardware & Generative AI"</p>
                  <br />
                  <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800/80 text-cyan-300 text-[11px] flex items-center gap-2 mt-4">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Status: Active Learning & Building Intelligent Solutions</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
