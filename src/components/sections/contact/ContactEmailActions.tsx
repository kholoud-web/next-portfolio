'use client';

import React from 'react';
import { ArrowUpRight, Copy, Check, CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';

interface ContactEmailActionsProps {
  mailtoLink: string;
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

export const ContactEmailActions: React.FC<ContactEmailActionsProps> = ({
  mailtoLink,
  copiedEmail,
  onCopyEmail
}) => {
  return (
    <>
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <Button
          as="a"
          href={mailtoLink}
          variant="primary"
          size="lg"
          className="flex-1 sm:flex-initial"
          icon={<ArrowUpRight className="w-4 h-4" />}
        >
          Open Email App
        </Button>

        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={onCopyEmail}
          icon={copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        >
          {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
        </Button>
      </div>

      <p className="text-[11px] text-[#71717A] flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#57D6C5]" />
        <span>Works directly with Gmail, Apple Mail, Outlook, or your preferred default mail app.</span>
      </p>
    </>
  );
};
