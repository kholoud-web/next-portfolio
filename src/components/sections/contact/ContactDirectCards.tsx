'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { developerInfo } from '../../../data/navigation';
import { ContactAvailabilityCard } from './ContactAvailabilityCard';

export const ContactDirectCards: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="lg:col-span-5 space-y-6 text-left">
      <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-4">
        <h3 className="text-lg font-bold text-[#F5F5F7]">
          Direct Communication
        </h3>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">
          Choose the direct contact method that works best for you. I respond promptly to email and WhatsApp messages.
        </p>

        {/* Email item with copy action */}
        <div className="p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2 rounded-lg bg-[#171C26] text-[#10B981] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] text-[#A1A1AA] block">Direct Email</span>
              <a
                href={`mailto:${developerInfo.email}`}
                className="text-xs sm:text-sm font-medium text-white hover:text-[#10B981] transition-colors truncate block"
              >
                {developerInfo.email}
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="p-2 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Social Profiles */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={developerInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-[#171C26] text-[#10B981] group-hover:scale-105 transition-transform">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] text-[#A1A1AA] block">Connect</span>
              <span className="text-xs font-semibold text-white">LinkedIn</span>
            </div>
          </a>

          <a
            href={developerInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-[#171C26] text-[#10B981] group-hover:scale-105 transition-transform">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] text-[#A1A1AA] block">Code Repos</span>
              <span className="text-xs font-semibold text-white">GitHub</span>
            </div>
          </a>
        </div>
      </div>

      <ContactAvailabilityCard />
    </div>
  );
};
