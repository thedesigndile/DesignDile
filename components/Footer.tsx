
import React from 'react';
import { SafeIcon } from './SafeIcon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="p-4 md:p-6 mt-auto">
      <div className="bg-[#151515] rounded-[3rem] text-white p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
        
        {/* Subtle Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#FF5500] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
          {/* Headline */}
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-16 text-white">
            READY TO<br />PUBLISH?
          </h2>

          {/* The Giant White Circle Button */}
          <button 
            onClick={() => onNavigate('contact')}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-[#151515] flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] mb-20 group"
          >
            <span className="font-bold text-xl">Let's</span>
            <span className="font-bold text-xl">Talk</span>
            <SafeIcon name="ArrowRight" className="w-6 h-6 mt-2 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            {['home', 'services', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className="text-lg font-bold uppercase tracking-widest hover:text-[#FF5500] transition-colors text-white/80"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Footer Bottom */}
          <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-medium">
             <p>
               &copy; 2025 DesignDile.
             </p>
             <div className="flex gap-6">
               <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
               <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
