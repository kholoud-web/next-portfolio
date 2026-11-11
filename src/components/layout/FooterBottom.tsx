'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { developerInfo } from '../../data/navigation';

export const FooterBottom: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
      <p suppressHydrationWarning>
        © {new Date().getFullYear()} {developerInfo.name}. All rights reserved. Built with React, Next.js architecture, TypeScript &amp; Tailwind CSS.
      </p>
      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded p-1 cursor-pointer"
      >
        <span>Back to top</span>
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
