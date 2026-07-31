import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#070a12] text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 flex items-center justify-center font-bold text-white font-display">
                Z
              </div>
              <span className="font-display font-bold text-lg text-slate-100">
                Zahra Zaranwala
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400">
              Building Intelligent Digital Solutions • Final Year ECE @ GEC Dahod
            </p>
          </div>

          {/* Legacy Portfolio Sites Preserved */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs font-mono">
            <span className="text-slate-500 uppercase tracking-wider mb-1.5">
              Source Portfolio Sites Preserved:
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://zahralabssite.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>ZahraLabs Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://zaacheivelabssite.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline flex items-center gap-1"
              >
                <span>ZaacheiveLabs Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Zahra Zaranwala. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with Next.js & AI Innovation for</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </p>
        </div>

      </div>
    </footer>
  );
};
