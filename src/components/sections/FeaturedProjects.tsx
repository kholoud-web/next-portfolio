import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types/project';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';

interface FeaturedProjectsProps {
  onSelectCaseStudy: (project: Project) => void;
  onPreviewLive: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectCaseStudy,
  onPreviewLive
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Full-Stack & Web Apps',
    'E-Commerce',
    'Dashboard & API',
    'Interactive Experience'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0B0D12]">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            kicker="Selected Works"
            title="Featured Engineering Projects"
            description="Production-grade web applications architected for scalability, responsiveness, strict accessibility, and sub-second performance."
            className="mb-0 md:mb-0"
          />

          {/* Interactive Filter Controls (§1.A segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#171C26] border border-white/10 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#8B7CFF] text-[#0B0D12] font-semibold shadow-sm'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectCaseStudy={onSelectCaseStudy}
              onPreviewLive={onPreviewLive}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
