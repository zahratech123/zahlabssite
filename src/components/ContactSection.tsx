import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check, Sparkles, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Direct Communication</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 mb-4"
          >
            Get In <span className="text-gradient-cyan-purple">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-sans"
          >
            Open for AI engineering internships, research collaborations, technical queries, or hiring discussions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-500/40 flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Primary Contact Email
              </h4>
              <p className="text-base font-mono font-semibold text-slate-100 break-all">
                {PERSONAL_INFO.email}
              </p>
              <p className="text-xs font-mono text-slate-400 break-all mt-1">
                Secondary: {PERSONAL_INFO.altEmail}
              </p>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all space-y-4"
            >
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Professional Networks
              </h4>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-xs font-mono font-bold">LinkedIn Profile</p>
                    <p className="text-[11px] font-mono text-slate-400">2100+ Followers • 50+ Posts</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-xs font-mono font-bold">GitHub Repositories</p>
                    <p className="text-[11px] font-mono text-slate-400">@zahratech123</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Institution Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-white/10 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Location & Campus
                </h4>
                <p className="text-sm font-display font-bold text-slate-100">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Department of Electronics & Communication Engineering
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl relative"
            >
              <h3 className="text-2xl font-display font-bold text-slate-100 mb-2">
                Send a Message
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Fill out the form below to initiate direct communication
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-cyan-950/60 border border-cyan-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-slate-100">Message Delivered!</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    Thank you for reaching out. Zahra will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      placeholder="AI Engineering Internship / Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hello Zahra, I saw your impressive ECE background and AI goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
