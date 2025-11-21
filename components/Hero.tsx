
import React from 'react';
import { motion } from 'framer-motion';
import { SafeIcon } from './SafeIcon';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-visible">

      {/* Left Side: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 z-10 mb-20 md:mb-0 text-center md:text-left"
      >
        {/* Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-[#FF5500] text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
          Top Rated Agency
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl md:text-8xl font-extrabold text-[#151515] leading-[0.9] tracking-tight mb-8">
          JUDGE A BOOK<br />
          BY ITS COVER.
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed mb-10 font-medium mx-auto md:mx-0">
          We design award-winning layouts and covers that fly off the shelf.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#FF5500] text-white rounded-full px-12 py-5 font-extrabold text-xl hover:scale-105 transition-transform duration-300 shadow-xl flex items-center justify-center gap-3 min-w-[220px]"
          >
            Start Project
            <SafeIcon name="ArrowRight" className="w-6 h-6" />
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className="bg-white text-[#151515] border-2 border-[#151515] rounded-full px-10 py-4 font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center min-w-[200px]"
          >
            View Work
          </button>
        </div>
      </motion.div>

      {/* Right Side: The Moving Books */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-full md:w-1/2 h-[500px] relative flex items-center justify-center group perspective-1000"
      >
        {/* Book 1: Gray (Back Left) */}
        <div className="absolute w-56 md:w-72 aspect-[2/3] bg-[#D1D5DB] rounded-r-3xl rounded-l-sm shadow-2xl border-l-[12px] border-[#9CA3AF] transform -rotate-6 animate-float transition-all duration-500 group-hover:-translate-x-24 group-hover:-rotate-12 group-hover:scale-95 z-10">
          {/* Spine Shadow Detail */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/10 to-transparent"></div>
        </div>

        {/* Book 2: Orange (Back Right) */}
        <div className="absolute w-56 md:w-72 aspect-[2/3] bg-[#FF5500] rounded-r-3xl rounded-l-sm shadow-2xl border-l-[12px] border-[#cc4400] transform rotate-6 animate-float-delayed transition-all duration-500 group-hover:translate-x-24 group-hover:rotate-12 group-hover:scale-95 z-20">
           <div className="absolute inset-0 flex items-center justify-center opacity-20">
             <div className="w-32 h-32 border-4 border-white rounded-full"></div>
           </div>
           {/* Spine Shadow Detail */}
           <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>

        {/* Book 3: White (Front Center) */}
        <div className="absolute w-56 md:w-72 aspect-[2/3] bg-white rounded-r-3xl rounded-l-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-l-[12px] border-[#E5E5E5] animate-float transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-4 z-30 overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="text-center border-b-2 border-black pb-2">
                <span className="text-xs font-bold tracking-[0.25em]">THE SUNDAY TIMES</span>
              </div>
              <div className="text-center">
                <h2 className="font-display text-5xl font-extrabold leading-[0.9]">BEST<br/>SELLER</h2>
              </div>
              <div className="text-center border-t-2 border-black pt-2">
                 <span className="text-xs font-mono">VOL. 1</span>
              </div>
            </div>
             {/* Spine Shadow Detail */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/5 to-transparent"></div>
        </div>
      </motion.div>

    </section>
  );
};
