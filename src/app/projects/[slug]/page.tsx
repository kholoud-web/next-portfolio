'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '../../../data/projects';
import { CaseStudyView } from '../../../components/projects/CaseStudyView';
import NotFound from '../../not-found';

export default function ProjectCaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();

  const slug = params?.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const handleBack = () => {
    router.push('/#projects');
  };

  const handlePreviewLive = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noreferrer');
    }
  };

  return (
    <CaseStudyView
      project={project}
      onBack={handleBack}
      onPreviewLive={handlePreviewLive}
    />
  );
}
