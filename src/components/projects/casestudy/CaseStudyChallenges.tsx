import React from 'react';
import { ChallengeSolution } from '../../../types/project';

interface CaseStudyChallengesProps {
  challenges: ChallengeSolution[];
}

export const CaseStudyChallenges: React.FC<CaseStudyChallengesProps> = ({ challenges }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-[#F5F5F7]">
        Key Engineering Challenges &amp; Solutions
      </h2>
      <div className="space-y-4">
        {challenges.map((c, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#11151D] border border-white/10 space-y-3"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold block mb-1">
                Challenge
              </span>
              <p className="text-sm text-[#F5F5F7] font-medium">
                {c.challenge}
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                Engineered Solution
              </span>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {c.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
