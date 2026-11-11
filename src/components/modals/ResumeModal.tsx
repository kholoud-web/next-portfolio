'use client';

import React from 'react';
import { developerInfo } from '../../data/navigation';
import { Button } from '../ui/Button';
import { ResumeHeader } from './resume/ResumeHeader';
import { ResumeExperienceSummary } from './resume/ResumeExperienceSummary';
import { ResumeSkillsGrid } from './resume/ResumeSkillsGrid';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const text = `
${developerInfo.name}
${developerInfo.title}
Email: ${developerInfo.email}
GitHub: ${developerInfo.github}
LinkedIn: ${developerInfo.linkedin}

SUMMARY:
${developerInfo.shortBio}

CORE SKILLS:
- React.js, Next.js (App Router), TypeScript, JavaScript ES6+, HTML5, CSS3
- Tailwind CSS, shadcn/ui, MUI, Bootstrap
- Zustand, TanStack Query, React Context , Redux
- React Hook Form, Zod
- REST APIs, Git & GitHub, Figma
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#11151D] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <ResumeHeader
          onClose={onClose}
          onCopy={handleCopy}
          onPrint={handlePrint}
          copied={copied}
        />

        {/* Modal Body / Resume Document */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-[#0B0D12]/50 text-sm leading-relaxed">
          <ResumeExperienceSummary />
          <ResumeSkillsGrid />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#171C26]/70 flex items-center justify-between">
          <span className="text-xs text-[#A1A1AA]">
            PDF version generated for developer review · Updated 2026
          </span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
