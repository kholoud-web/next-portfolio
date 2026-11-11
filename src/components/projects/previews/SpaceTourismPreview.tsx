'use client';

import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { SpaceShipVisual } from './SpaceShipVisual';

type DestinationKey = 'Moon' | 'Mars' | 'Europa';

interface DestinationData {
  title: string;
  description: string;
  distance: string;
  travelTime: string;
}

const DESTINATIONS: Record<DestinationKey, DestinationData> = {
  Moon: {
    title: 'Luna Station Alpha',
    description: 'Experience 1/6th gravity, stroll through historic Apollo landing sanctuaries, and observe Earth from the tranquility of the lunar crater resort.',
    distance: '384,400 KM',
    travelTime: '3 DAYS'
  },
  Mars: {
    title: 'Olympus Mons Outpost',
    description: 'Venture 225 million kilometers across deep space to humanity’s next frontier. Guided rover excursions through Valles Marineris.',
    distance: '225M KM',
    travelTime: '9 MONTHS'
  },
  Europa: {
    title: 'Europa Subsurface Ocean',
    description: 'Dive beneath 15 kilometers of pristine planetary ice to discover hydro-thermal habitats in our solar system’s most mysterious ocean.',
    distance: '628M KM',
    travelTime: '3.2 YEARS'
  }
};

export const SpaceTourismPreview: React.FC = () => {
  const [destination, setDestination] = useState<DestinationKey>('Moon');
  const destData = DESTINATIONS[destination];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
        <span className="font-bold text-white tracking-widest text-sm flex items-center gap-2">
          <Rocket className="w-4 h-4 text-[#10B981]" />
          ASTRA VOX EXPEDITIONS
        </span>
        <div className="flex items-center gap-2 bg-[#171C26] p-1 rounded-lg">
          {(['Moon', 'Mars', 'Europa'] as const).map((dest) => (
            <button
              key={dest}
              onClick={() => setDestination(dest)}
              className={`text-xs px-3 py-1 rounded-md transition-colors ${
                destination === dest
                  ? 'bg-[#57D6C5] text-black font-semibold'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4 text-left">
          <span className="text-xs uppercase tracking-widest text-[#10B981]">
            Destination Dossier
          </span>
          <h4 className="text-3xl font-extrabold text-white">
            {destData.title}
          </h4>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            {destData.description}
          </p>
          <div className="flex items-center gap-6 pt-2 text-xs">
            <div>
              <span className="text-[#A1A1AA] block text-[11px]">AVG DISTANCE</span>
              <span className="font-bold text-white text-sm">
                {destData.distance}
              </span>
            </div>
            <div>
              <span className="text-[#A1A1AA] block text-[11px]">TRAVEL TIME</span>
              <span className="font-bold text-white text-sm">
                {destData.travelTime}
              </span>
            </div>
          </div>
        </div>
        <SpaceShipVisual />
      </div>
    </div>
  );
};
