"use client";

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { SafeIcon } from '../../components/SafeIcon';
import { PreFooter } from '../../components/PreFooter';
import { AllowedIconName } from '../../types';
import { motion } from 'framer-motion';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

interface ServiceOffer {
  title: string;
  description: string;
  icon: AllowedIconName;
}

interface ServiceSuite {
  id: string;
  title: string;
  subtitle: string;
  offers: ServiceOffer[];
}

// Updated to 4 items per category
const SERVICE_SUITES: ServiceSuite[] = [
  {
    id: 'interior',
    title: 'The Interior Suite',
    subtitle: 'Inside the Book.',
    offers: [
      { title: 'Fiction Typesetting', description: 'Clean serif typography for novels with proper widow/orphan control.', icon: 'FileText' },
      { title: 'Non-Fiction Layouts', description: 'Structured headers, index formatting, and clean hierarchy.', icon: 'Menu' },
      { title: 'Complex Textbooks', description: 'Handling tables, charts, and academic footnotes with precision.', icon: 'Book' },
      { title: 'Poetry & Verse', description: 'Custom stanza formatting and artistic line breaks for poets.', icon: 'Star' }
    ]
  },
  {
    id: 'cover',
    title: 'The Cover Suite',
    subtitle: 'The First Impression.',
    offers: [
      { title: 'Paperback Wraps', description: 'Exact spine width calculation and back cover typography.', icon: 'Book' },
      { title: 'Dust Jackets', description: 'Hardcover flaps with author bio and premium matte/gloss finishes.', icon: 'Book' },
      { title: 'Box Set Spines', description: 'Connecting artwork that creates a mural across a book series.', icon: 'Menu' },
      { title: 'Audiobook Art', description: 'High-contrast square formatting optimized for Audible and iTunes.', icon: 'Smartphone' }
    ]
  },
  {
    id: 'digital',
    title: 'The Digital Suite',
    subtitle: 'The Tech Stack.',
    offers: [
      { title: 'Amazon KDP', description: 'Print-ready PDF compliance with specific trim sizes.', icon: 'Monitor' },
      { title: 'Reflowable ePub', description: 'Dynamic text that adapts to Kindle, Nook, and Apple Books.', icon: 'Smartphone' },
      { title: 'Accessibility', description: 'WCAG compliant tagging and alt-text for screen readers.', icon: 'Check' },
      { title: 'Interactive PDF', description: 'Hyperlinked documents with fillable forms and navigation.', icon: 'FileText' }
    ]
  },
  {
    id: 'launch',
    title: 'The Launch Suite',
    subtitle: 'The Marketing.',
    offers: [
      { title: 'Amazon A+ Content', description: 'Visual storytelling modules for your Amazon product page.', icon: 'Star' },
      { title: '3D Mockups', description: 'Photorealistic renders of your book for social media promotion.', icon: 'Monitor' },
      { title: 'Social Ads', description: 'Instagram and Facebook promo graphics to drive pre-orders.', icon: 'Smartphone' },
      { title: 'Press Kits', description: 'Professional one-sheets and media assets for PR outreach.', icon: 'Mail' }
    ]
  }
];

// Updated Skills Data to match Screenshot
const SKILLS = [
  { name: 'Adobe InDesign', level: '98%' },
  { name: 'Typography & Grep', level: '100%' },
  { name: 'Adobe Photoshop', level: '90%' },
  { name: 'HTML/CSS for eBooks', level: '95%' },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <main className="bg-[#F2F0E9] min-h-screen pt-32 pb-10">
      <Navbar activePage="services" onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-24 text-center md:text-left">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-[#151515] tracking-tighter leading-[0.9] uppercase mb-8">
            The Catalog.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            Comprehensive design solutions for authors who demand excellence. Browse our individual service suites below.
          </p>
        </div>

        {/* The Suites - Vertical Stack */}
        <div className="flex flex-col gap-8 mb-32">
          {SERVICE_SUITES.map((suite) => (
            <div 
              key={suite.id} 
              className="bg-white p-8 md:p-14 rounded-[3rem] shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Left: Header Info */}
                <div className="lg:w-1/3 shrink-0 sticky top-32">
                  <h3 className="text-[#FF5500] font-bold uppercase tracking-widest text-sm mb-4">
                    {suite.subtitle}
                  </h3>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-[#151515] mb-6">
                    {suite.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Specialized solutions for {suite.id === 'interior' ? 'typesetting and layout' : suite.id === 'cover' ? 'packaging and shelf appeal' : suite.id === 'digital' ? 'conversion and distribution' : 'promotion and sales'}.
                  </p>
                </div>

                {/* Right: The Offer Grid (2 items per row) */}
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {suite.offers.map((offer, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                      className="group bg-[#F9F9F7] rounded-3xl p-8 border border-transparent hover:border-[#FF5500]/30 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,85,0,0.1)] hover:-translate-y-2 flex flex-col justify-between min-h-[240px] cursor-default relative overflow-hidden"
                    >
                      <div className="relative z-10">
                         <div className="flex justify-between items-start mb-6">
                            {/* Animated Icon Container */}
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#151515] group-hover:text-white group-hover:bg-[#FF5500] transition-all duration-500 shadow-sm border border-gray-100 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-md">
                               <SafeIcon name={offer.icon} className="w-7 h-7 transition-transform duration-500 group-hover:-rotate-6" />
                            </div>
                            
                            {/* Reveal Arrow */}
                            <div className="w-8 h-8 rounded-full bg-[#F2F0E9] flex items-center justify-center text-[#FF5500] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                                <SafeIcon name="ArrowRight" className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                         </div>
                         
                         <h4 className="font-display text-2xl font-bold text-[#151515] group-hover:text-[#FF5500] transition-colors duration-300 mb-3">
                             {offer.title}
                         </h4>
                         
                         <p className="text-gray-500 text-base leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
                           {offer.description}
                         </p>
                      </div>

                      {/* Decorative Hover Background Elements */}
                      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br from-[#FF5500]/5 to-[#FF5500]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:scale-125"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TECHNICAL MASTERY SECTION */}
        <div className="mb-32">
           <div className="bg-[#151515] rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
              {/* Background Detail - subtle glow */}
              <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#FF5500] opacity-[0.08] rounded-full blur-[120px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">
                  
                  {/* Left: Text Content */}
                  <div className="lg:w-1/2 text-white">
                      <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter uppercase">
                        Technical<br/>Mastery
                      </h2>
                      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
                        We don’t just design; we engineer books. Our team is fluent in the industry-standard architectures required for high-end publishing.
                      </p>
                      <button 
                        onClick={() => onNavigate('contact')}
                        className="bg-white text-[#151515] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#FF5500] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      >
                        Work With Pros <SafeIcon name="ArrowRight" className="w-4 h-4" />
                      </button>
                  </div>

                  {/* Right: Skills List */}
                  <div className="lg:w-1/2 w-full flex flex-col gap-10">
                      {SKILLS.map((skill, index) => (
                        <div key={index} className="w-full">
                           <div className="flex justify-between items-end mb-3">
                             <h4 className="text-white font-bold text-xl tracking-wide">{skill.name}</h4>
                             <span className="text-[#FF5500] font-bold text-lg">{skill.level}</span>
                           </div>
                           
                           {/* Skill Bar */}
                           <div className="w-full h-4 bg-[#2A2A2A] rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[#FF5500] rounded-full animate-skill relative" 
                                style={{ '--target-width': skill.level } as React.CSSProperties}
                              >
                                {/* Add a subtle shine to the bar */}
                                <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/20 blur-[2px]"></div>
                              </div>
                           </div>
                        </div>
                      ))}
                  </div>

              </div>
           </div>
        </div>

      </div>

      {/* CTA Section: PreFooter */}
      <PreFooter onNavigate={onNavigate} />
    </main>
  );
}