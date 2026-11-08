import React from 'react';
import { X, FileText, ArrowRight } from 'lucide-react';
import { navLinks, developerInfo } from '../../data/navigation';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  activeSection
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-md flex flex-col justify-between p-6"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#F5F5F7] tracking-tight">
              {developerInfo.name}
            </span>
            <span className="text-xs text-[#10B981]">
              Frontend Developer
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-8 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Action */}
      <div className="pt-6 border-t border-white/10 space-y-3">
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          icon={<FileText className="w-4 h-4" />}
          onClick={() => {
            onClose();
            onOpenResume();
          }}
        >
          Download CV
        </Button>
        <p className="text-center text-xs text-[#A1A1AA]">
          {developerInfo.email}
        </p>
      </div>
    </div>
  );
};
