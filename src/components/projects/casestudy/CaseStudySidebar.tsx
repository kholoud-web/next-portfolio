'use client';

import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Project } from '../../../types/project';
import { Button } from '../../ui/Button';

interface CaseStudySidebarProps {
  project: Project;
  onPreviewLive: (project: Project) => void;
}

export const CaseStudySidebar: React.FC<CaseStudySidebarProps> = ({
  project,
  onPreviewLive
}) => {
  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Main Features Card */}
      <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#10B981]">
          Core Features Implemented
        </h3>
        <ul className="space-y-3 text-sm text-[#D1D5DB]">
          {project.caseStudy.mainFeatures.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#57D6C5] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies Used Card */}
      <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#10B981]">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded bg-[#11151D] text-[#F5F5F7] border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#171C26] to-[#11151D] border border-white/10 space-y-4">
        <h4 className="text-base font-bold text-[#F5F5F7]">
          Explore this Application
        </h4>
        <p className="text-xs text-[#A1A1AA] leading-relaxed">
          Test the interactive frontend interface, component behavior, and responsive layouts.
        </p>
        <Button
          variant="primary"
          size="md"
          className="w-full"
          icon={<ArrowUpRight className="w-4 h-4" />}
          onClick={() => onPreviewLive(project)}
        >
          Launch Interactive Demo
        </Button>
      </div>
    </div>
  );
};
