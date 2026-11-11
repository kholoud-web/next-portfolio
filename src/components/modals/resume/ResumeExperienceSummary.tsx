import React from 'react';

export const ResumeExperienceSummary: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      {/* Professional Summary */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10B981] mb-2">
          Professional Summary
        </h4>
        <p className="text-[#D1D5DB] text-sm leading-relaxed">
          Frontend Developer focused on building modern, responsive, accessible, and high-performance web applications using React and Next.js (App Router). Experienced in designing reusable component architectures, managing complex client-side state with Zustand and TanStack Query, and implementing pixel-perfect UI systems with Tailwind CSS. Brings a strong foundation of user empathy, structured communication, and client alignment developed through prior professional client-facing experience.
        </p>
      </div>

      {/* Career Journey & Transferable Expertise */}
      <div className="border-t border-white/10 pt-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#10B981] mb-2">
          Career Journey &amp; Transferable Expertise
        </h4>
        <p className="text-[#A1A1AA] text-xs leading-relaxed">
          Transitioned into software engineering with a proven background in client service and high-touch consultative engagements. This background provides distinct engineering advantages: proactive problem decomposition, deep listening to real user requirements, clear cross-functional stakeholder communication, and meticulous attention to accessibility and UX clarity.
        </p>
      </div>
    </div>
  );
};
