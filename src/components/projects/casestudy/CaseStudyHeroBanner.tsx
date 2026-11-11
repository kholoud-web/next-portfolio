import React from 'react';
import { Project } from '../../../types/project';

interface CaseStudyHeroBannerProps {
  project: Project;
}

export const CaseStudyHeroBanner: React.FC<CaseStudyHeroBannerProps> = ({ project }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#171C26] border border-white/10 shadow-2xl mb-16">
      <img
        src={project.image}
        alt={`${project.title} detailed screenshot`}
        className="w-full h-auto object-cover max-h-[640px]"
        referrerPolicy="no-referrer"
      />
      <div className="p-4 sm:p-6 bg-[#171C26] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A1A1AA]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-white">Technologies:</span>
          {project.technologies.map((t, idx) => (
            <span key={t} className="text-[#D1D5DB]">
              {t}{idx < project.technologies.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
        {project.caseStudy.metrics && (
          <div className="flex items-center gap-6">
            {project.caseStudy.metrics.map((m) => (
              <div key={m.label} className="text-right">
                <span className="text-[#10B981] font-bold tabular-nums block text-sm">
                  {m.value}
                </span>
                <span className="text-[11px] text-[#A1A1AA] block">{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
