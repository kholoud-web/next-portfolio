import React from 'react';
import { skillCategories } from '../../data/skills';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Code, Palette, Database, CheckSquare, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code className="w-5 h-5 text-[#8B7CFF]" />;
      case 'styling':
        return <Palette className="w-5 h-5 text-[#57D6C5]" />;
      case 'state-management':
        return <Database className="w-5 h-5 text-[#8B7CFF]" />;
      case 'forms-validation':
        return <CheckSquare className="w-5 h-5 text-[#57D6C5]" />;
      case 'tools-workflows':
      default:
        return <Wrench className="w-5 h-5 text-[#8B7CFF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#11151D] border-t border-white/5">
      <Container>
        <SectionHeading
          kicker="Technical Repertoire"
          title="Skills &amp; Technologies"
          description="Curated toolsets and frameworks leveraged to build accessible, predictable, and scalable enterprise-grade applications."
        />

        {/* Grouped Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#171C26] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all text-left"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#0B0D12] border border-white/10">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F7]">
                    {category.name}
                  </h3>
                </div>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skills List as Elegant Technology Badges / Items */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#11151D] border border-white/5 text-xs"
                    >
                      <span className={`font-medium ${skill.highlight ? 'text-white' : 'text-[#D1D5DB]'}`}>
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[11px] text-[#A1A1AA] font-mono">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-note */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#71717A]">
                <span>Modern React Ecosystem</span>
                <span className="text-[#57D6C5]">Active Production</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
