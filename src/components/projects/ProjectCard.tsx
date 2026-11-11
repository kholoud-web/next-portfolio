'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types/project';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ProjectCardBody } from './ProjectCardBody';
import { ProjectCardActions } from './ProjectCardActions';

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
  onPreviewLive,
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
        ease: [0.16, 1, 0.3, 1] as const,
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

      <ProjectCardVisual project={project} />

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 relative z-10">
        <ProjectCardBody project={project} />
        <ProjectCardActions
          project={project}
          onSelectCaseStudy={onSelectCaseStudy}
          onPreviewLive={onPreviewLive}
        />
      </div>
    </motion.article>
  );
};
