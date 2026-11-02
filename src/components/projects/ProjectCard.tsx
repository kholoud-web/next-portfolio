import React from 'react';
import { ArrowUpRight, Github, BookOpen, Layers } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  onSelectCaseStudy: (project: Project) => void;
  onPreviewLive: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectCaseStudy,
  onPreviewLive
}) => {
  return (
    <article className="group relative rounded-2xl bg-[#171C26] border border-white/10 overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-xl text-left">
      {/* Large Project Visual Container with Fallback */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#11151D] border-b border-white/10">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback gracefully if image fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Subtle Scrim gradient for contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#171C26] via-transparent to-transparent opacity-80"
          aria-hidden="true"
        />

        {/* Category tag on media top */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs font-medium px-2.5 py-1 rounded bg-[#0B0D12]/80 backdrop-blur-md text-[#57D6C5] border border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div>
            <span className="text-xs text-[#8B7CFF] font-semibold tracking-wider uppercase block mb-1">
              {project.subtitle}
            </span>
            <h3 className="text-2xl font-bold text-[#F5F5F7] group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-[#A1A1AA] leading-relaxed">
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
                  <span className="text-[#8B7CFF] font-bold">·</span>
                  <span className="text-[#D1D5DB]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags (Clean unboxed inline metadata) */}
          <div className="pt-2 border-t border-white/5">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#A1A1AA]">
              <span className="text-white/60 font-medium">Stack:</span>
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-[#E4E4E7]">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-white/20">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            icon={<BookOpen className="w-3.5 h-3.5" />}
            onClick={() => onSelectCaseStudy(project)}
          >
            View Case Study
          </Button>

          <Button
            variant="secondary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            onClick={() => onPreviewLive(project)}
          >
            Live Demo
          </Button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg border border-white/10 hover:border-white/25 bg-[#11151D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF] ml-auto"
              aria-label={`View ${project.title} GitHub repository`}
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
