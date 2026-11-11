'use client';

import React from 'react';
import { ExternalLink, Printer, Copy, Check, X } from 'lucide-react';
import { developerInfo } from '../../../data/navigation';
import { Button } from '../../ui/Button';

interface ResumeHeaderProps {
  onClose: () => void;
  onCopy: () => void;
  onPrint: () => void;
  copied: boolean;
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  onClose,
  onCopy,
  onPrint,
  copied,
}) => {
  return (
    <>
      {/* Modal Top Bar */}
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
            onClick={onCopy}
          >
            {copied ? 'Copied' : 'Copy Text'}
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5" />}
            onClick={onPrint}
          >
            Print / Save PDF
          </Button>
          <button
            onClick={onClose}
            className="p-2 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg hover:bg-white/5 transition-colors ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] cursor-pointer"
            aria-label="Close resume preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Candidate Document Header */}
      <div className="border-b border-white/10 pb-6 text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7]">
          {developerInfo.name}
        </h1>
        <p className="text-base text-[#10B981] font-medium mt-1">
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
    </>
  );
};
