'use client';

import React from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../../../types/project';
import { Button } from '../../ui/Button';
import { CaseStudyHeroBanner } from './CaseStudyHeroBanner';

interface CaseStudyHeroProps {
  project: Project;
  onBack: () => void;
  onPreviewLive: (project: Project) => void;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  project,
  onBack,
  onPreviewLive
}) => {
  return (
    <>
      {/* Top Back Navigation Bar */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded px-2 py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </button>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/25 bg-[#171C26]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          )}
          <Button
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            onClick={() => onPreviewLive(project)}
          >
            Interactive Demo
          </Button>
        </div>
      </div>

      {/* Case Study Title & Overview */}
      <div className="max-w-4xl space-y-4 mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
          <span>Case Study</span>
          <span aria-hidden="true">·</span>
          <span>{project.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] [text-wrap:balance]">
          {project.title}
        </h1>

        <p className="text-xl text-[#57D6C5] font-medium">
          {project.subtitle}
        </p>

        <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          {project.caseStudy.overview}
        </p>
      </div>

      <CaseStudyHeroBanner project={project} />
    </>
  );
};
