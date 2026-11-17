'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';
import { PreviewToolbar } from './previews/PreviewToolbar';
import { BrowserAddressBar } from './previews/BrowserAddressBar';

interface LivePreviewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  project,
  isOpen,
  onClose
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
          onClose={onClose}
        />

        <div className="flex-1 overflow-y-auto bg-[#0B0D12] p-4 sm:p-6 transition-all duration-300">
          <div className={`transition-all duration-300 h-full flex flex-col ${deviceWidthClass}`}>
            <BrowserAddressBar slug={project.slug} liveUrl={project.liveUrl} />

            <div className="rounded-b-xl border-x border-b border-white/10 bg-[#0B0D12] overflow-hidden flex-1 min-h-[500px] relative">
              {project.liveUrl ? (
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} Live Demo`}
                  className="w-full h-full min-h-[520px] border-0 bg-white"
                  loading="lazy"
                />
              ) : (
                <div className="p-8 text-center text-sm text-[#A1A1AA]">
                  Live deployment preview unavailable.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-white/10 bg-[#171C26] flex items-center justify-between gap-3 text-xs text-[#A1A1AA]">
          <span className="truncate">
            Previewing {project.liveUrl || project.title}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Open Live Site
              </Button>
            )}
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
