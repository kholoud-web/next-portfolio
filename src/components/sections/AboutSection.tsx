import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AboutTransferableSkills } from './AboutTransferableSkills';
import { AboutStrengthsList } from './AboutStrengthsList';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#11151D] border-y border-white/5">
      <Container>
        <SectionHeading
          kicker="Background &amp; Expertise"
          title="A Little About Me"
          description="Crafting high-performance digital products at the intersection of robust component architecture, responsive design, and deep user empathy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Transferable Skills */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed text-left">
            <p className="text-[#F5F5F7] font-medium text-lg sm:text-xl">
              I am a Frontend Developer dedicated to building clean, accessible, and resilient web applications using React, Next.js, and TypeScript.
            </p>

            <p>
              My engineering approach centers on modularity and long-term maintainability. I don't just write code that renders on a screen; I design reusable component hierarchies, optimize render lifecycles, and implement design systems that allow teams to move rapidly without introducing technical debt.
            </p>

            <AboutTransferableSkills />

            <p className="text-sm text-[#A1A1AA]">
              Whether I am orchestrating state with Zustand, integrating complex REST APIs, or tuning Core Web Vitals to sub-second load times, my goal remains consistent: build software that is effortless for users to interact with and dependable for engineering teams to maintain.
            </p>
          </div>

          {/* Right Column: Key Pillars & Technical Strengths */}
          <AboutStrengthsList />
        </div>
      </Container>
    </section>
  );
};
