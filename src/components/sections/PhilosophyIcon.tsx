import React from 'react';
import { CheckCircle, Shield, Gauge, MonitorSmartphone, Eye, Wrench } from 'lucide-react';

interface PhilosophyIconProps {
  id: string;
}

export const PhilosophyIcon: React.FC<PhilosophyIconProps> = ({ id }) => {
  switch (id) {
    case 'clean-architecture':
      return <Shield className="w-5 h-5 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />;
    case 'reusable-components':
      return <CheckCircle className="w-5 h-5 text-[#57D6C5] group-hover:scale-110 transition-transform duration-300" />;
    case 'performance-first':
      return <Gauge className="w-5 h-5 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />;
    case 'responsive-design':
      return <MonitorSmartphone className="w-5 h-5 text-[#57D6C5] group-hover:scale-110 transition-transform duration-300" />;
    case 'accessibility':
      return <Eye className="w-5 h-5 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />;
    case 'maintainability':
    default:
      return <Wrench className="w-5 h-5 text-[#57D6C5] group-hover:scale-110 transition-transform duration-300" />;
  }
};
