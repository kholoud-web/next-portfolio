'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { developerInfo } from '../../../data/navigation';
import { ContactTopicPresets, EmailTopic, EMAIL_TOPICS } from './ContactTopicPresets';
import { ContactEmailActions } from './ContactEmailActions';

export const ContactEmailChannel: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Full-Time Role');
  const [emailSubject, setEmailSubject] = useState(EMAIL_TOPICS[0].subject);
  const [emailNote, setEmailNote] = useState(EMAIL_TOPICS[0].body);

  const handleTopicSelect = (topic: EmailTopic) => {
    setSelectedTopic(topic.label);
    setEmailSubject(topic.subject);
    setEmailNote(topic.body);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoLink = `mailto:${developerInfo.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailNote)}`;

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Mail className="w-5 h-5 text-[#10B981]" />
          Send Direct Email
        </h3>
        <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
          Choose an inquiry type below to auto-prepare your message, or customize your note and click to open your email client.
        </p>
      </div>

      <ContactTopicPresets
        selectedTopic={selectedTopic}
        onSelectTopic={handleTopicSelect}
      />

      <div className="space-y-1.5">
        <label htmlFor="email-subject-input" className="text-xs font-medium text-[#D1D5DB] block">
          Email Subject Line
        </label>
        <input
          id="email-subject-input"
          type="text"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#059669] transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email-body-input" className="text-xs font-medium text-[#D1D5DB] block">
          Message Note Preview
        </label>
        <textarea
          id="email-body-input"
          rows={4}
          value={emailNote}
          onChange={(e) => setEmailNote(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#059669] transition-colors resize-none"
        />
      </div>

      <ContactEmailActions
        mailtoLink={mailtoLink}
        copiedEmail={copiedEmail}
        onCopyEmail={handleCopyEmail}
      />
    </div>
  );
};
