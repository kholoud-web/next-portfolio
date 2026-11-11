import React from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

const transferSkills = [
  {
    title: 'Active Listening & Requirement Discovery',
    detail: 'Translating ambiguity and user pain points into precise functional technical specifications.'
  },
  {
    title: 'Meticulous UX & Accessibility',
    detail: 'Treating every micro-interaction, keyboard flow, and loading state with respect for the end human user.'
  },
  {
    title: 'Transparent Communication',
    detail: 'Partnering smoothly with product managers, backend engineers, and design stakeholders to deliver on deadlines.'
  }
];

export const AboutTransferableSkills: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#57D6C5]">
        <MessageSquare className="w-4 h-4" />
        <span>The Human Aspect of Engineering</span>
      </div>
      <h3 className="text-xl font-bold text-[#F5F5F7]">
        Customer-Centric Roots &amp; Cross-Functional Alignment
      </h3>
      <p className="text-sm text-[#A1A1AA] leading-relaxed">
        Prior to software development, I cultivated extensive experience in client service and consultative customer interactions. That foundation transforms how I engineer software today:
      </p>
      <ul className="space-y-2 text-sm text-[#D1D5DB]">
        {transferSkills.map((skill) => (
          <li key={skill.title} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">{skill.title}:</strong> {skill.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
