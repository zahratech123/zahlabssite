import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState('INITIALIZING AI PORTFOLIO ENGINE...');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next > 30 && next < 60) {
          setStageText('LOADING ECE HARDWARE & ML MODULES...');
        } else if (next >= 60 && next < 90) {
          setStageText('VERIFYING 40+ CERTIFICATIONS & CERTIFICATES...');
        } else if (next >= 90) {
          setStageText('ACTIVATING ZAHRA XTECH PORTFOLIO...');
        }
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#0b0f19] flex flex-col items-center justify-center p-6 text-slate-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Glowing Ambient Halo */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
          <div className="absolute w-[280px] h-[280px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

          <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center">
            {/* Animated Logo Icon */}
            <motion.div
              className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center mb-6 glow-cyan"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Cpu className="w-10 h-10 text-cyan-400" />
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>

            {/* Title & Brand */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-3xl font-display font-bold tracking-tight text-gradient-cyan-purple mb-1">
                Zahra Zaranwala
              </h1>
              <p className="text-xs font-mono text-cyan-400/80 uppercase tracking-widest mb-6 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Building Intelligent Digital Solutions
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-900/80 border border-slate-800 rounded-full h-3 p-0.5 overflow-hidden mb-4 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
              </motion.div>
            </div>

            {/* Status Info */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400/90 truncate">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                {stageText}
              </span>
              <span className="font-bold text-cyan-300 ml-2">{progress}%</span>
            </div>

            {/* Diagnostics Tags */}
            <div className="mt-8 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 w-full">
              <div className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800 rounded-md px-2.5 py-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                <span>Final Year ECE</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800 rounded-md px-2.5 py-1.5">
                <CheckCircle2 className="w-3 h-3 text-purple-400" />
                <span>40+ Certifications</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800 rounded-md px-2.5 py-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                <span>NCC Medals</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800 rounded-md px-2.5 py-1.5">
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                <span>Google Ambassador</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
