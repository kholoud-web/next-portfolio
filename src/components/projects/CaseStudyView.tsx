'use client';

import React, { useEffect } from 'react';
import { Project } from '../../types/project';
import { Container } from '../ui/Container';
import { CaseStudyHero } from './casestudy/CaseStudyHero';
import { CaseStudyNarrative } from './casestudy/CaseStudyNarrative';
import { CaseStudySidebar } from './casestudy/CaseStudySidebar';

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
  onPreviewLive: (project: Project) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onBack,
  onPreviewLive
}) => {
  // Scroll to top when opening case study
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.slug]);

  return (
    <div className="min-h-screen bg-transparent text-[#F5F5F7] pt-24 pb-24 text-left">
      <Container>
        <CaseStudyHero
          project={project}
          onBack={onBack}
          onPreviewLive={onPreviewLive}
        />

        {/* Structured Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <CaseStudyNarrative caseStudy={project.caseStudy} />
          </div>
          <div className="lg:col-span-4">
            <CaseStudySidebar
              project={project}
              onPreviewLive={onPreviewLive}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
