import React from 'react';
import { ShieldAlert, Cpu, Layers } from 'lucide-react';
import { CaseStudy } from '../../../types/project';
import { CaseStudyChallenges } from './CaseStudyChallenges';

interface CaseStudyNarrativeProps {
  caseStudy: CaseStudy;
}

export const CaseStudyNarrative: React.FC<CaseStudyNarrativeProps> = ({ caseStudy }) => {
  return (
    <div className="space-y-12">
      {/* 1. Problem Statement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          Problem Statement
        </h2>
        <p className="text-base text-[#D1D5DB] leading-relaxed">
          {caseStudy.problemStatement}
        </p>
      </section>

      {/* 2. My Role & Responsibilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#10B981]" />
          My Role &amp; Contribution
        </h2>
        <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10">
          <p className="text-base text-[#D1D5DB] leading-relaxed">
            {caseStudy.role}
          </p>
        </div>
      </section>

      {/* 3. Technical Decisions & Rationale */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#57D6C5]" />
          Technical Decisions &amp; Trade-offs
        </h2>
        <div className="space-y-4">
          {caseStudy.technicalDecisions.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#171C26] border border-white/5 space-y-2"
            >
              <h3 className="text-base font-semibold text-[#F5F5F7]">
                {item.decision}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {item.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Architecture Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#F5F5F7]">
          Architecture Overview
        </h2>
        <p className="text-base text-[#D1D5DB] leading-relaxed">
          {caseStudy.architectureOverview}
        </p>
      </section>

      {/* 5. Challenges and Solutions */}
      <CaseStudyChallenges challenges={caseStudy.challengesAndSolutions} />
    </div>
  );
};
