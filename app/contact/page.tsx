
"use client";

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { SafeIcon } from '../../components/SafeIcon';
import { motion } from 'framer-motion';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here (e.g. Formspree)
    alert("Proposal sent! We'll be in touch shortly.");
  };

  return (
    <main className="bg-[#F2F0E9] min-h-screen pt-32 px-6 pb-20">
      <Navbar activePage="contact" onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl font-bold text-[#151515] tracking-tighter leading-[0.9]"
        >
          PROJECT<br />CANVAS.
        </motion.h1>
        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="text-xl text-gray-500 font-medium mt-6 max-w-md mx-auto"
        >
          Fill in the blanks to start your masterpiece.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="w-full max-w-3xl mx-auto bg-white rounded-[3rem] p-8 md:p-20 shadow-2xl border border-gray-100 relative overflow-hidden"
      >
         {/* Decorative Element */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500]/5 rounded-bl-[3rem] -z-0 pointer-events-none"></div>

         <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
            
            {/* Name */}
            <div className="group">
               <label className="block text-2xl md:text-3xl font-display font-bold text-[#151515] mb-2">
                 Hi, my name is
               </label>
               <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-transparent border-b-2 border-gray-200 text-2xl md:text-3xl text-gray-600 font-medium py-2 focus:border-[#FF5500] focus:text-[#151515] outline-none transition-colors placeholder:text-gray-300"
               />
            </div>

            {/* Email */}
            <div className="group">
               <label className="block text-2xl md:text-3xl font-display font-bold text-[#151515] mb-2">
                 You can reach me at
               </label>
               <input 
                  type="email" 
                  placeholder="email@address.com" 
                  required
                  className="w-full bg-transparent border-b-2 border-gray-200 text-2xl md:text-3xl text-gray-600 font-medium py-2 focus:border-[#FF5500] focus:text-[#151515] outline-none transition-colors placeholder:text-gray-300"
               />
            </div>

            {/* Service */}
            <div className="group">
               <label className="block text-2xl md:text-3xl font-display font-bold text-[#151515] mb-2">
                 I am looking for
               </label>
               <div className="relative">
                 <select 
                    className="w-full bg-transparent border-b-2 border-gray-200 text-2xl md:text-3xl text-gray-600 font-medium py-2 focus:border-[#FF5500] focus:text-[#151515] outline-none transition-colors appearance-none cursor-pointer pr-10"
                    defaultValue=""
                    required
                 >
                    <option value="" disabled>Select a Service</option>
                    <option value="cover">Cover Design</option>
                    <option value="interior">Interior Layout</option>
                    <option value="full">Full Publishing Package</option>
                 </select>
                 <SafeIcon name="ChevronDown" className="absolute right-0 bottom-4 w-6 h-6 text-gray-400 pointer-events-none" />
               </div>
            </div>

            {/* Budget */}
            <div className="group">
               <label className="block text-2xl md:text-3xl font-display font-bold text-[#151515] mb-2">
                 My budget is roughly
               </label>
               <input 
                  type="text" 
                  placeholder="$1,000 - $5,000" 
                  className="w-full bg-transparent border-b-2 border-gray-200 text-2xl md:text-3xl text-gray-600 font-medium py-2 focus:border-[#FF5500] focus:text-[#151515] outline-none transition-colors placeholder:text-gray-300"
               />
            </div>

            {/* Details */}
            <div className="group">
               <label className="block text-2xl md:text-3xl font-display font-bold text-[#151515] mb-2">
                 Here are the details
               </label>
               <textarea 
                  rows={3}
                  placeholder="Tell us about your book..." 
                  className="w-full bg-transparent border-b-2 border-gray-200 text-xl md:text-2xl text-gray-600 font-medium py-2 focus:border-[#FF5500] focus:text-[#151515] outline-none transition-colors placeholder:text-gray-300 resize-none leading-relaxed"
               ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-8 text-center">
              <button 
                type="submit"
                className="bg-[#FF5500] text-white font-bold text-xl px-12 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl shadow-orange-500/20 inline-flex items-center gap-3"
              >
                Let's Do This
                <SafeIcon name="ArrowRight" className="w-6 h-6" />
              </button>
            </div>

         </form>
      </motion.div>
    </main>
  );
}
