'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { developerInfo } from '../../data/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

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

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background glow effect (refined, non-excessive) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#059669]/15 via-[#57D6C5]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs with Framer Motion (Focused Element) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small introduction kicker & availability */}
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

            {/* Action Buttons & Socials */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  as="a"
                  href="#projects"
                  variant="primary"
                  size="lg"
                  icon={<ArrowDown className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  as="a"
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
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

            {/* Micro Tech Stack Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#A1A1AA]"
            >
              <span className="font-medium text-[#F5F5F7] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Specialization:
              </span>
              {['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Zustand'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/8 hover:border-[#10B981]/40 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: High-Tech Code & Architectural Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#171C26] border border-white/10 shadow-2xl p-5 sm:p-6 overflow-hidden">
              {/* Window Header */}
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
                <div className="pl-4">
                  strengths: [
                </div>
                <div className="pl-8 text-emerald-400">
                  "Component Architecture",
                </div>
                <div className="pl-8 text-emerald-400">
                  "Responsive UI Systems",
                </div>
                <div className="pl-8 text-emerald-400">
                  "High Performance &amp; a11y"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  philosophy: <span className="text-amber-300">"Clean, testable, user-first code"</span>,
                </div>
                <div className="pl-4">
                  isAvailable: <span className="text-[#57D6C5]">true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Bottom Quick Feature Highlights */}
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
        </div>
      </Container>
    </section>
  );
};
