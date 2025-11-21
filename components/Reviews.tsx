"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SafeIcon } from './SafeIcon';

const REVIEWS = [
  {
    id: 1,
    quote: "DesignDile transformed my manuscript into a masterpiece. The level of detail is unmatched.",
    author: "J.K. Smith",
    role: "Fiction Author",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    rating: "5.0"
  },
  {
    id: 2,
    quote: "The Swiss style layout gave my book the credibility it needed to stand out in a crowded market.",
    author: "Sarah Jenkins",
    role: "Sci-Fi Writer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    rating: "5.0"
  },
  {
    id: 3,
    quote: "Incredible attention to detail. The cover pops off the shelf and the interior is flawless.",
    author: "Marcus Thorne",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    rating: "4.9"
  },
  {
    id: 4,
    quote: "Fast, professional, and creatively superior. They understood my vision immediately.",
    author: "Emily R.",
    role: "Poet",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    rating: "5.0"
  },
  {
    id: 5,
    quote: "Simply the best design agency for independent authors. Highly recommended.",
    author: "David Chen",
    role: "Non-Fiction",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces",
    rating: "4.8"
  }
];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="py-24 overflow-hidden bg-white/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
        <div className="text-left">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-[#151515] tracking-tighter leading-none">
            AUTHORS<br/>LOVE US
          </h2>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
           <button 
              onClick={prev}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Previous review"
           >
              <SafeIcon name="ArrowRight" className="w-5 h-5 rotate-180" />
           </button>
           <button 
              onClick={next}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Next review"
           >
              <SafeIcon name="ArrowRight" className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-4xl mx-auto px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative min-h-[450px] md:min-h-[400px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center"
             >
                {/* Author Image - Top/Left */}
                <div className="shrink-0">
                   <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#F2F0E9] shadow-lg">
                      <img 
                        src={REVIEWS[currentIndex].image} 
                        alt={REVIEWS[currentIndex].author} 
                        className="w-full h-full object-cover"
                      />
                   </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                       {[...Array(5)].map((_, i) => (
                          <SafeIcon 
                            key={i} 
                            name="Star" 
                            className={`w-5 h-5 ${i < Math.floor(Number(REVIEWS[currentIndex].rating)) ? "text-[#FF5500] fill-current" : "text-gray-300"}`} 
                          />
                       ))}
                       <span className="ml-2 font-bold text-[#151515]">{REVIEWS[currentIndex].rating}</span>
                    </div>

                    <p className="font-display text-2xl md:text-3xl font-bold text-[#151515] leading-tight mb-6">
                       "{REVIEWS[currentIndex].quote}"
                    </p>

                    <div>
                       <h4 className="font-bold text-[#151515] text-lg uppercase tracking-wide">
                          {REVIEWS[currentIndex].author}
                       </h4>
                       <span className="text-gray-500 text-sm font-medium">
                          {REVIEWS[currentIndex].role}
                       </span>
                    </div>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
           {REVIEWS.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentIndex(idx)}
               className={`h-2 rounded-full transition-all duration-300 ${
                 idx === currentIndex ? "w-8 bg-[#FF5500]" : "w-2 bg-gray-300 hover:bg-gray-400"
               }`}
               aria-label={`Go to review ${idx + 1}`}
             />
           ))}
        </div>
      </div>
    </section>
  );
};