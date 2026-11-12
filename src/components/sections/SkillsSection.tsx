import React from 'react';
import { skillCategories } from '../../data/skills';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillCard } from './SkillCard';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#11151D]/50 backdrop-blur-[2px] border-t border-white/5">
      <Container>
        <SectionHeading
          kicker="Technical Repertoire"
          title="Skills &amp; Technologies"
          description="Curated toolsets and frameworks leveraged to build accessible, predictable, and scalable enterprise-grade applications."
        />

        {/* Grouped Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
