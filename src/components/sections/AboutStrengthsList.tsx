import React from 'react';
import { professionalStrengths } from '../../data/skills';

export const AboutStrengthsList: React.FC = () => {
  return (
    <div className="lg:col-span-5 space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#10B981] mb-2 text-left">
        Core Technical Strengths
      </h3>

      <div className="space-y-3">
        {professionalStrengths.slice(0, 5).map((strength) => (
          <div
            key={strength.title}
            className="p-4 rounded-xl bg-[#171C26] border border-white/5 hover:border-white/15 transition-all text-left"
          >
            <h4 className="text-sm font-semibold text-[#F5F5F7] mb-1">
              {strength.title}
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              {strength.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quick highlight metric cards */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="p-4 rounded-xl bg-[#171C26] border border-white/5 text-left">
          <span className="text-2xl font-bold text-[#10B981] tabular-nums block">
            360px–4k
          </span>
          <span className="text-xs text-[#A1A1AA] mt-1 block">
            Fluid Responsive Scaling
          </span>
        </div>
        <div className="p-4 rounded-xl bg-[#171C26] border border-white/5 text-left">
          <span className="text-2xl font-bold text-[#57D6C5] tabular-nums block">
            WCAG AA
          </span>
          <span className="text-xs text-[#A1A1AA] mt-1 block">
            Accessibility Compliance
          </span>
        </div>
      </div>
    </div>
  );
};
