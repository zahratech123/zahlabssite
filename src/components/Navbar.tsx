import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Bot, Menu, X, Sparkles, Award, Code2, FolderGit2, GraduationCap, Mail, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenAiAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme, onOpenAiAssistant }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: Sparkles },
    { name: 'About', href: '#about', icon: UserCheck },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'AI Track', href: '#ai-track', icon: Bot },
    { name: 'Journey', href: '#journey', icon: GraduationCap },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDarkMode 
          ? 'glass-panel py-3 shadow-2xl border-b border-white/10' 
          : 'glass-panel-light py-3 shadow-lg border-b border-slate-200'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-display font-bold text-lg ${
              isDarkMode ? 'bg-[#0b0f19] text-cyan-400' : 'bg-white text-blue-600'
            }`}>
              Z
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-slate-100 dark:text-slate-100 group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 dark:text-cyan-400 uppercase tracking-widest -mt-1">
              AI Engineer Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : isDarkMode 
                      ? 'text-slate-300 hover:text-white' 
                      : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-400/40"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <link.icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls (AI Assistant, Theme Switch, Mobile Toggle) */}
        <div className="flex items-center gap-3">
          
          {/* AI Assistant Interactive Trigger */}
          <button
            onClick={onOpenAiAssistant}
            className="relative group px-3.5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            title="Ask AI Assistant about Zahra"
          >
            <Bot className="w-4 h-4 text-cyan-200 animate-bounce" />
            <span className="hidden sm:inline font-semibold">Ask Zahra AI</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-200"></span>
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className={`p-2.5 rounded-full transition-all duration-300 border cursor-pointer ${
              isDarkMode
                ? 'bg-slate-900/80 border-slate-800 text-amber-300 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
            }`}
            aria-label="Toggle dark/light mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 border cursor-pointer ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800 text-slate-200'
                : 'bg-slate-100 border-slate-300 text-slate-800'
            }`}
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b px-4 py-6 ${
              isDarkMode ? 'bg-[#0b0f19]/95 border-slate-800' : 'bg-white/95 border-slate-200'
            } backdrop-blur-xl shadow-2xl`}
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30'
                      : isDarkMode
                        ? 'text-slate-300 hover:bg-slate-900'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <link.icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Government Engineering College, Dahod
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiAssistant();
                }}
                className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5"
              >
                <Bot className="w-4 h-4" />
                Launch AI Agent
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
