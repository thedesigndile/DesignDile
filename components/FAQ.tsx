"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SafeIcon } from './SafeIcon';

const QUESTIONS = [
  {
    id: 1,
    q: "How do I place an order and handle payment?",
    a: "To ensure complete security and transparency for both parties, we process all orders and payments exclusively through trusted freelance platforms: Upwork or Freelancer.com. This provides you with Escrow protection and a clear contract before work begins."
  },
  {
    id: 2,
    q: "Why can't I just format my book in Microsoft Word?",
    a: "Word is a word processor, not a layout engine. It lacks the precision for professional typesetting (baseline grids, optical kerning, widow/orphan control). We use Adobe InDesign to ensure your book meets the strict print standards of IngramSpark and KDP."
  },
  {
    id: 3,
    q: "Does the eBook look exactly like the print version?",
    a: "No, and it shouldn't. Print books have a 'fixed layout' (static pages). eBooks are 'reflowable', allowing the reader to resize text and change fonts. We code eBooks specifically to adapt to different devices while maintaining a clean structure."
  },
  {
    id: 4,
    q: "What do you need from me to start the project?",
    a: "We need your final, edited manuscript (Docx) and a design brief. Please ensure your manuscript is 100% edited. Making structural changes (adding chapters, rewriting paragraphs) after the layout phase disrupts the page composition and incurs re-layout fees."
  },
  {
    id: 5,
    q: "Why is 'Bleed' important for my cover file?",
    a: "Bleed is the artwork extending beyond the trim edge of the page (usually 0.125\"). It ensures that when the printer cuts the paper stack, you aren't left with an ugly white hairline edge on your cover. We handle all these technical calculations for you."
  },
  {
    id: 6,
    q: "Do you provide the ISBN for my book?",
    a: "No. To retain full rights as the publisher of your work, you should purchase your own ISBN (via Bowker in the US or Nielsen in the UK). Once you provide the ISBN, we will generate the official vector barcode for your back cover."
  },
  {
    id: 7,
    q: "Can I use images I found on Google for my cover?",
    a: "Absolutely not. Using unlicensed images invites copyright lawsuits. We only use royalty-free stock assets from licensed libraries (like Shutterstock or Unsplash) or create custom assets to ensure your book is legally safe to sell."
  },
  {
    id: 8,
    q: "What happens if I find typos after the design is done?",
    a: "We include two rounds of minor revisions (typo corrections, small tweaks) in our standard packages. Extensive rewriting or structural changes after the first proof will be billed at our hourly rate."
  },
  {
    id: 9,
    q: "Do you handle complex non-fiction with tables and charts?",
    a: "Yes. This is our specialty. We style tables, graphs, footnotes, and endnotes to look professional and consistent. Note that complex academic texts may require a custom quote depending on the density of the data."
  },
  {
    id: 10,
    q: "Do I own the source files when the project is finished?",
    a: "Yes. Unlike many budget designers, we release the full source files (Adobe InDesign .INDD and Photoshop .PSD) to you upon final payment and project completion. You own your book 100%."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
};

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#151515] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
           <div>
              <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase mb-6 text-white">
                Common<br/>Questions
              </h2>
              <p className="text-gray-400 text-xl max-w-md">
                 Everything you need to know about payments, process, and print specs.
              </p>
           </div>
           <div className="hidden md:block">
              <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center">
                 <SafeIcon name="ArrowRight" className="w-10 h-10 rotate-90 text-[#FF5500]" />
              </div>
           </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col border-t border-white/20"
        >
          {QUESTIONS.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="border-b border-white/20"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full py-10 flex items-start justify-between text-left focus:outline-none cursor-pointer group hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex gap-8 md:gap-16 items-baseline pr-8">
                   <span className="font-mono text-sm font-bold text-[#FF5500] opacity-80 shrink-0">
                     {item.id.toString().padStart(2, '0')}
                   </span>
                   <span className="font-display text-xl md:text-3xl font-bold leading-tight group-hover:text-[#FF5500] transition-colors duration-300">
                     {item.q}
                   </span>
                </div>
                
                <div className="relative w-8 h-8 shrink-0 mt-1">
                   <div className={`absolute top-1/2 left-0 w-8 h-[2px] bg-white transition-all duration-300 ${openId === item.id ? 'bg-[#FF5500] rotate-180' : ''}`}></div>
                   <div className={`absolute top-1/2 left-0 w-8 h-[2px] bg-white transition-all duration-300 rotate-90 ${openId === item.id ? 'bg-[#FF5500] rotate-180 opacity-0' : ''}`}></div>
                </div>
              </button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-14 md:pl-28 pr-4 md:pr-20">
                      <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};