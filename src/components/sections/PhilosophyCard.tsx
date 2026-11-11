'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PhilosophyItem } from '../../types/skill';
import { PhilosophyIcon } from './PhilosophyIcon';

interface PhilosophyCardProps {
  item: PhilosophyItem;
  index: number;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group relative p-6 sm:p-7 rounded-2xl bg-[#171C26] border border-white/10 hover:border-[#059669]/40 transition-colors duration-300 flex flex-col justify-between space-y-5 text-left overflow-hidden shadow-lg hover:shadow-[0_16px_36px_rgba(5,150,105,0.14)] cursor-default"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(5, 150, 105, 0.12), transparent 75%)`
            : 'none',
        }}
        aria-hidden="true"
      />

      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-xl bg-[#0B0D12] border border-white/10 group-hover:border-[#059669]/30 group-hover:bg-[#11151D] transition-all duration-300 shadow-sm">
            <PhilosophyIcon id={item.id} />
          </div>
          <span className="font-mono text-xs text-[#71717A] group-hover:text-[#10B981] transition-colors duration-300 tabular-nums font-medium">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#F5F5F7] group-hover:text-white transition-colors duration-200">
          {item.title}
        </h3>

        <p className="text-sm text-[#A1A1AA] group-hover:text-[#D1D5DB] transition-colors duration-200 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors text-xs text-[#57D6C5] font-medium flex items-center justify-between relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#57D6C5] group-hover:scale-125 transition-transform duration-300" />
          <span>{item.metricOrPractice}</span>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#57D6C5] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
      </div>
    </motion.div>
  );
};
