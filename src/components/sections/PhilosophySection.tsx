import React from 'react';
import { philosophies } from '../../data/skills';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { PhilosophyCard } from './PhilosophyCard';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#0B0D12]">
      <Container>
        <SectionHeading
          kicker="Engineering Principles"
          title="Development Philosophy"
          description="The non-negotiable architectural tenets guiding every line of frontend code I design and deploy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item, index) => (
            <PhilosophyCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
