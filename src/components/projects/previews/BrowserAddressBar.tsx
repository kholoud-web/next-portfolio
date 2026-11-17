import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BrowserAddressBarProps {
  slug: string;
  liveUrl?: string;
}

export const BrowserAddressBar: React.FC<BrowserAddressBarProps> = ({ slug, liveUrl }) => {
  const targetUrl = liveUrl || `https://${slug}.vercel.app`;
  const displayHost = targetUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="rounded-t-xl bg-[#171C26] border border-white/10 px-4 py-2.5 flex items-center justify-between text-xs text-[#A1A1AA]">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
      </div>
      <a
        href={targetUrl}
        target="_blank"
        rel="noreferrer"
        className="bg-[#0B0D12] px-4 py-1 rounded-md text-[11px] font-mono text-[#D1D5DB] hover:text-white border border-white/5 hover:border-[#10B981]/40 transition-colors flex items-center gap-2 max-w-[70%] truncate"
        title={`Open ${targetUrl}`}
      >
        <span className="text-emerald-400 shrink-0">https://</span>
        <span className="truncate">{displayHost}</span>
        <ExternalLink className="w-3 h-3 text-[#10B981] shrink-0" />
      </a>
      <span className="text-[11px] hidden sm:inline">Live Deployment</span>
    </div>
  );
};
