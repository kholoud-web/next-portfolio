'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';

interface HeroSpecializationChipsProps {
  variants: Variants;
}

const specializations = ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Zustand'];

export const HeroSpecializationChips: React.FC<HeroSpecializationChipsProps> = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#A1A1AA]"
    >
      <span className="font-medium text-[#F5F5F7] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
        Specialization:
      </span>
      {specializations.map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/8 hover:border-[#10B981]/40 hover:text-white transition-colors cursor-default"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
};
