'use client';

import React from 'react';
import { X, Laptop, Tablet, Smartphone } from 'lucide-react';
import { Project } from '../../../types/project';
import { Button } from '../../ui/Button';

interface PreviewToolbarProps {
  project: Project;
  deviceMode: 'desktop' | 'tablet' | 'mobile';
  onDeviceModeChange: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onOpenCaseStudy: () => void;
  onClose: () => void;
}

export const PreviewToolbar: React.FC<PreviewToolbarProps> = ({
  project,
  deviceMode,
  onDeviceModeChange,
  onOpenCaseStudy,
  onClose
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#171C26]/90 gap-3">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <div>
          <h3 id="preview-modal-title" className="text-sm font-semibold text-[#F5F5F7] flex items-center gap-2">
            {project.title}
            <span className="text-xs px-2 py-0.5 rounded bg-[#0B0D12] text-[#10B981] border border-white/10 font-mono">
              Interactive Demo
            </span>
          </h3>
        </div>
      </div>

      {/* Viewport Width Controls */}
      <div className="hidden sm:flex items-center gap-1 bg-[#0B0D12] p-1 rounded-lg border border-white/10">
        <button
          onClick={() => onDeviceModeChange('desktop')}
          className={`p-1.5 rounded transition-colors ${deviceMode === 'desktop' ? 'bg-[#171C26] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white'}`}
          title="Desktop View (100%)"
          aria-label="Desktop view"
        >
          <Laptop className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDeviceModeChange('tablet')}
          className={`p-1.5 rounded transition-colors ${deviceMode === 'tablet' ? 'bg-[#171C26] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white'}`}
          title="Tablet View (768px)"
          aria-label="Tablet view"
        >
          <Tablet className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDeviceModeChange('mobile')}
          className={`p-1.5 rounded transition-colors ${deviceMode === 'mobile' ? 'bg-[#171C26] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white'}`}
          title="Mobile View (390px)"
          aria-label="Mobile view"
        >
          <Smartphone className="w-4 h-4" />
        </button>
      </div>

      {/* Modal Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onOpenCaseStudy}
        >
          View Full Architecture
        </Button>
        <button
          onClick={onClose}
          className="p-1.5 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
          aria-label="Close demo preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
