
"use client";

import React, { useState } from 'react';
import { SafeIcon } from './SafeIcon';

export const TransformationShowcase: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-[#151515] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF5500] opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header */}
        <div className="relative z-10 text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
            THE<br/>TRANSFORMATION
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            Drag the slider to see how we turn raw manuscripts into polished, industry-standard layouts.
          </p>
        </div>

        {/* Interactive Slider Area */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[3/4] md:aspect-[16/10] bg-[#333] rounded-xl shadow-2xl overflow-hidden border border-white/10">
          
          {/* --- Layer 1: The Rough Draft (Background) --- */}
          <div className="absolute inset-0 bg-white flex justify-center">
            <div className="w-full max-w-lg py-12 px-8 md:px-12">
               {/* Simulated Word Processor UI */}
               <div className="w-full border-b border-gray-200 pb-2 mb-8 flex justify-between text-xs font-mono text-gray-400">
                  <span>draft_v1_final_FINAL.docx</span>
                  <span>Page 1 of 240</span>
               </div>

               <div className="font-mono text-black/80 text-sm md:text-base leading-[2.5] tracking-wide whitespace-pre-wrap">
                 Chapter 1<br/><br/>
                 It was the best of times it was the worst of times...<br/>
                 The sky was grey. Very grey. John looked up at the sky and thought about how grey it was. He walked down the street. The street was wet. <br/>
                 "Hello," said Mary.<br/>
                 "Hi," said John.<br/>
                 They stood there for a long time doing nothing. <br/>
                 (Note to self: fix this part later).
               </div>
            </div>
          </div>

          {/* --- Layer 2: The Premium Design (Foreground - Clipped) --- */}
          <div 
            className="absolute inset-0 bg-[#F2F0E9] overflow-hidden border-r-4 border-[#FF5500]"
            style={{ width: `${sliderValue}%` }}
          >
             <div className="absolute inset-0 flex justify-center w-full">
               {/* Because this container is clipped, we need to ensure the content inside stays centered relative to the FULL container width, not the clipped width. 
                   However, for a slider reveal, we usually want the content to stay static. 
                   Since 'absolute inset-0' creates a container that changes size, we need an inner container that is full width fixed. */}
               <div className="w-full h-full relative" style={{ width: '100%', minWidth: '100%' }}> 
                  {/* Inner Fixed Content Container - Mimicking the parent dimensions */}
                  <div className="absolute inset-0 flex justify-center overflow-hidden">
                      <div className="w-full max-w-lg py-12 px-8 md:px-12 bg-[#F2F0E9] h-full">
                          {/* Premium Header */}
                          <div className="text-center mb-12 pt-4">
                            <span className="block text-[10px] font-bold tracking-[0.3em] text-[#FF5500] uppercase mb-2">The Beginning</span>
                            <h3 className="font-serif text-3xl font-bold text-[#151515]">Chapter One</h3>
                          </div>

                          {/* Premium Body */}
                          <div className="font-serif text-[#151515] text-base md:text-lg leading-relaxed text-justify">
                            <span className="float-left text-6xl font-bold mr-3 mt-[-6px] text-[#151515]">I</span>
                            t was the best of times, it was the worst of times. The sky, a canvas of slate and charcoal, pressed down upon the city with an oppressive weight. John cast his gaze upward, studying the monochromatic expanse.
                            <br/><br/>
                            The pavement beneath his boots glistened with the sheen of recent rain, reflecting the neon signs that sputtered to life in the twilight.
                            <br/><br/>
                            <span className="italic">"Hello,"</span> Mary’s voice cut through the damp air, sharp and precise.
                          </div>

                          {/* Page Number */}
                          <div className="absolute bottom-6 left-0 right-0 text-center">
                             <span className="text-xs font-bold text-[#151515]/50">1</span>
                          </div>
                      </div>
                  </div>
               </div>
             </div>
          </div>

          {/* --- The Slider Handle Control --- */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-transparent cursor-ew-resize z-30"
            style={{ left: `${sliderValue}%` }}
          >
             {/* The Visual Handle Button */}
             <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF5500] rounded-full shadow-[0_0_20px_rgba(255,85,0,0.5)] flex items-center justify-center text-white border-2 border-white">
                <div className="flex gap-1">
                   <SafeIcon name="ArrowRight" className="w-3 h-3 rotate-180" />
                   <SafeIcon name="ArrowRight" className="w-3 h-3" />
                </div>
             </div>
          </div>

          {/* --- Invisible Range Input for Touch/Drag Accessibility --- */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            aria-label="Comparison slider"
          />

        </div>
      </div>
    </section>
  );
};
