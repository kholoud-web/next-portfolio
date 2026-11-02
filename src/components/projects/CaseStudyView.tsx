import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2, Layers, Cpu, ShieldAlert, Sparkles } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
  onPreviewLive: (project: Project) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onBack,
  onPreviewLive
}) => {
  // Scroll to top when opening case study
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.slug]);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F5F5F7] pt-24 pb-24 text-left">
      <Container>
        {/* Top Back Navigation Bar */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF] rounded px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/25 bg-[#171C26]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              onClick={() => onPreviewLive(project)}
            >
              Interactive Demo
            </Button>
          </div>
        </div>

        {/* Case Study Header */}
        <div className="max-w-4xl space-y-4 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B7CFF]">
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7] [text-wrap:balance]">
            {project.title}
          </h1>

          <p className="text-xl text-[#57D6C5] font-medium">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            {project.caseStudy.overview}
          </p>
        </div>

        {/* Hero Screenshot Frame */}
        <div className="relative rounded-2xl overflow-hidden bg-[#171C26] border border-white/10 shadow-2xl mb-16">
          <img
            src={project.image}
            alt={`${project.title} detailed screenshot`}
            className="w-full h-auto object-cover max-h-[640px]"
            referrerPolicy="no-referrer"
          />
          <div className="p-4 sm:p-6 bg-[#171C26] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A1A1AA]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-white">Technologies:</span>
              {project.technologies.map((t, idx) => (
                <span key={t} className="text-[#D1D5DB]">
                  {t}{idx < project.technologies.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
            {project.caseStudy.metrics && (
              <div className="flex items-center gap-6">
                {project.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="text-right">
                    <span className="text-[#8B7CFF] font-bold tabular-nums block text-sm">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-[#A1A1AA] block">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Structured Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Problem Statement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                Problem Statement
              </h2>
              <p className="text-base text-[#D1D5DB] leading-relaxed">
                {project.caseStudy.problemStatement}
              </p>
            </section>

            {/* 2. My Role & Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#8B7CFF]" />
                My Role &amp; Contribution
              </h2>
              <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10">
                <p className="text-base text-[#D1D5DB] leading-relaxed">
                  {project.caseStudy.role}
                </p>
              </div>
            </section>

            {/* 3. Technical Decisions & Rationale */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#57D6C5]" />
                Technical Decisions &amp; Trade-offs
              </h2>
              <div className="space-y-4">
                {project.caseStudy.technicalDecisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#171C26] border border-white/5 space-y-2"
                  >
                    <h3 className="text-base font-semibold text-[#F5F5F7]">
                      {item.decision}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {item.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Architecture Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#F5F5F7]">
                Architecture Overview
              </h2>
              <p className="text-base text-[#D1D5DB] leading-relaxed">
                {project.caseStudy.architectureOverview}
              </p>
            </section>

            {/* 5. Challenges and Solutions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#F5F5F7]">
                Key Engineering Challenges &amp; Solutions
              </h2>
              <div className="space-y-4">
                {project.caseStudy.challengesAndSolutions.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#11151D] border border-white/10 space-y-3"
                  >
                    <div>
                      <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold block mb-1">
                        Challenge
                      </span>
                      <p className="text-sm text-[#F5F5F7] font-medium">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                        Engineered Solution
                      </span>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar Column */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Main Features Card */}
            <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8B7CFF]">
                Core Features Implemented
              </h3>
              <ul className="space-y-3 text-sm text-[#D1D5DB]">
                {project.caseStudy.mainFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#57D6C5] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used Card */}
            <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8B7CFF]">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded bg-[#11151D] text-[#F5F5F7] border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#171C26] to-[#11151D] border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-[#F5F5F7]">
                Explore this Application
              </h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Test the interactive frontend interface, component behavior, and responsive layouts.
              </p>
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={<ArrowUpRight className="w-4 h-4" />}
                onClick={() => onPreviewLive(project)}
              >
                Launch Interactive Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
