'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactDirectCards } from './contact/ContactDirectCards';
import { ContactEmailChannel } from './contact/ContactEmailChannel';
import { ContactWhatsAppChannel } from './contact/ContactWhatsAppChannel';

export const ContactSection: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'email' | 'whatsapp'>('email');

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#11151D]/50 backdrop-blur-[2px] border-t border-white/5">
      <Container>
        <SectionHeading
          kicker="Get In Touch"
          title="Have a Project in Mind?"
          description="Ready to discuss an opportunity, full-time role, or contract collaboration? Connect directly through your preferred channel."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ContactDirectCards />

          {/* Interactive Direct Contact Hub (Email & WhatsApp Options) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#171C26] border border-white/10 text-left space-y-6">
              {/* Channel Selector Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                  Select Direct Channel:
                </span>
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0B0D12] border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveChannel('email')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      activeChannel === 'email'
                        ? 'bg-[#059669] text-white font-semibold shadow-sm'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveChannel('whatsapp')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      activeChannel === 'whatsapp'
                        ? 'bg-[#25D366] text-black font-semibold shadow-sm'
                        : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </button>
                </div>
              </div>

              {activeChannel === 'email' ? <ContactEmailChannel /> : <ContactWhatsAppChannel />}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
