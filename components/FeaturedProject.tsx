
import React from 'react';
import { SafeIcon } from './SafeIcon';

export const FeaturedProject: React.FC = () => {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
      <div className="bg-[#151515] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center relative overflow-hidden">
        
        {/* Decorative Background Glows (Subtle) */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Left Content */}
        <div className="w-full md:w-1/2 relative z-10 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
           <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-xs font-bold tracking-[0.2em] text-white/80 mb-8 uppercase">
             Featured Project
           </span>
           
           <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
             THE MODERN<br/>TYPOGRAPHY
           </h2>
           
           <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
             A masterclass in grid systems and swiss design. See how we transformed a complex manuscript into a visual journey.
           </p>
           
           <button className="bg-white text-[#151515] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
             Read Case Study
             <SafeIcon name="ArrowRight" className="w-4 h-4" />
           </button>
        </div>

        {/* Right Visual (The CSS Book) */}
        <div className="w-full md:w-1/2 min-h-[450px] relative flex items-center justify-center perspective-1000">
           
           {/* Floating Decoration Circles */}
           <div className="absolute top-10 right-10 md:right-20 w-32 h-32 bg-[#FF5500] rounded-full blur-xl opacity-60 animate-float-delayed z-0 mix-blend-screen"></div>
           <div className="absolute bottom-10 left-10 md:left-20 w-24 h-24 bg-white rounded-full blur-xl opacity-20 animate-float z-0"></div>

           {/* The Book */}
           <div className="relative w-64 md:w-80 aspect-[3/4] bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-800 rounded-r-3xl rounded-l-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center animate-float border-l-[12px] border-white/10 z-10 transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out group cursor-pointer">
              
              {/* Spine Shadow/Fold */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/30 to-transparent"></div>
              
              {/* The Big "M" */}
              <h3 className="font-display font-black text-[10rem] md:text-[12rem] text-white leading-none mix-blend-overlay select-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                M
              </h3>
              
              {/* Texture/Noise Overlay (Simulated with opacity) */}
              <div className="absolute inset-0 bg-white opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

              {/* Shine/Gloss */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-r-3xl pointer-events-none"></div>
           </div>
        </div>

      </div>
    </section>
  );
};
