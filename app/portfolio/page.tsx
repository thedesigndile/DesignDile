
"use client";

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { PreFooter } from '../../components/PreFooter';
import { SafeIcon } from '../../components/SafeIcon';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// --- Types ---
interface Project {
  id: number;
  title: string;
  author: string;
  category: 'Fiction' | 'Non-Fiction' | 'Art' | 'Sci-Fi' | 'Fantasy';
  gradient: string;
  spineColor: string;
  textColor: string;
  desc: string;
}

// --- Data: The 10 CSS Books ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Silent Ocean",
    author: "Elena Fisher",
    category: "Fiction",
    gradient: "bg-gradient-to-br from-blue-900 to-cyan-800",
    spineColor: "#0c2e4e", // Dark Blue
    textColor: "text-white",
    desc: "A deep dive into the mysteries of the abyss. The cover uses a gradient to mimic the crushing pressure of the deep ocean, with typography that floats like debris."
  },
  {
    id: 2,
    title: "Empire of Gold",
    author: "S. M. Stirling",
    category: "Fantasy",
    gradient: "bg-gradient-to-br from-yellow-400 to-amber-600",
    spineColor: "#b45309", // Dark Amber
    textColor: "text-white",
    desc: "Epic fantasy requires epic materials. We simulated gold leaf stamping using CSS gradients to give this book a royal, tactile feel."
  },
  {
    id: 3,
    title: "Modern Architecture",
    author: "Marcus Thorne",
    category: "Non-Fiction",
    gradient: "bg-white border border-gray-200", // Minimalist
    spineColor: "#151515", // Black Spine
    textColor: "text-[#151515]",
    desc: "Stark, brutalist, and clean. A black spine contrasts with a white cover, utilizing pure negative space to represent modern structural design."
  },
  {
    id: 4,
    title: "Culinary Arts",
    author: "Chef Gordon",
    category: "Non-Fiction",
    gradient: "bg-gradient-to-br from-red-500 to-orange-500",
    spineColor: "#991b1b", // Dark Red
    textColor: "text-white",
    desc: "Flavors that pop. The warm gradient stimulates appetite, while the bold serif typography suggests tradition and authority in the kitchen."
  },
  {
    id: 5,
    title: "The Startup Code",
    author: "D. Protocol",
    category: "Non-Fiction",
    gradient: "bg-gradient-to-br from-slate-800 to-slate-600",
    spineColor: "#020617", // Very Dark Slate
    textColor: "text-white",
    desc: "For the tech-savvy. A sleek, dark mode aesthetic with a monospaced font that looks like it was typed directly into a terminal."
  },
  {
    id: 6,
    title: "Poetry in Motion",
    author: "Emily R.",
    category: "Art",
    gradient: "bg-gradient-to-br from-rose-100 to-rose-200",
    spineColor: "#fda4af", // Darker Pink
    textColor: "text-[#881337]", // Deep Rose Text
    desc: "Soft, delicate, and ephemeral. The pastel gradient evokes the feeling of a sunrise, perfectly matching the collection's romantic themes."
  },
  {
    id: 7,
    title: "History of Rome",
    author: "Prof. A. Stone",
    category: "Non-Fiction",
    gradient: "bg-gradient-to-br from-red-900 to-red-700",
    spineColor: "#450a0a", // Deep Maroon
    textColor: "text-white",
    desc: "Imperial dignity. The deep crimson represents the power of the legion, with Trajan-style typography that feels carved into stone."
  },
  {
    id: 8,
    title: "Mindfulness",
    author: "Dr. Zen",
    category: "Non-Fiction",
    gradient: "bg-gradient-to-br from-emerald-600 to-teal-500",
    spineColor: "#064e3b", // Dark Emerald
    textColor: "text-white",
    desc: "Calm in a chaotic world. The soothing green gradient was chosen specifically to lower the reader's heart rate before they even open the book."
  },
  {
    id: 9,
    title: "Space Travel",
    author: "C. Sagan",
    category: "Sci-Fi",
    gradient: "bg-gradient-to-br from-indigo-900 to-purple-800",
    spineColor: "#1e1b4b", // Dark Indigo
    textColor: "text-white",
    desc: "The final frontier. We used a cosmic purple gradient to represent the nebula, creating a sense of wonder and infinite possibility."
  },
  {
    id: 10,
    title: "Design Principles",
    author: "Swiss House",
    category: "Art",
    gradient: "bg-[#FF5500]", // Solid Swiss Orange
    spineColor: "#151515", // Black Spine
    textColor: "text-white",
    desc: "Function over form. A tribute to the International Typographic Style—bold orange, stark black spine, and Helvetica. Nothing else."
  }
];

const CATEGORIES = ["All", "Fiction", "Non-Fiction", "Art", "Sci-Fi", "Fantasy"];

export default function PortfolioPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <main className="bg-[#F2F0E9] min-h-screen pt-32 pb-10">
      <Navbar activePage="portfolio" onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-6xl md:text-8xl font-black text-[#151515] tracking-tighter leading-[0.9] uppercase"
            >
              Selected<br />Works.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 mt-6 max-w-md"
            >
              A library of pure CSS design. No images, just code. Hover to lift, click to open.
            </motion.p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider border transition-all duration-300",
                  activeCategory === cat 
                    ? "bg-[#151515] text-white border-[#151515]" 
                    : "bg-transparent text-gray-400 border-gray-300 hover:border-[#151515] hover:text-[#151515]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer perspective-1000"
            >
              {/* The CSS Book */}
              <div 
                className={clsx(
                  "relative w-full aspect-[2/3] rounded-r-2xl rounded-l-sm transition-all duration-500 ease-out transform-style-3d shadow-[10px_10px_20px_rgba(0,0,0,0.2)]",
                  "group-hover:-translate-y-4 group-hover:rotate-y-6 group-hover:shadow-[20px_30px_40px_rgba(0,0,0,0.3)]",
                  project.gradient
                )}
                style={{ borderLeft: `12px solid ${project.spineColor}` }}
              >
                {/* Spine Highlight (CSS gloss) */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20"></div>

                {/* Cover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                   {/* Top: Author */}
                   <div className={clsx("font-serif italic text-sm opacity-80", project.textColor)}>
                     {project.author}
                   </div>

                   {/* Center: Title */}
                   <div className="text-center">
                      <h3 className={clsx("font-display font-bold text-3xl leading-[0.95] drop-shadow-sm", project.textColor)}>
                        {project.title}
                      </h3>
                   </div>

                   {/* Bottom: Icon/Logo */}
                   <div className="flex justify-center">
                      <div className={clsx("w-8 h-8 border-2 rounded-full flex items-center justify-center opacity-50", project.textColor.includes('white') ? 'border-white' : 'border-black')}>
                         <span className={clsx("text-[8px] font-bold", project.textColor)}>DD</span>
                      </div>
                   </div>
                </div>

                {/* Texture Overlay (Noise) */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                
                {/* Light Sheen Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-r-2xl"></div>

              </div>

              {/* Shadow base on the 'floor' */}
              <div className="mt-8 mx-auto w-[80%] h-4 bg-black/20 blur-xl rounded-[100%] transition-all duration-500 group-hover:w-[90%] group-hover:bg-black/30 group-hover:blur-2xl"></div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#151515]/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`book-${selectedProject.id}`}
              className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative min-h-[60vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white hover:bg-[#FF5500] hover:text-white transition-colors rounded-full flex items-center justify-center shadow-lg border border-gray-100"
              >
                <SafeIcon name="X" className="w-5 h-5" />
              </button>

              {/* Left Side: The Big Book View */}
              <div className="w-full md:w-1/2 bg-[#F2F0E9] flex items-center justify-center p-12 relative overflow-hidden">
                 {/* Background decoration */}
                 <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:20px_20px]"></div>
                 </div>

                 {/* Large 3D Book */}
                 <div 
                    className={clsx(
                      "relative w-64 aspect-[2/3] rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-y-[-15deg] rotate-x-[5deg]",
                      selectedProject.gradient
                    )}
                    style={{ borderLeft: `16px solid ${selectedProject.spineColor}` }}
                  >
                     <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <span className={clsx("font-serif italic text-lg", selectedProject.textColor)}>{selectedProject.author}</span>
                        <h2 className={clsx("font-display font-bold text-4xl leading-none text-center", selectedProject.textColor)}>{selectedProject.title}</h2>
                        <div className="flex justify-center"><div className={clsx("w-10 h-10 border-2 rounded-full flex items-center justify-center", selectedProject.textColor.includes('white') ? 'border-white' : 'border-black')}><span className={clsx("font-bold text-xs", selectedProject.textColor)}>DD</span></div></div>
                     </div>
                     {/* Lighting effects */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/10 pointer-events-none rounded-r-2xl"></div>
                  </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <div className="mb-8">
                     <span className="px-4 py-1 rounded-full bg-[#151515] text-white text-xs font-bold uppercase tracking-widest inline-block mb-6">
                        {selectedProject.category}
                     </span>
                     <h2 className="font-display text-4xl font-bold text-[#151515] mb-2">
                        {selectedProject.title}
                     </h2>
                     <p className="font-serif text-xl text-gray-400 italic">
                        by {selectedProject.author}
                     </p>
                  </div>

                  <div className="mb-10">
                     <h3 className="text-xs font-bold text-[#FF5500] uppercase tracking-widest mb-4">Design Concept</h3>
                     <p className="text-gray-600 text-lg leading-relaxed">
                        {selectedProject.desc}
                     </p>
                  </div>

                  {/* Palette Swatch */}
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-12 h-12 rounded-full shadow-inner" style={{ background: selectedProject.spineColor }}></div>
                     <div className={clsx("w-12 h-12 rounded-full shadow-inner", selectedProject.gradient)}></div>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Color Story</span>
                  </div>

                  <button 
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-[#151515] text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#FF5500] transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    Start A Project
                    <SafeIcon name="ArrowRight" className="w-4 h-4" />
                  </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PreFooter onNavigate={onNavigate} />
    </main>
  );
}
