import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 text-center">
      <Container>
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#171C26] border border-white/10 flex items-center justify-center mx-auto text-[#10B981]">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#10B981]">404 ERROR</span>
            <h1 className="text-3xl font-bold text-[#F5F5F7]">
              Page Not Found
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              The project or route you are looking for does not exist or has been relocated.
            </p>
          </div>

          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D12] active:scale-[0.98] text-sm px-4 py-2 gap-2 h-10 bg-[#059669] text-white font-semibold hover:bg-[#047857] shadow-sm hover:shadow-[0_0_20px_rgba(5,150,105,0.35)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
