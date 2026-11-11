'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { developerInfo } from '../../data/navigation';

export const HeroCodeCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
      className="lg:col-span-5"
    >
      <div className="relative rounded-2xl bg-[#171C26] border border-white/10 shadow-2xl p-5 sm:p-6 overflow-hidden">
        {/* Terminal Window Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
            <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
            <span>kholoud.dev.tsx</span>
          </div>
        </div>

        {/* Code Snippet Display */}
        <div className="mt-4 font-mono text-xs sm:text-[13px] leading-relaxed text-[#D1D5DB] space-y-1.5">
          <div>
            <span className="text-[#10B981]">const</span>{' '}
            <span className="text-[#57D6C5]">developer</span> = &#123;
          </div>
          <div className="pl-4">
            name: <span className="text-amber-300">"{developerInfo.name}"</span>,
          </div>
          <div className="pl-4">
            role: <span className="text-amber-300">"React &amp; Next.js Specialist"</span>,
          </div>
          <div className="pl-4">strengths: [</div>
          <div className="pl-8 text-emerald-400">"Component Architecture",</div>
          <div className="pl-8 text-emerald-400">"Responsive UI Systems",</div>
          <div className="pl-8 text-emerald-400">"High Performance &amp; a11y"</div>
          <div className="pl-4">],</div>
          <div className="pl-4">
            philosophy: <span className="text-amber-300">"Clean, testable, user-first code"</span>,
          </div>
          <div className="pl-4">
            isAvailable: <span className="text-[#57D6C5]">true</span>
          </div>
          <div>&#125;;</div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
          <div className="p-3 rounded-xl bg-[#11151D] border border-white/5">
            <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA] block mb-1">
              Design System
            </span>
            <span className="text-xs font-semibold text-[#F5F5F7]">
              Tailwind &amp; shadcn/ui
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#11151D] border border-white/5">
            <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA] block mb-1">
              Architecture
            </span>
            <span className="text-xs font-semibold text-[#F5F5F7]">
              Modern App Router
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
