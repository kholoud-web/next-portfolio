import React from 'react';
import { navLinks } from '../../data/navigation';

interface NavLinksProps {
  activeSection: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ activeSection }) => {
  return (
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
  );
};
