'use client';

import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 28 });
  const spotlightBackground = useMotionTemplate`radial-gradient(620px circle at ${smoothX}px ${smoothY}px, rgba(16, 185, 129, 0.11), transparent 70%)`;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0B0D12]"
      aria-hidden="true"
    >
      {/* Subtle Architectural Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.28) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Primary Emerald Aurora Orb */}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [-40, 60, -20, -40], y: [-30, 50, -10, -30], scale: [1, 1.12, 0.96, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[#059669]/18 blur-[120px] will-change-transform"
      />

      {/* Secondary Teal Horizon Orb */}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [40, -70, 20, 40], y: [30, -50, 40, 30], scale: [1, 0.92, 1.1, 1] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-40 w-[620px] h-[620px] rounded-full bg-[#57D6C5]/10 blur-[140px] will-change-transform"
      />

      {/* Deep Forest Bottom Glow Orb */}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [-30, 50, -30], y: [40, -40, 40], opacity: [0.45, 0.75, 0.45] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-48 left-1/4 w-[580px] h-[580px] rounded-full bg-[#10B981]/14 blur-[130px] will-change-transform"
      />

      {/* Drifting Diagonal Light Beam */}
      {!prefersReducedMotion && (
        <motion.div
          animate={{ x: ['-25%', '25%', '-25%'], opacity: [0.18, 0.36, 0.18] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 right-0 h-[420px] bg-gradient-to-b from-[#059669]/10 via-[#57D6C5]/5 to-transparent blur-3xl will-change-transform"
        />
      )}

      {/* Interactive Pointer Spotlight */}
      {!prefersReducedMotion && (
        <motion.div className="absolute inset-0" style={{ background: spotlightBackground }} />
      )}
    </div>
  );
};
