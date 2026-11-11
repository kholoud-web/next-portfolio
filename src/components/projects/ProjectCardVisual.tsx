import React from 'react';
import { Project } from '../../types/project';

interface ProjectCardVisualProps {
  project: Project;
}

export const ProjectCardVisual: React.FC<ProjectCardVisualProps> = ({ project }) => {
  return (
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

      {/* Scrim gradient for contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#171C26] via-transparent to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Category pill on media top */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#0B0D12]/85 backdrop-blur-md text-[#57D6C5] border border-white/15 group-hover:border-[#57D6C5]/40 transition-colors shadow-sm">
          {project.category}
        </span>
      </div>

      {/* Hover badge in top right */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#171C26]/90 text-[#10B981] border border-white/10 backdrop-blur-md">
          View Project
        </span>
      </div>
    </div>
  );
};
