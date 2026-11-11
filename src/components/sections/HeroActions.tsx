'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { developerInfo } from '../../data/navigation';
import { Button } from '../ui/Button';

interface HeroActionsProps {
  variants: Variants;
}

export const HeroActions: React.FC<HeroActionsProps> = ({ variants }) => {
  return (
    <motion.div variants={variants} className="pt-2 flex flex-wrap items-center gap-4">
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Button as="a" href="#projects" variant="primary" size="lg" icon={<ArrowDown className="w-4 h-4" />}>
          Explore My Work
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Button as="a" href="#contact" variant="secondary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
          Let's Talk
        </Button>
      </motion.div>

      <div className="flex items-center gap-2 pl-2">
        <motion.a
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={developerInfo.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="p-2.5 rounded-lg border border-white/10 bg-[#171C26]/80 text-[#A1A1AA] hover:text-[#F5F5F7] hover:border-[#10B981]/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={developerInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2.5 rounded-lg border border-white/10 bg-[#171C26]/80 text-[#A1A1AA] hover:text-[#F5F5F7] hover:border-[#10B981]/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  );
};
