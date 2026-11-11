'use client';

import React, { useState } from 'react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';
import { PreviewToolbar } from './previews/PreviewToolbar';
import { BrowserAddressBar } from './previews/BrowserAddressBar';
import { UpseedsPreview } from './previews/UpseedsPreview';
import { EcommercePreview } from './previews/EcommercePreview';
import { WeatherPreview } from './previews/WeatherPreview';
import { TaskKanbanPreview } from './previews/TaskKanbanPreview';
import { SpaceTourismPreview } from './previews/SpaceTourismPreview';

interface LivePreviewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenCaseStudy
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!isOpen || !project) return null;

  const deviceWidthClass = {
    desktop: 'w-full',
    tablet: 'max-w-[768px] mx-auto',
    mobile: 'max-w-[390px] mx-auto'
  }[deviceMode];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn text-left"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl h-[92vh] bg-[#11151D] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <PreviewToolbar
          project={project}
          deviceMode={deviceMode}
          onDeviceModeChange={setDeviceMode}
          onOpenCaseStudy={() => {
            onClose();
            onOpenCaseStudy(project);
          }}
          onClose={onClose}
        />

        <div className="flex-1 overflow-y-auto bg-[#0B0D12] p-4 sm:p-6 transition-all duration-300">
          <div className={`transition-all duration-300 ${deviceWidthClass}`}>
            <BrowserAddressBar slug={project.slug} />

            <div className="rounded-b-xl border-x border-b border-white/10 bg-[#0B0D12] overflow-hidden min-h-[500px]">
              {project.id === 'upseeds' && <UpseedsPreview />}
              {project.id === 'ecommerce' && <EcommercePreview />}
              {project.id === 'weather' && <WeatherPreview />}
              {project.id === 'task-management' && <TaskKanbanPreview />}
              {project.id === 'space-tourism' && <SpaceTourismPreview />}
            </div>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-white/10 bg-[#171C26] flex items-center justify-between text-xs text-[#A1A1AA]">
          <span>Full production-grade component state active in memory</span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Sandbox
          </Button>
        </div>
      </div>
    </div>
  );
};
