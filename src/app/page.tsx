'use client';

import React, { useState } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { LivePreviewModal } from '../components/projects/LivePreviewModal';
import { Project } from '../types/project';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [livePreviewProject, setLivePreviewProject] = useState<Project | null>(null);

  const handleSelectCaseStudy = (project: Project) => {
    router.push(`/projects/${project.slug}`);
  };

  const handlePreviewLive = (project: Project) => {
    setLivePreviewProject(project);
  };

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects
        onSelectCaseStudy={handleSelectCaseStudy}
        onPreviewLive={handlePreviewLive}
      />
      <SkillsSection />
      <ContactSection />

      {/* Interactive Live Demo Preview Modal */}
      <LivePreviewModal
        project={livePreviewProject}
        isOpen={!!livePreviewProject}
        onClose={() => setLivePreviewProject(null)}
        onOpenCaseStudy={handleSelectCaseStudy}
      />
    </>
  );
}
