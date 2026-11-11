import React from 'react';
import { Rocket } from 'lucide-react';

export const SpaceShipVisual: React.FC = () => {
  return (
    <div className="aspect-video rounded-xl bg-[#171C26] border border-white/10 overflow-hidden flex items-center justify-center p-6 text-center">
      <div className="space-y-2">
        <Rocket className="w-10 h-10 text-[#57D6C5] mx-auto animate-bounce" />
        <span className="text-xs font-semibold text-white block">
          Starship Starliner-X Ready for Docking
        </span>
        <span className="text-[11px] text-[#A1A1AA] block">
          Pressurized habitat cabins · Mach 18 Orbital Velocity
        </span>
      </div>
    </div>
  );
};
