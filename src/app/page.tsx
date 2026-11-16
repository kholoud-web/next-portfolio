'use client';

import React, { useState } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { LivePreviewModal } from '../components/projects/LivePreviewModal';
import { Project } from '../types/project';

export default function HomePage() {
  const [livePreviewProject, setLivePreviewProject] = useState<Project | null>(null);

  const handlePreviewLive = (project: Project) => {
    setLivePreviewProject(project);
  };

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects onPreviewLive={handlePreviewLive} />
      <SkillsSection />
      <ContactSection />

      {/* Interactive Live Demo Preview Modal */}
      <LivePreviewModal
        project={livePreviewProject}
        isOpen={!!livePreviewProject}
        onClose={() => setLivePreviewProject(null)}
      />
    </>
  );
}
