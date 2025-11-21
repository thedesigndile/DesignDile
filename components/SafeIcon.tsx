import React from 'react';
import { 
  Check, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Star, 
  Mail, 
  Book,
  FileText,
  Smartphone,
  Monitor,
  LucideProps
} from 'lucide-react';
import { AllowedIconName } from '../types';

interface SafeIconProps extends LucideProps {
  name: AllowedIconName;
  className?: string;
}

export const SafeIcon: React.FC<SafeIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Check': return <Check {...props} />;
    case 'Menu': return <Menu {...props} />;
    case 'X': return <X {...props} />;
    case 'ArrowRight': return <ArrowRight {...props} />;
    case 'ChevronDown': return <ChevronDown {...props} />;
    case 'Star': return <Star {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'Book': return <Book {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Smartphone': return <Smartphone {...props} />;
    case 'Monitor': return <Monitor {...props} />;
    default: return <Star {...props} />; // Strict Fallback
  }
};