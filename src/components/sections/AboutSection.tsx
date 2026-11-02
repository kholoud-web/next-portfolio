import React from 'react';
import { Layers, Zap, Users, MessageSquare, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { professionalStrengths } from '../../data/skills';

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
          {/* Left Column: Narrative & Career Journey */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed text-left">
            <p className="text-[#F5F5F7] font-medium text-lg sm:text-xl">
              I am a Frontend Developer dedicated to building clean, accessible, and resilient web applications using React, Next.js, and TypeScript.
            </p>

            <p>
              My engineering approach centers on modularity and long-term maintainability. I don't just write code that renders on a screen; I design reusable component hierarchies, optimize render lifecycles, and implement design systems that allow teams to move rapidly without introducing technical debt.
            </p>

            {/* Transferable Skills & Career Transition Spotlight */}
            <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#57D6C5]">
                <MessageSquare className="w-4 h-4" />
                <span>The Human Aspect of Engineering</span>
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F7]">
                Customer-Centric Roots &amp; Cross-Functional Alignment
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Prior to software development, I cultivated extensive experience in client service and consultative customer interactions. That foundation transforms how I engineer software today:
              </p>
              <ul className="space-y-2 text-sm text-[#D1D5DB]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7CFF] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Active Listening &amp; Requirement Discovery:</strong> Translating ambiguity and user pain points into precise functional technical specifications.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7CFF] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Meticulous UX &amp; Accessibility:</strong> Treating every micro-interaction, keyboard flow, and loading state with respect for the end human user.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B7CFF] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Transparent Communication:</strong> Partnering smoothly with product managers, backend engineers, and design stakeholders to deliver on deadlines.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-[#A1A1AA]">
              Whether I am orchestrating state with Zustand, integrating complex REST APIs, or tuning Core Web Vitals to sub-second load times, my goal remains consistent: build software that is effortless for users to interact with and dependable for engineering teams to maintain.
            </p>
          </div>

          {/* Right Column: Key Pillars & Technical Strengths */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8B7CFF] mb-2 text-left">
              Core Technical Strengths
            </h3>

            <div className="space-y-3">
              {professionalStrengths.slice(0, 5).map((strength) => (
                <div
                  key={strength.title}
                  className="p-4 rounded-xl bg-[#171C26] border border-white/5 hover:border-white/15 transition-all text-left"
                >
                  <h4 className="text-sm font-semibold text-[#F5F5F7] mb-1">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick highlight metric cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#171C26] border border-white/5 text-left">
                <span className="text-2xl font-bold text-[#8B7CFF] tabular-nums block">
                  360px–4k
                </span>
                <span className="text-xs text-[#A1A1AA] mt-1 block">
                  Fluid Responsive Scaling
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#171C26] border border-white/5 text-left">
                <span className="text-2xl font-bold text-[#57D6C5] tabular-nums block">
                  WCAG AA
                </span>
                <span className="text-xs text-[#A1A1AA] mt-1 block">
                  Accessibility Compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
