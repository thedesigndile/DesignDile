import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { TransformationShowcase } from '../components/TransformationShowcase';
import { FeaturedProject } from '../components/FeaturedProject';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';
import { PreFooter } from '../components/PreFooter';
import { motion } from 'framer-motion';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="bg-[#F2F0E9] min-h-screen overflow-x-hidden text-[#151515]">
      <Navbar activePage="home" onNavigate={onNavigate} />
      
      {/* Main Content Stack with premium generous spacing */}
      <div className="flex flex-col space-y-32 pb-10">
        
        {/* 1. Hero Section (Floating Books) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Hero onNavigate={onNavigate} />
        </motion.div>
        
        {/* 2. Services Section (Hover-Reveal) */}
        <motion.div 
          id="home-services"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Services onNavigate={onNavigate} />
        </motion.div>
        
        {/* 3. Pricing Section (Added to Home) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Pricing onNavigate={onNavigate} />
        </motion.div>

        {/* 4. Transformation Showcase (Before/After) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TransformationShowcase />
        </motion.div>

        {/* 5. Featured Project (The CSS Book) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FeaturedProject />
        </motion.div>

        {/* 6. Reviews (Social Proof Scrolling) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Reviews />
        </motion.div>

        {/* 7. FAQ (Restyled) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FAQ />
        </motion.div>

        {/* 8. PreFooter CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PreFooter onNavigate={onNavigate} />
        </motion.div>

      </div>
    </main>
  );
}