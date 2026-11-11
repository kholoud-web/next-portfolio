'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { HeroActions } from './HeroActions';
import { HeroSpecializationChips } from './HeroSpecializationChips';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export const HeroContent: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lg:col-span-7 space-y-6 text-left"
    >
      {/* Introduction kicker & availability */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#10B981] px-2.5 py-1 rounded-md bg-[#059669]/10 border border-[#059669]/20 inline-flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
          <Sparkles className="w-3 h-3 text-[#10B981]" />
          HELLO, I'M KHOLOUD
        </span>
        <span aria-hidden="true" className="text-white/20">·</span>
        <span className="text-xs text-[#57D6C5] flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-md bg-[#57D6C5]/10 border border-[#57D6C5]/20">
          <span className="w-2 h-2 rounded-full bg-[#57D6C5] animate-pulse shadow-[0_0_8px_#57D6C5]" />
          Available for New Roles &amp; Projects
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F7] leading-[1.1] [text-wrap:balance]"
      >
        Building Digital Experiences That{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#57D6C5] drop-shadow-[0_2px_16px_rgba(16,185,129,0.25)]">
          Make an Impact.
        </span>
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed [text-wrap:balance]"
      >
        I'm a Frontend Developer specializing in React and Next.js, focused on creating scalable, accessible, and high-performance web applications.
      </motion.p>

      <HeroActions variants={itemVariants} />
      <HeroSpecializationChips variants={itemVariants} />
    </motion.div>
  );
};
