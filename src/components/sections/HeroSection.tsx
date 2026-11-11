import React from 'react';
import { Container } from '../ui/Container';
import { HeroContent } from './HeroContent';
import { HeroCodeCard } from './HeroCodeCard';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background glow effect */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#059669]/15 via-[#57D6C5]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <HeroContent />
          <HeroCodeCard />
        </div>
      </Container>
    </section>
  );
};
