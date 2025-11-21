
import React from 'react';
import { SafeIcon } from './SafeIcon';

interface PreFooterProps {
  onNavigate: (page: string) => void;
}

export const PreFooter: React.FC<PreFooterProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-4 mb-4">
      <div className="bg-[#FF5500] rounded-[3rem] py-16 px-8 md:px-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm">
        
        {/* Content */}
        <div className="relative z-10 text-center md:text-left">
          <h2 className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4">
            HAVE A<br />MANUSCRIPT?
          </h2>
          <p className="font-display text-xl md:text-3xl font-bold text-[#151515] tracking-tight">
            Let's make it a bestseller.
          </p>
        </div>

        {/* Button */}
        <button 
          onClick={() => onNavigate('contact')}
          className="relative z-10 h-24 w-24 md:h-32 md:w-32 bg-white rounded-full flex items-center justify-center text-[#FF5500] hover:scale-110 transition-transform duration-300 shadow-2xl group shrink-0"
        >
          <SafeIcon name="ArrowRight" className="w-8 h-8 md:w-12 md:h-12 group-hover:-rotate-45 transition-transform duration-300" />
        </button>

        {/* CSS Book Shape Decoration */}
        <div className="absolute right-[-20px] bottom-[-60px] md:right-10 md:bottom-[-40px] opacity-20 md:opacity-100 pointer-events-none">
            <div className="w-48 h-72 md:w-60 md:h-80 bg-[#D94800] rounded-r-3xl rounded-l-md transform rotate-[-15deg] border-l-[12px] border-[#B33B00] shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
            </div>
        </div>

      </div>
    </div>
  );
};
