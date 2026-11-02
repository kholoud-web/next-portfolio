import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, MessageCircle, ExternalLink, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { developerInfo } from '../../data/navigation';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeChannel, setActiveChannel] = useState<'email' | 'whatsapp'>('email');
  
  // Email state
  const [selectedTopic, setSelectedTopic] = useState('Full-Time Frontend Role');
  const [emailSubject, setEmailSubject] = useState('Frontend Developer Opportunity - Kholoud Mahmoud');
  const [emailNote, setEmailNote] = useState('Hi Kholoud,\n\nI reviewed your portfolio and would love to connect regarding an opportunity.');

  // WhatsApp state
  const [whatsappCustomMsg, setWhatsappCustomMsg] = useState(
    'Hi Kholoud! I came across your React/Next.js portfolio and would like to discuss an opportunity with you.'
  );

  const topics = [
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

  const handleTopicSelect = (topic: typeof topics[0]) => {
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

  const whatsappLink = `https://wa.me/${developerInfo.whatsapp}?text=${encodeURIComponent(
    whatsappCustomMsg
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#11151D] border-t border-white/5">
      <Container>
        <SectionHeading
          kicker="Get In Touch"
          title="Have a Project in Mind?"
          description="Ready to discuss an opportunity, full-time role, or contract collaboration? Connect directly through your preferred channel."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-[#171C26] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-[#F5F5F7]">
                Direct Communication
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Choose the direct contact method that works best for you. I respond promptly to email and WhatsApp messages.
              </p>

              {/* Email item with copy action */}
              <div className="p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-[#171C26] text-[#8B7CFF] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-[#A1A1AA] block">Direct Email</span>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#8B7CFF] transition-colors truncate block"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CFF]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-[#171C26] text-[#8B7CFF] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#A1A1AA] block">Connect</span>
                    <span className="text-xs font-semibold text-white">LinkedIn</span>
                  </div>
                </a>

                <a
                  href={developerInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-[#171C26] text-[#8B7CFF] group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#A1A1AA] block">Code Repos</span>
                    <span className="text-xs font-semibold text-white">GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Current Work Availability Notice */}
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
          </div>

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
                        ? 'bg-[#8B7CFF] text-[#0B0D12] font-semibold shadow-sm'
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

              {/* OPTION 1: SEND DIRECT EMAIL */}
              {activeChannel === 'email' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#8B7CFF]" />
                      Send Direct Email
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                      Choose an inquiry type below to auto-prepare your message, or customize your note and click to open your email client.
                    </p>
                  </div>

                  {/* Quick Preset Selector */}
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-[#D1D5DB] block">
                      Quick Inquiry Topic:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => handleTopicSelect(t)}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                            selectedTopic === t.label
                              ? 'bg-[#8B7CFF]/15 border-[#8B7CFF] text-white font-medium'
                              : 'bg-[#0B0D12] border-white/10 text-[#A1A1AA] hover:text-white hover:border-white/20'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject Line Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email-subject-input" className="text-xs font-medium text-[#D1D5DB] block">
                      Email Subject Line
                    </label>
                    <input
                      id="email-subject-input"
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#8B7CFF] transition-colors"
                    />
                  </div>

                  {/* Message Body Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email-body-input" className="text-xs font-medium text-[#D1D5DB] block">
                      Message Note Preview
                    </label>
                    <textarea
                      id="email-body-input"
                      rows={4}
                      value={emailNote}
                      onChange={(e) => setEmailNote(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#8B7CFF] transition-colors resize-none"
                    />
                  </div>

                  {/* Primary Direct Email Button & Copy Option */}
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
                      onClick={handleCopyEmail}
                      icon={copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    >
                      {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-[#71717A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#57D6C5]" />
                    <span>Works directly with Gmail, Apple Mail, Outlook, or your preferred default mail app.</span>
                  </p>
                </div>
              )}

              {/* OPTION 2: WHATSAPP DIRECT CHAT */}
              {activeChannel === 'whatsapp' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {/* WhatsApp Icon */}
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
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
