'use client';

import React, { useState } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { developerInfo } from '../../../data/navigation';

export const ContactWhatsAppChannel: React.FC = () => {
  const [whatsappCustomMsg, setWhatsappCustomMsg] = useState(
    'Hi Kholoud! I came across your React/Next.js portfolio and would like to discuss an opportunity with you.'
  );

  const whatsappLink = `https://wa.me/${developerInfo.whatsapp}?text=${encodeURIComponent(
    whatsappCustomMsg
  )}`;

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          {/* WhatsApp Brand Icon */}
          <svg
            className="w-5 h-5 text-[#25D366] fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.743.95 3.708 1.451 5.71 1.452h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Instant WhatsApp Chat
        </h3>
        <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
          Direct 1-on-1 chat on WhatsApp Web or Mobile for fast questions, project scheduling, or availability checks.
        </p>
      </div>

      {/* WhatsApp Custom Intro Message */}
      <div className="space-y-1.5">
        <label htmlFor="whatsapp-msg-input" className="text-xs font-medium text-[#D1D5DB] block">
          Initial Message Text (Editable)
        </label>
        <textarea
          id="whatsapp-msg-input"
          rows={3}
          value={whatsappCustomMsg}
          onChange={(e) => setWhatsappCustomMsg(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#25D366] transition-colors resize-none"
        />
        <span className="text-[11px] text-[#A1A1AA] block">
          This pre-fills your chat window when WhatsApp opens.
        </span>
      </div>

      {/* Highlights */}
      <div className="p-4 rounded-xl bg-[#0B0D12] border border-white/5 space-y-2">
        <div className="flex items-center gap-2 text-xs text-white">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-semibold">Direct Message to Kholoud Mahmoud</span>
        </div>
        <p className="text-xs text-[#A1A1AA] leading-relaxed">
          Opens official WhatsApp with encrypted end-to-end communication. No registration or lengthy forms required.
        </p>
      </div>

      {/* WhatsApp Action Button */}
      <div className="pt-2">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-black font-semibold hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] text-sm sm:text-base cursor-pointer w-full sm:w-auto"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp</span>
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>

      <p className="text-[11px] text-[#71717A]">
        Compatible with both desktop browsers (WhatsApp Web) and mobile devices.
      </p>
    </div>
  );
};
