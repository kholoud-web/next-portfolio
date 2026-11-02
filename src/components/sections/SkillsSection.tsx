import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../../data/skills';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Code, Palette, Database, CheckSquare, Wrench, Sparkles } from 'lucide-react';
import { SkillCategory } from '../../types/skill';

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code className="w-5 h-5 text-[#8B7CFF] group-hover:scale-110 transition-transform duration-300" />;
      case 'styling':
        return <Palette className="w-5 h-5 text-[#57D6C5] group-hover:scale-110 transition-transform duration-300" />;
      case 'state-management':
        return <Database className="w-5 h-5 text-[#8B7CFF] group-hover:scale-110 transition-transform duration-300" />;
      case 'forms-validation':
        return <CheckSquare className="w-5 h-5 text-[#57D6C5] group-hover:scale-110 transition-transform duration-300" />;
      case 'tools-workflows':
      default:
        return <Wrench className="w-5 h-5 text-[#8B7CFF] group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group relative rounded-2xl bg-[#171C26] border border-white/10 hover:border-[#8B7CFF]/40 p-6 flex flex-col justify-between transition-colors duration-300 text-left overflow-hidden shadow-lg hover:shadow-[0_16px_36px_rgba(139,124,255,0.12)] cursor-default"
    >
      {/* Dynamic Cursor Spotlight Reflection */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl opacity-0 group-hover:opacity-100 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 124, 255, 0.12), transparent 75%)`
            : 'none',
        }}
        aria-hidden="true"
      />

      {/* Top Edge Specular Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#8B7CFF]/50 transition-all duration-500 z-10"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-[#0B0D12] border border-white/10 group-hover:border-[#8B7CFF]/30 group-hover:bg-[#11151D] transition-all duration-300 shadow-sm">
            {getCategoryIcon(category.id)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#F5F5F7] group-hover:text-white transition-colors duration-200">
              {category.name}
            </h3>
          </div>
        </div>

        <p className="text-xs text-[#A1A1AA] group-hover:text-[#D1D5DB] transition-colors duration-200 leading-relaxed mb-6">
          {category.description}
        </p>

        {/* Skills List as Elegant Technology Rows */}
        <div className="space-y-2.5">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between p-2.5 rounded-lg bg-[#11151D] border border-white/5 group-hover:border-white/10 hover:!border-[#8B7CFF]/30 transition-all text-xs"
            >
              <span className={`font-medium transition-colors ${skill.highlight ? 'text-white' : 'text-[#D1D5DB]'}`}>
                {skill.name}
              </span>
              {skill.level && (
                <span className="text-[11px] text-[#A1A1AA] font-mono group-hover:text-[#57D6C5] transition-colors">
                  {skill.level}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Sub-note */}
      <div className="mt-6 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors flex items-center justify-between text-[11px] text-[#71717A] relative z-10">
        <span>Modern React Ecosystem</span>
        <span className="text-[#57D6C5] flex items-center gap-1 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#57D6C5] group-hover:scale-125 transition-transform" />
          Active Production
        </span>
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
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
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
