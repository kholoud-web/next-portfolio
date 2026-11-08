import React, { useState, useEffect } from 'react';
import { Menu, FileText } from 'lucide-react';
import { navLinks, developerInfo } from '../../data/navigation';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark (single line text element) */}
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-[#F5F5F7] hover:text-[#10B981] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
            >
              {developerInfo.name}
            </a>

            {/* Zone 2: 4-5 concise single-line nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#F5F5F7] ${
                      isActive ? 'text-[#F5F5F7] font-semibold' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="primary"
                size="sm"
                icon={<FileText className="w-3.5 h-3.5" />}
                onClick={onOpenResume}
                className="hidden sm:inline-flex"
              >
                Download CV
              </Button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                className="p-2 md:hidden text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenResume={onOpenResume}
        activeSection={activeSection}
      />
    </>
  );
};
