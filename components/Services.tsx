
import React from 'react';
import { SafeIcon } from './SafeIcon';
import { AllowedIconName } from '../types';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  
  // Helper to handle navigation click
  const handleClick = () => {
    onNavigate('services');
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F2F0E9]">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="font-display text-6xl md:text-8xl font-extrabold text-[#151515] tracking-tighter uppercase leading-[0.9]">
          Our<br />Services
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Interior Composition */}
        <div 
          onClick={handleClick}
          className="group relative h-[400px] bg-white rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden hover:bg-[#151515] transition-all duration-500 ease-out shadow-sm hover:shadow-2xl cursor-pointer border border-transparent hover:border-[#FF5500]/20"
        >
            <div className="relative z-10 transition-colors duration-500 pointer-events-none">
                 <h3 className="font-display text-4xl font-bold text-[#151515] group-hover:text-white mb-4 transition-colors duration-500">Interior Composition</h3>
                 <p className="text-gray-600 font-medium text-lg group-hover:text-gray-400 transition-colors duration-500 max-w-xs leading-relaxed">
                    Precision typesetting and typographic hierarchy for fiction and non-fiction.
                 </p>
            </div>
            
            {/* CSS Art: Page with Text Lines */}
            <div className="absolute right-10 bottom-[-20px] w-48 h-64 bg-[#F5F5F5] rounded-t-xl shadow-inner group-hover:bg-[#222] transition-colors duration-500 flex flex-col gap-5 p-6 transform group-hover:scale-105 group-hover:-translate-y-10 transition-transform duration-500 origin-bottom border border-gray-100 group-hover:border-gray-800 pointer-events-none">
                 <div className="w-full h-4 bg-gray-300 rounded-full group-hover:bg-[#FF5500] transition-colors duration-500"></div>
                 <div className="w-full h-4 bg-gray-300 rounded-full group-hover:bg-[#FF5500] transition-colors duration-500 delay-75"></div>
                 <div className="w-3/4 h-4 bg-gray-300 rounded-full group-hover:bg-[#FF5500] transition-colors duration-500 delay-100"></div>
                 <div className="mt-auto w-1/2 h-4 bg-gray-300 rounded-full group-hover:bg-[#FF5500] transition-colors duration-500 delay-150"></div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center group-hover:bg-[#FF5500] transition-colors duration-300 shadow-lg">
              <SafeIcon name="ArrowRight" className="w-5 h-5 text-[#151515] group-hover:text-white transition-colors duration-300" />
            </div>
        </div>

        {/* 2. Bestselling Covers */}
        <div 
          onClick={handleClick}
          className="group relative h-[400px] bg-white rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden hover:bg-[#151515] transition-all duration-500 ease-out shadow-sm hover:shadow-2xl cursor-pointer border border-transparent hover:border-[#FF5500]/20"
        >
            <div className="relative z-10 transition-colors duration-500 pointer-events-none">
                 <h3 className="font-display text-4xl font-bold text-[#151515] group-hover:text-white mb-4 transition-colors duration-500">Bestselling Covers</h3>
                 <p className="text-gray-600 font-medium text-lg group-hover:text-gray-400 transition-colors duration-500 max-w-xs leading-relaxed">
                    Market-ready paperback and hardcover jackets that stand out on the shelf.
                 </p>
            </div>
            
            {/* CSS Art: Book with Spine */}
            <div className="absolute right-16 bottom-[-40px] w-40 h-72 bg-[#E0E0E0] rounded-r-md rounded-l-sm border-l-[20px] border-gray-400 transform rotate-[-6deg] group-hover:rotate-0 group-hover:-translate-y-12 transition-all duration-500 group-hover:bg-[#333] group-hover:border-[#FF5500] shadow-xl pointer-events-none">
                <div className="absolute top-8 left-3 right-3 h-1 bg-white/40 group-hover:bg-white/10"></div>
                <div className="absolute top-12 left-3 right-3 h-1 bg-white/40 group-hover:bg-white/10"></div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center group-hover:bg-[#FF5500] transition-colors duration-300 shadow-lg">
              <SafeIcon name="ArrowRight" className="w-5 h-5 text-[#151515] group-hover:text-white transition-colors duration-300" />
            </div>
        </div>

        {/* 3. Digital & KDP */}
        <div 
          onClick={handleClick}
          className="group relative h-[400px] bg-white rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden hover:bg-[#151515] transition-all duration-500 ease-out shadow-sm hover:shadow-2xl cursor-pointer border border-transparent hover:border-[#FF5500]/20"
        >
            <div className="relative z-10 transition-colors duration-500 pointer-events-none">
                 <h3 className="font-display text-4xl font-bold text-[#151515] group-hover:text-white mb-4 transition-colors duration-500">Digital & KDP</h3>
                 <p className="text-gray-600 font-medium text-lg group-hover:text-gray-400 transition-colors duration-500 max-w-xs leading-relaxed">
                    Flawless fixed-layout and reflowable conversions for Kindle and Apple Books.
                 </p>
            </div>
            
            {/* CSS Art: Tablet */}
            <div className="absolute right-12 bottom-[-60px] w-48 h-72 bg-gray-800 rounded-[2rem] border-[8px] border-gray-200 group-hover:border-[#333] transition-colors duration-500 transform rotate-[8deg] group-hover:rotate-0 group-hover:-translate-y-20 transition-transform duration-500 shadow-2xl pointer-events-none">
                {/* Screen */}
                <div className="w-full h-full bg-gray-100 rounded-[1.2rem] group-hover:bg-[#FF5500] transition-colors duration-500 relative overflow-hidden group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-200 rounded-b-xl group-hover:bg-[#333] transition-colors duration-500 z-10"></div>
                </div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center group-hover:bg-[#FF5500] transition-colors duration-300 shadow-lg">
              <SafeIcon name="ArrowRight" className="w-5 h-5 text-[#151515] group-hover:text-white transition-colors duration-300" />
            </div>
        </div>

        {/* 4. Launch Assets */}
        <div 
          onClick={handleClick}
          className="group relative h-[400px] bg-white rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden hover:bg-[#151515] transition-all duration-500 ease-out shadow-sm hover:shadow-2xl cursor-pointer border border-transparent hover:border-[#FF5500]/20"
        >
             <div className="relative z-10 transition-colors duration-500 pointer-events-none">
                 <h3 className="font-display text-4xl font-bold text-[#151515] group-hover:text-white mb-4 transition-colors duration-500">Launch Assets</h3>
                 <p className="text-gray-600 font-medium text-lg group-hover:text-gray-400 transition-colors duration-500 max-w-xs leading-relaxed">
                    Social media kits, 3D mockups, and promotional materials for your launch.
                 </p>
            </div>
            
            {/* CSS Art: Overlapping Circles */}
            <div className="absolute right-10 bottom-10 w-48 h-48 flex items-center justify-center pointer-events-none">
                {/* Left Circle */}
                <div className="absolute w-32 h-32 rounded-full bg-gray-200 mix-blend-multiply group-hover:bg-[#FF5500] group-hover:mix-blend-normal transition-all duration-700 transform group-hover:-translate-x-8 opacity-80 group-hover:opacity-90"></div>
                {/* Right Circle */}
                <div className="absolute w-32 h-32 rounded-full bg-gray-300 mix-blend-multiply group-hover:bg-[#FF5500] group-hover:mix-blend-normal transition-all duration-700 transform group-hover:translate-x-8 opacity-80 group-hover:opacity-60"></div>
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center group-hover:bg-[#FF5500] transition-colors duration-300 shadow-lg">
              <SafeIcon name="ArrowRight" className="w-5 h-5 text-[#151515] group-hover:text-white transition-colors duration-300" />
            </div>
        </div>

      </div>
    </section>
  );
};
