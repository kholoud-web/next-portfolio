import React from 'react';
import { X, Download, Printer, Check, Copy, ExternalLink } from 'lucide-react';
import { developerInfo } from '../../data/navigation';
import { skillCategories, professionalStrengths } from '../../data/skills';
import { Button } from '../ui/Button';

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
- Zustand, TanStack Query, React Context
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
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#171C26]/70">
          <div>
            <h3 id="resume-modal-title" className="text-lg font-semibold text-[#F5F5F7]">
              Curriculum Vitae Preview
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-0.5">
              Kholoud Mahmoud · Frontend Developer (React &amp; Next.js)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              onClick={handleCopy}
            >
              {copied ? 'Copied' : 'Copy Text'}
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5" />}
              onClick={handlePrint}
            >
              Print / Save PDF
            </Button>
            <button
              onClick={onClose}
              className="p-2 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg hover:bg-white/5 transition-colors ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF]"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Document */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-[#0B0D12]/50 text-sm leading-relaxed">
          {/* Candidate Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7]">
              {developerInfo.name}
            </h1>
            <p className="text-base text-[#8B7CFF] font-medium mt-1">
              {developerInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#A1A1AA] mt-3">
              <span>{developerInfo.email}</span>
              <span aria-hidden="true">·</span>
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#57D6C5] transition-colors inline-flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#57D6C5] transition-colors inline-flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <span aria-hidden="true">·</span>
              <span>Remote / Worldwide</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B7CFF] mb-2">
              Professional Summary
            </h4>
            <p className="text-[#D1D5DB] text-sm leading-relaxed">
              Frontend Developer focused on building modern, responsive, accessible, and high-performance web applications using React and Next.js (App Router). Experienced in designing reusable component architectures, managing complex client-side state with Zustand and TanStack Query, and implementing pixel-perfect UI systems with Tailwind CSS. Brings a strong foundation of user empathy, structured communication, and client alignment developed through prior professional client-facing experience.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B7CFF] mb-3">
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
                        {idx < cat.skills.length - 1 && <span aria-hidden="true" className="text-white/20">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strengths */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B7CFF] mb-3">
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

          {/* Career Journey & Transferable Skills */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B7CFF] mb-2">
              Career Journey &amp; Transferable Expertise
            </h4>
            <p className="text-[#A1A1AA] text-xs leading-relaxed">
              Transitioned into software engineering with a proven background in client service and high-touch consultative engagements. This background provides distinct engineering advantages: proactive problem decomposition, deep listening to real user requirements, clear cross-functional stakeholder communication, and meticulous attention to accessibility and UX clarity.
            </p>
          </div>
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
