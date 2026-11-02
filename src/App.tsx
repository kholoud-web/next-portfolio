/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { SkillsSection } from './components/sections/SkillsSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { ContactSection } from './components/sections/ContactSection';
import { CaseStudyView } from './components/projects/CaseStudyView';
import { LivePreviewModal } from './components/projects/LivePreviewModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { projects } from './data/projects';
import { Project } from './types/project';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [livePreviewProject, setLivePreviewProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // URL Hash & History management for deep-linking `/projects/[slug]`
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projects/')) {
        const slug = hash.replace('#/projects/', '');
        const matchedProject = projects.find((p) => p.slug === slug);
        if (matchedProject) {
          setSelectedCaseStudy(matchedProject);
          return;
        }
      }
      if (!hash.startsWith('#/projects/')) {
        setSelectedCaseStudy(null);
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Track active section for top navigation
  useEffect(() => {
    if (selectedCaseStudy) return;

    const sections = ['home', 'about', 'projects', 'skills', 'philosophy', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCaseStudy]);

  const handleSelectCaseStudy = (project: Project) => {
    setSelectedCaseStudy(project);
    window.location.hash = `#/projects/${project.slug}`;
  };

  const handleBackToProjects = () => {
    setSelectedCaseStudy(null);
    window.location.hash = '#projects';
  };

  const handlePreviewLive = (project: Project) => {
    setLivePreviewProject(project);
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F5F5F7] flex flex-col antialiased selection:bg-[#8B7CFF]/30 selection:text-white">
      {/* Top Navbar adhering to Top Bar Contract */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={selectedCaseStudy ? 'projects' : activeSection}
      />

      <main className="flex-1">
        {selectedCaseStudy ? (
          /* Dynamic Case Study Route View */
          <CaseStudyView
            project={selectedCaseStudy}
            onBack={handleBackToProjects}
            onPreviewLive={handlePreviewLive}
          />
        ) : (
          /* Homepage View with All Curated Sections */
          <>
            <HeroSection />
            <AboutSection />
            <FeaturedProjects
              onSelectCaseStudy={handleSelectCaseStudy}
              onPreviewLive={handlePreviewLive}
            />
            <SkillsSection />
            <PhilosophySection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Live Demo Preview Modal */}
      <LivePreviewModal
        project={livePreviewProject}
        isOpen={!!livePreviewProject}
        onClose={() => setLivePreviewProject(null)}
        onOpenCaseStudy={handleSelectCaseStudy}
      />
    </div>
  );
}
