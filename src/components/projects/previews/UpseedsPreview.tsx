'use client';

import React, { useState } from 'react';

const DEALS = [
  { name: 'Nura AI', ask: '$1.2M', stage: 'Seed', traction: '+340% MoM', sector: 'Decentralized AI' },
  { name: 'GreenLeap', ask: '$2.0M', stage: 'Seed Round', traction: '12 Pilots', sector: 'CleanTech' },
  { name: 'Finura', ask: '$850k', stage: 'Pre-Seed', traction: '$45k MRR', sector: 'FinTech' }
];

export const UpseedsPreview: React.FC = () => {
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-6 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h4 className="text-lg font-bold text-white">Upseeds Deal Pipeline</h4>
          <p className="text-xs text-[#A1A1AA]">Seed &amp; Series A Sourcing Radar</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 px-3 rounded-lg bg-[#171C26] text-xs">
            <span className="text-[#A1A1AA]">Active Pipeline: </span>
            <span className="font-bold text-emerald-400">$14.8M</span>
          </div>
        </div>
      </div>

      {selectedDeal && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center justify-between">
          <span>Pitch deck and financials loaded for <strong>{selectedDeal}</strong></span>
          <button
            onClick={() => setSelectedDeal(null)}
            className="text-white hover:underline text-[11px]"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Interactive deal cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {DEALS.map((deal) => (
          <div key={deal.name} className="p-4 rounded-xl bg-[#171C26] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white">{deal.name}</span>
              <span className="text-[11px] text-[#57D6C5] bg-[#57D6C5]/10 px-2 py-0.5 rounded">
                {deal.sector}
              </span>
            </div>
            <div className="text-xs space-y-1 text-[#A1A1AA]">
              <div>Target Ask: <span className="text-white font-medium">{deal.ask}</span></div>
              <div>Stage: <span className="text-white">{deal.stage}</span></div>
              <div>Traction: <span className="text-emerald-400">{deal.traction}</span></div>
            </div>
            <button
              onClick={() => setSelectedDeal(deal.name)}
              className="w-full py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              Review Pitch Deck
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
