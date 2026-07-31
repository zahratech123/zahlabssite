import React from 'react';
import { motion } from 'motion/react';
import { Github, GitCommit, GitFork, Star, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface GitHubContributionsProps {
  isDarkMode: boolean;
}

export const GitHubContributions: React.FC<GitHubContributionsProps> = ({ isDarkMode }) => {
  // Generated mock heatmap grid representing active contribution activity for zahratech123
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const totalBoxes = 52 * 7; // 52 weeks

  const getHeatColor = (index: number) => {
    // Deterministic pseudo activity
    const val = (index * 17 + 3) % 10;
    if (val > 8) return 'bg-cyan-400 border-cyan-300';
    if (val > 6) return 'bg-cyan-600 border-cyan-500';
    if (val > 4) return 'bg-cyan-900 border-cyan-800';
    if (val > 2) return 'bg-slate-900 border-slate-800';
    return 'bg-slate-950 border-slate-900';
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 relative shadow-2xl">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-100">
                  GitHub Open Source Activity
                </h3>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>@zahratech123</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <GitCommit className="w-4 h-4 text-cyan-400" />
                <span>500+ Commits</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Active Repos</span>
              </div>
            </div>
          </div>

          {/* Simulated Contribution Heatmap */}
          <div className="overflow-x-auto pb-4 mb-6">
            <div className="min-w-[650px]">
              <div className="flex text-[10px] font-mono text-slate-500 mb-2 justify-between px-2">
                {months.map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>

              <div className="grid grid-rows-7 grid-flow-col gap-1">
                {Array.from({ length: 364 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-sm border ${getHeatColor(i)} transition-colors`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Learn how code is structured across repositories</span>
            <div className="flex items-center gap-1">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-950 border border-slate-900" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-900 border border-cyan-800" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600 border border-cyan-500" />
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 border border-cyan-300" />
              <span>More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
