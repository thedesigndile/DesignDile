
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SafeIcon } from './SafeIcon';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "DesignDile transformed my manuscript into a visual masterpiece. The attention to typographic detail and the 'Swiss' minimalist approach gave my book the credibility it needed to hit the bestseller lists.",
    author: "Elena Fisher",
    role: "Author of 'The Silent Echo'"
  },
  {
    id: 2,
    quote: "I've worked with many design agencies, but none have understood the intersection of art and marketing quite like this team. The cover art literally flies off the shelf.",
    author: "Marcus Thorne",
    role: "Architect & Writer"
  },
  {
    id: 3,
    quote: "Professional, timely, and incredibly creative. They didn't just design a book; they built a brand identity that has carried through my entire series.",
    author: "Sarah Jenkins",
    role: "Sci-Fi Novelist"
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-[#151515] mb-6 tracking-tight">
          Author Stories.
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl">
          Don't just take our word for it. Here is what the writers have to say.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative min-h-[400px] md:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 left-8 text-[#FF5500]/10 font-serif text-[12rem] leading-none select-none pointer-events-none">
                "
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-8">
                <p className="font-display text-2xl md:text-4xl font-medium text-[#151515] leading-relaxed max-w-4xl">
                  {TESTIMONIALS[current].quote}
                </p>
                
                <div>
                  <div className="w-12 h-1 bg-[#FF5500] mx-auto mb-6 rounded-full"></div>
                  <h4 className="font-bold text-xl text-[#151515] tracking-wide uppercase">
                    {TESTIMONIALS[current].author}
                  </h4>
                  <span className="text-gray-500 font-medium">
                    {TESTIMONIALS[current].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button 
            onClick={prev}
            className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-white hover:border-[#151515] transition-all duration-300 shadow-sm group"
            aria-label="Previous testimonial"
          >
            <div className="transform rotate-180">
               <SafeIcon name="ArrowRight" className="w-5 h-5" />
            </div>
          </button>
          
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-[#FF5500] w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-white hover:border-[#151515] transition-all duration-300 shadow-sm"
            aria-label="Next testimonial"
          >
            <SafeIcon name="ArrowRight" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
