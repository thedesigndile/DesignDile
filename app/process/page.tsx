
"use client";

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { PreFooter } from '../../components/PreFooter';
import { SafeIcon } from '../../components/SafeIcon';
import { motion } from 'framer-motion';
import { AllowedIconName } from '../../types';
import clsx from 'clsx';

// --- Types & Data ---

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: AllowedIconName;
  color: string;
  illustration: React.ReactNode;
}

// Swiss-style CSS Illustrations for each step
const Illustrations = {
  Discovery: (
    <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 md:opacity-100 pointer-events-none">
      <div className="absolute right-4 bottom-4 w-20 h-20 border-[6px] border-[#FF5500] rounded-full"></div>
      <div className="absolute right-12 bottom-12 w-12 h-12 bg-[#151515] rounded-full mix-blend-multiply"></div>
    </div>
  ),
  Strategy: (
    <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 md:opacity-100 pointer-events-none overflow-hidden rounded-br-[3rem]">
       <div className="absolute top-0 right-0 w-full h-full grid grid-cols-3 gap-2 p-4 transform rotate-12">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`bg-gray-200 rounded-sm ${i%2===0 ? 'bg-[#FF5500]/40' : ''}`}></div>
          ))}
       </div>
    </div>
  ),
  Concept: (
    <div className="absolute right-6 bottom-6 w-24 h-24 opacity-20 md:opacity-100 pointer-events-none">
       <div className="absolute inset-0 bg-[#FF5500] rounded-tl-[2rem] rounded-br-[2rem] transform rotate-45 opacity-20"></div>
       <div className="absolute inset-4 bg-[#151515] rounded-tr-[1rem] rounded-bl-[1rem] transform -rotate-12"></div>
    </div>
  ),
  Direction: (
    <div className="absolute right-0 bottom-0 w-40 h-20 opacity-20 md:opacity-100 pointer-events-none flex items-end justify-end p-6 gap-1">
       <div className="w-4 h-12 bg-[#FF5500] rounded-full"></div>
       <div className="w-4 h-8 bg-gray-300 rounded-full"></div>
       <div className="w-4 h-16 bg-[#151515] rounded-full"></div>
    </div>
  ),
  Typesetting: (
    <div className="absolute right-6 bottom-6 w-32 h-32 opacity-20 md:opacity-100 pointer-events-none">
       <div className="w-full h-2 bg-gray-200 mb-2 rounded-full"></div>
       <div className="w-full h-2 bg-gray-200 mb-2 rounded-full"></div>
       <div className="w-2/3 h-2 bg-[#FF5500] mb-2 rounded-full"></div>
       <div className="w-full h-2 bg-gray-200 mb-2 rounded-full"></div>
       <div className="w-1/2 h-2 bg-[#151515] mb-2 rounded-full"></div>
    </div>
  ),
  Polish: (
    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 md:opacity-100 pointer-events-none">
       <div className="w-full h-full border-[10px] border-[#F2F0E9] bg-[#FF5500] rounded-full shadow-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full"></div>
       </div>
    </div>
  ),
  Launch: (
    <div className="absolute right-0 bottom-0 w-40 h-40 opacity-20 md:opacity-100 pointer-events-none overflow-hidden rounded-br-[3rem]">
        <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-[#151515] transform rotate-45"></div>
        <div className="absolute bottom-[20px] right-[20px] w-4 h-20 bg-[#FF5500] transform -rotate-45"></div>
    </div>
  )
};

const STEPS: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery",
    description: "We begin with a deep dive into your manuscript. We analyze your genre, target audience, and core themes to establish a visual foundation.",
    icon: 'Book',
    color: "text-[#FF5500]",
    illustration: Illustrations.Discovery
  },
  {
    id: "02",
    title: "Strategy",
    description: "Before pixel touches canvas, we build a moodboard. We define the typographic hierarchy and color palette that will define your brand.",
    icon: 'Menu',
    color: "text-[#151515]",
    illustration: Illustrations.Strategy
  },
  {
    id: "03",
    title: "Concepting",
    description: "Our art directors explore 2-3 distinct visual directions (The 'Safe', The 'Bold', and The 'Wildcard'). You choose the one that resonates.",
    icon: 'Star',
    color: "text-[#FF5500]",
    illustration: Illustrations.Concept
  },
  {
    id: "04",
    title: "Direction",
    description: "We take your chosen concept and refine it. We iterate on fonts, spacing, and imagery until the cover strikes the perfect emotional chord.",
    icon: 'Check',
    color: "text-[#151515]",
    illustration: Illustrations.Direction
  },
  {
    id: "05",
    title: "Typesetting",
    description: "The interior is crafted page by page. We handle widows, orphans, tracking, and kerning to ensure a comfortable, professional reading experience.",
    icon: 'FileText',
    color: "text-[#FF5500]",
    illustration: Illustrations.Typesetting
  },
  {
    id: "06",
    title: "Final Polish",
    description: "A rigorous QA process. We proofread the layout, check color profiles for print (CMYK), and validate ePub files for digital devices.",
    icon: 'Monitor',
    color: "text-[#151515]",
    illustration: Illustrations.Polish
  },
  {
    id: "07",
    title: "Launch",
    description: "Delivery day. You receive print-ready PDFs, verified eBook files, and a social media asset kit to announce your book to the world.",
    icon: 'ArrowRight',
    color: "text-[#FF5500]",
    illustration: Illustrations.Launch
  }
];

export default function ProcessPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <main className="bg-[#F2F0E9] min-h-screen pt-32 pb-10 overflow-x-hidden">
      <Navbar activePage="process" onNavigate={onNavigate} />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl font-black text-[#151515] tracking-tighter uppercase leading-[0.9]"
          >
            The Creative<br />Roadmap
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-500 font-medium max-w-md mx-auto mt-8"
           >
             From raw manuscript to bestseller shelf in 7 steps.
           </motion.p>
        </div>

        {/* Zig Zag Container */}
        <div className="flex flex-col gap-0 relative pb-32">
          {/* Vertical Line for Mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 md:hidden z-0"></div>

          {STEPS.map((step, index) => {
            const isLeft = index % 2 === 0; // Even index = Left
            
            return (
              <React.Fragment key={step.id}>
                {/* The Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={clsx(
                    "relative z-10 w-full md:w-[45%] mb-12 md:mb-0",
                    isLeft ? "md:self-start" : "md:self-end"
                  )}
                >
                   {/* Card Container */}
                   <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-white hover:border-[#FF5500]/20 transition-colors duration-500 relative overflow-hidden group min-h-[320px] flex flex-col justify-between">
                      
                      {/* Background Illustration */}
                      {step.illustration}

                      {/* Header */}
                      <div className="relative z-10 flex justify-between items-start mb-6">
                         <span className={clsx("font-display text-5xl md:text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-500", step.color)}>
                            {step.id}
                         </span>
                         <div className="w-14 h-14 bg-[#F2F0E9] rounded-full flex items-center justify-center text-[#151515] group-hover:scale-110 transition-transform shadow-sm">
                            <SafeIcon name={step.icon} className="w-6 h-6" />
                         </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#151515] mb-4">{step.title}</h3>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-[90%]">{step.description}</p>
                      </div>

                   </div>
                </motion.div>

                {/* The SVG Connector (Desktop Only) */}
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block h-32 w-full relative -my-8 pointer-events-none z-0">
                     <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" preserveAspectRatio="none">
                        {isLeft ? (
                          // Curve: Left (approx x=200) to Right (approx x=600)
                          <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            d="M 200 20 C 200 150 600 50 600 180"
                            stroke="#FF5500"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            strokeOpacity="0.3"
                            fill="none"
                          />
                        ) : (
                          // Curve: Right (approx x=600) to Left (approx x=200)
                          <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            d="M 600 20 C 600 150 200 50 200 180"
                            stroke="#FF5500"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            strokeOpacity="0.3"
                            fill="none"
                          />
                        )}
                     </svg>
                  </div>
                )}
                
                {/* Mobile Connector (Simple Dot) */}
                 {index < STEPS.length - 1 && (
                    <div className="md:hidden absolute left-[29px] h-12 w-0 border-l-2 border-dashed border-[#FF5500]/30 z-0" style={{ top: 'auto', transform: 'translateY(-48px)'}}></div>
                 )}

              </React.Fragment>
            );
          })}
        </div>
        
        {/* Final Anchor */}
        <div className="text-center pt-10">
           <div className="inline-flex items-center gap-3 bg-[#151515] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest shadow-xl">
              <SafeIcon name="Check" className="w-5 h-5 text-[#FF5500]" />
              <span>Project Complete</span>
           </div>
        </div>

      </div>

      <PreFooter onNavigate={onNavigate} />
    </main>
  );
}
