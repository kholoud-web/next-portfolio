import React from 'react';
import { ArrowUpRight, Github, BookOpen } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';

interface ProjectCardActionsProps {
  project: Project;
  onSelectCaseStudy: (project: Project) => void;
  onPreviewLive: (project: Project) => void;
}

export const ProjectCardActions: React.FC<ProjectCardActionsProps> = ({
  project,
  onSelectCaseStudy,
  onPreviewLive,
}) => {
  return (
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
  );
};
