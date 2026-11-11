'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { developerInfo, navLinks } from '../../data/navigation';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0B0D12] pt-16 pb-12 text-[#A1A1AA] text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-[#F5F5F7] hover:text-[#10B981] transition-colors inline-block"
            >
              {developerInfo.name}
            </a>
            <p className="text-sm text-[#A1A1AA] max-w-md leading-relaxed">
              Frontend Developer specializing in React, Next.js, and TypeScript. Engineering accessible, clean, and high-performance digital experiences.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#171C26] text-[#F5F5F7] hover:text-[#10B981] hover:border-white/20 border border-white/10 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#171C26] text-[#F5F5F7] hover:text-[#10B981] hover:border-white/20 border border-white/10 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${developerInfo.email}`}
                className="p-2.5 rounded-lg bg-[#171C26] text-[#F5F5F7] hover:text-[#10B981] hover:border-white/20 border border-white/10 transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5F5F7] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus & Location */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] mb-4">
              Availability
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-xs text-[#57D6C5] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#57D6C5]" />
                Open for Frontend Roles &amp; Contracts
              </p>
              <p className="text-xs text-[#A1A1AA]">
                {developerInfo.location}
              </p>
              <p className="text-xs text-[#A1A1AA]">
                Inquiries: <br />
                <span className="text-[#F5F5F7] select-all">{developerInfo.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {developerInfo.name}. All rights reserved. Built with React, Next.js architecture, TypeScript &amp; Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
