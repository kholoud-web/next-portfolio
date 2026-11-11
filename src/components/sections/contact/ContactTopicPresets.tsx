'use client';

import React from 'react';

export interface EmailTopic {
  id: string;
  label: string;
  subject: string;
  body: string;
}

export const EMAIL_TOPICS: EmailTopic[] = [
  {
    id: 'full-time',
    label: 'Full-Time Role',
    subject: 'Frontend Developer Opportunity - Kholoud Mahmoud',
    body: 'Hi Kholoud,\n\nI reviewed your portfolio and would love to discuss a Frontend Developer role with our engineering team.'
  },
  {
    id: 'contract',
    label: 'Freelance / Contract',
    subject: 'Freelance Frontend Project Inquiry',
    body: 'Hi Kholoud,\n\nWe have an upcoming web application project and would like to check your availability and rates.'
  },
  {
    id: 'consultation',
    label: 'General Inquiry',
    subject: 'Connecting via Portfolio - Kholoud Mahmoud',
    body: 'Hi Kholoud,\n\nI was impressed by your case studies and would love to connect and chat about web development.'
  }
];

interface ContactTopicPresetsProps {
  selectedTopic: string;
  onSelectTopic: (topic: EmailTopic) => void;
}

export const ContactTopicPresets: React.FC<ContactTopicPresetsProps> = ({
  selectedTopic,
  onSelectTopic
}) => {
  return (
    <div className="space-y-2">
      <span className="text-xs font-medium text-[#D1D5DB] block">
        Quick Inquiry Topic:
      </span>
      <div className="flex flex-wrap gap-2">
        {EMAIL_TOPICS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelectTopic(t)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
              selectedTopic === t.label
                ? 'bg-[#059669]/20 border-[#10B981] text-white font-medium'
                : 'bg-[#0B0D12] border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};
