'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ResumeModal } from '../components/modals/ResumeModal';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const pathname = usePathname();

  const isCaseStudy = pathname?.startsWith('/projects/') ?? false;

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F5F5F7] flex flex-col antialiased selection:bg-[#059669]/30 selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={isCaseStudy ? 'projects' : 'home'}
      />

      {/* Main Page Slot */}
      <main className="flex-1">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Resume CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
