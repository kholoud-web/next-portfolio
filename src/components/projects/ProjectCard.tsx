'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, BookOpen, Sparkles } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  index?: number;
  onSelectCaseStudy: (project: Project) => void;
  onPreviewLive: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  onSelectCaseStudy,
  onPreviewLive
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl bg-[#171C26] border border-white/10 hover:border-[#059669]/45 overflow-hidden flex flex-col transition-colors duration-300 shadow-xl hover:shadow-[0_20px_48px_rgba(5,150,105,0.18)] text-left cursor-default"
    >
      {/* Dynamic Cursor Spotlight Radial Follower */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl opacity-0 group-hover:opacity-100 z-20"
        style={{
          background: isHovered
            ? `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(5, 150, 105, 0.14), transparent 75%)`
            : 'none',
        }}
        aria-hidden="true"
      />

      {/* Top Specular Edge Highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#10B981]/60 transition-all duration-500 z-20"
        aria-hidden="true"
      />

      {/* Large Project Visual Container with Fallback */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#11151D] border-b border-white/10">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Subtle Scrim gradient for contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#171C26] via-transparent to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Category tag on media top */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#0B0D12]/85 backdrop-blur-md text-[#57D6C5] border border-white/15 group-hover:border-[#57D6C5]/40 transition-colors shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Subtle interactive hover badge in top right */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#171C26]/90 text-[#10B981] border border-white/10 backdrop-blur-md">
            View Project
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 relative z-10">
        <div className="space-y-4">
          <div>
            <span className="text-xs text-[#10B981] font-semibold tracking-wider uppercase block mb-1 group-hover:text-[#34D399] transition-colors">
              {project.subtitle}
            </span>
            <h3 className="text-2xl font-bold text-[#F5F5F7] group-hover:text-white transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-[#A1A1AA] group-hover:text-[#D1D5DB] transition-colors duration-200 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Bullets */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-[#F5F5F7] uppercase tracking-wider block">
              Key Features:
            </span>
            <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold group-hover:scale-125 transition-transform duration-200">·</span>
                  <span className="text-[#D1D5DB]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags (Clean unboxed inline metadata) */}
          <div className="pt-2 border-t border-white/5 group-hover:border-white/10 transition-colors">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#A1A1AA]">
              <span className="text-white/60 font-medium">Stack:</span>
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-[#E4E4E7] group-hover:text-white transition-colors">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-white/20">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Card Actions with Micro-Interactions */}
        <div className="pt-4 border-t border-white/10 group-hover:border-white/15 transition-colors flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            icon={<BookOpen className="w-3.5 h-3.5" />}
            onClick={() => onSelectCaseStudy(project)}
            className="group/btn"
          >
            View Case Study
          </Button>

          <Button
            variant="secondary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
            onClick={() => onPreviewLive(project)}
          >
            Live Demo
          </Button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg border border-white/10 hover:border-white/25 bg-[#11151D] hover:bg-[#1E2432] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] ml-auto"
              aria-label={`View ${project.title} GitHub repository`}
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
