'use client';

import React from 'react';
import { useParams, useRouter } from '../../../lib/next-navigation';
import { projects } from '../../../data/projects';
import { CaseStudyView } from '../../../components/projects/CaseStudyView';
import NotFound from '../../not-found';

export default function ProjectCaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <NotFound />;
  }

  const handleBack = () => {
    router.push('/#projects');
  };

  const handlePreviewLive = () => {
    // Open preview or external link
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
