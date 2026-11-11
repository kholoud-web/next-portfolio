import React from 'react';
import { skillCategories, professionalStrengths } from '../../../data/skills';

export const ResumeSkillsGrid: React.FC = () => {
  return (
    <div className="space-y-8 text-left">
      {/* Technical Skills Categories */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10B981] mb-3">
          Technical Competencies
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="p-3.5 rounded-lg bg-[#171C26]/50 border border-white/5">
              <span className="font-semibold text-xs text-[#F5F5F7] block mb-1">
                {cat.name}
              </span>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#A1A1AA]">
                {cat.skills.map((s, idx) => (
                  <React.Fragment key={s.name}>
                    <span className={s.highlight ? 'text-[#F5F5F7]' : ''}>{s.name}</span>
                    {idx < cat.skills.length - 1 && (
                      <span aria-hidden="true" className="text-white/20">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Architectural Strengths */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10B981] mb-3">
          Core Architectural Strengths
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {professionalStrengths.map((str) => (
            <div key={str.title} className="p-3 rounded-lg bg-[#11151D] border border-white/5">
              <p className="font-medium text-[#F5F5F7] mb-1">{str.title}</p>
              <p className="text-[#A1A1AA] leading-normal">{str.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
