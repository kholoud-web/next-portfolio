import React from 'react';
import { Link } from '../lib/next-navigation';
import { ArrowLeft, Compass } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 text-center">
      <Container>
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#171C26] border border-white/10 flex items-center justify-center mx-auto text-[#8B7CFF]">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#8B7CFF]">404 ERROR</span>
            <h1 className="text-3xl font-bold text-[#F5F5F7]">
              Page Not Found
            </h1>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              The project or route you are looking for does not exist or has been relocated.
            </p>
          </div>

          <div>
            <Link href="/">
              <Button variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
                Return to Portfolio Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
