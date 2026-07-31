import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsGallery } from './components/CertificationsGallery';
import { AiMlTrackSection } from './components/AiMlTrackSection';
import { TimelineSection } from './components/TimelineSection';
import { AchievementsSection } from './components/AchievementsSection';
import { GitHubContributions } from './components/GitHubContributions';
import { AiAssistantModal } from './components/AiAssistantModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-black ${
      isDarkMode ? 'bg-[#070a12] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Intro Cyber Diagnostic Loader */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Custom Particle Ring Cursor Follower */}
      <CustomCursor />

      {/* Three.js Interactive Starfield & Neural Constellation Canvas */}
      <ParticleCanvas isDarkMode={isDarkMode} />

      {/* Main Portfolio Structure */}
      {!isLoading && (
        <div className="relative z-10 flex flex-col min-h-screen">
          
          {/* Glassmorphic Navbar */}
          <Navbar
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
            onOpenAiAssistant={() => setIsAiModalOpen(true)}
          />

          <main className="flex-grow">
            {/* Hero Section */}
            <HeroSection
              isDarkMode={isDarkMode}
              onOpenAiAssistant={() => setIsAiModalOpen(true)}
            />

            {/* Academic & Profile Section */}
            <AboutSection isDarkMode={isDarkMode} />

            {/* Skills & Technical Progress Section */}
            <SkillsSection isDarkMode={isDarkMode} />

            {/* Featured Engineering Projects */}
            <ProjectsSection isDarkMode={isDarkMode} />

            {/* 40+ Certifications, Visits & Document Gallery */}
            <CertificationsGallery isDarkMode={isDarkMode} />

            {/* Special AI / ML Growth Track */}
            <AiMlTrackSection
              isDarkMode={isDarkMode}
              onOpenAiAssistant={() => setIsAiModalOpen(true)}
            />

            {/* Career Timeline & Milestones */}
            <TimelineSection isDarkMode={isDarkMode} />

            {/* National Medals & Badges */}
            <AchievementsSection isDarkMode={isDarkMode} />

            {/* GitHub Contributions Heatmap */}
            <GitHubContributions isDarkMode={isDarkMode} />

            {/* Contact & Inquiries */}
            <ContactSection isDarkMode={isDarkMode} />
          </main>

          {/* Footer with Preserved Links */}
          <Footer isDarkMode={isDarkMode} />

          {/* Interactive Gemini AI Agent Modal */}
          <AiAssistantModal
            isOpen={isAiModalOpen}
            onClose={() => setIsAiModalOpen(false)}
          />

        </div>
      )}

    </div>
  );
}

export default App;
