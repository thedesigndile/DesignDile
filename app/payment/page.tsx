"use client";

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { PreFooter } from '../../components/PreFooter';
import { Pricing } from '../../components/Pricing';
import { FAQ } from '../../components/FAQ';
import { motion } from 'framer-motion';

export default function PaymentPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <main className="bg-[#F2F0E9] min-h-screen pt-32 pb-10">
      <Navbar activePage="payment" onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="mb-24 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl font-bold text-[#151515] tracking-tighter leading-[0.9] uppercase mb-8"
          >
            Investment<br/>& Packages.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl"
          >
            Clear, fixed-price packages. Secure escrow payments via Upwork or Freelancer. No hidden fees, just professional results.
          </motion.p>
        </div>

        {/* Pricing Component */}
        <div className="mb-32">
           <Pricing onNavigate={onNavigate} />
        </div>
      </div>
      
      {/* FAQ Section (Relevant to Payments) */}
      <FAQ />

      {/* PreFooter */}
      <div className="mt-24">
        <PreFooter onNavigate={onNavigate} />
      </div>
    </main>
  );
}