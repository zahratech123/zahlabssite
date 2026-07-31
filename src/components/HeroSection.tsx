import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, FileText, Bot, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Award, Users, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  isDarkMode: boolean;
  onOpenAiAssistant: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode, onOpenAiAssistant }) => {
  const roles = [
    "Building Intelligent Digital Solutions",
    "Final Year ECE Student @ GEC Dahod",
    "GenAI & Automation Enthusiast",
    "Google Student Ambassador",
    "Hardware & Software Innovator"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Glow Effects Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-lg shadow-cyan-500/5"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
                Open for AI Internships & Tech Collaborations
              </span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-3">
                Hello, I'm <br />
                <span className="text-gradient-cyan-purple">
                  {PERSONAL_INFO.name}
                </span>
                <span className="inline-block animate-pulse text-cyan-400 ml-1">✨</span>
              </h1>
            </motion.div>

            {/* Role Typewriter Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 mb-6 flex items-center"
            >
              <span className="text-xl sm:text-2xl font-mono font-semibold text-cyan-400 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
                <span>{displayText}</span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse ml-0.5" />
              </span>
            </motion.div>

            {/* Bio Statement (100% Preserved) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-3.5 rounded-xl border text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                 target="_blank"
                 rel="noopener noreferrer"
                className={`px-5 py-3.5 rounded-xl border text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-cyan-500/30 text-cyan-300 hover:bg-slate-800 hover:border-cyan-400'
                    : 'bg-white border-cyan-300 text-cyan-700 hover:bg-cyan-50'
                }`}
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenAiAssistant}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 border border-purple-500/40 text-purple-300 text-sm font-semibold flex items-center gap-2 hover:bg-slate-800 hover:border-purple-400 transition-all cursor-pointer"
              >
                <Bot className="w-4 h-4 text-purple-400" />
                <span>Ask AI Agent</span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full"
            >
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="Email Address"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Avatar Card & Live Interactive AI Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive 3D Card Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-xl opacity-50 animate-pulse-glow" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl glass-card p-6 flex flex-col items-center border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Header Tag */}
                <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono text-cyan-300 font-semibold">ZAHRA XTECH</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    GEC DAHOD
                  </span>
                </div>

                {/* Avatar Image with Neon Ring */}
                <div className="relative w-44 h-44 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-600 mb-5 shadow-2xl group">
                  <img
                    src={PERSONAL_INFO.avatarImage}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[14px] transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback avatar if image fails to load
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-2 right-2 bg-slate-950/90 border border-cyan-400/50 p-1.5 rounded-lg text-cyan-400 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Title & Institution */}
                <h3 className="text-xl font-display font-bold text-slate-100 text-center">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400 text-center mb-4">
                  {PERSONAL_INFO.degree}
                </p>

                {/* Quick Highlight Badges */}
                <div className="grid grid-cols-2 gap-2 w-full text-xs font-mono">
                  <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-xl flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-slate-300 text-[11px]">2 NCC Gold Medals</span>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-300 text-[11px]">40+ Certifications</span>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-xl flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="text-slate-300 text-[11px]">2100+ LinkedIn</span>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-2 rounded-xl flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-300 text-[11px]">Google Ambassador</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

        {/* Quick Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-400">Final Year</span>
            <span className="text-xs font-mono text-slate-400 mt-1">ECE Undergraduate</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-purple-400">8+ Skills</span>
            <span className="text-xs font-mono text-slate-400 mt-1">Advanced Tech Capabilities</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-blue-400">40+</span>
            <span className="text-xs font-mono text-slate-400 mt-1">Certifications & Courses</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-pink-400">2100+</span>
            <span className="text-xs font-mono text-slate-400 mt-1">LinkedIn Followers</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col items-center text-center col-span-2 sm:col-span-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">3 Medals</span>
            <span className="text-xs font-mono text-slate-400 mt-1">NCC Awards (2 Gold, 1 Silver)</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
