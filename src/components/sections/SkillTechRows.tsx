'use client';

import React from 'react';
import { SkillItem } from '../../types/skill';

interface SkillTechRowsProps {
  skills: SkillItem[];
}

export const SkillTechRows: React.FC<SkillTechRowsProps> = ({ skills }) => {
  return (
    <div className="space-y-2.5">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center justify-between p-2.5 rounded-lg bg-[#11151D] border border-white/5 group-hover:border-white/10 hover:!border-[#059669]/30 transition-all text-xs"
        >
          <span className={`font-medium transition-colors ${skill.highlight ? 'text-white' : 'text-[#D1D5DB]'}`}>
            {skill.name}
          </span>
          {skill.level && (
            <span className="text-[11px] text-[#A1A1AA] font-mono group-hover:text-[#57D6C5] transition-colors">
              {skill.level}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
