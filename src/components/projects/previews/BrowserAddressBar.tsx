import React from 'react';

interface BrowserAddressBarProps {
  slug: string;
}

export const BrowserAddressBar: React.FC<BrowserAddressBarProps> = ({ slug }) => {
  return (
    <div className="rounded-t-xl bg-[#171C26] border border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-[#A1A1AA]">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
      </div>
      <div className="bg-[#0B0D12] px-4 py-1 rounded-md text-[11px] font-mono text-[#D1D5DB] border border-white/5 flex items-center gap-2">
        <span className="text-emerald-400">https://</span>
        <span>{slug}.kholoud-mahmoud.dev</span>
      </div>
      <span className="text-[11px]">Production Environment</span>
    </div>
  );
};
