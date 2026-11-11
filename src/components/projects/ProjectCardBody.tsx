import React from 'react';
import { Project } from '../../types/project';

interface ProjectCardBodyProps {
  project: Project;
}

export const ProjectCardBody: React.FC<ProjectCardBodyProps> = ({ project }) => {
  return (
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

      {/* Technology Stack Tags */}
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
  );
};
