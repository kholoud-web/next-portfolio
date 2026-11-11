import React from 'react';
import { Clock } from 'lucide-react';
import { developerInfo } from '../../../data/navigation';

export const ContactAvailabilityCard: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#57D6C5]">
        Availability Status
      </span>
      <p className="text-sm text-[#F5F5F7] font-medium">
        {developerInfo.availabilityStatus}
      </p>
      <p className="text-xs text-[#A1A1AA] flex items-center gap-1.5 pt-1">
        <Clock className="w-3.5 h-3.5 text-[#57D6C5]" />
        <span>Response turnaround: typically within 24 hours</span>
      </p>
    </div>
  );
};
