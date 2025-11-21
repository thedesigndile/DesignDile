"use client";

import React, { useState } from 'react';
import { SafeIcon } from './SafeIcon';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Custom Link Component for SPA Navigation
  const Link = ({ href, children, className, onClick }: any) => {
    const pageId = href === '/' ? 'home' : href.replace('/', '');
    
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      
      // Scroll Logic: Only applies if we are currently on the Home Page AND linking to home
      if (activePage === 'home') {
        if (pageId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (onClick) onClick();
          return;
        }
      }

      // Default Navigation for other pages or other links
      onNavigate(pageId);
      if (onClick) onClick();
    };

    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/payment', label: 'Payment' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop & Tablet Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-auto z-50 hidden md:block">
        <div className="bg-[#151515] rounded-full p-2 pr-8 pl-2 shadow-2xl flex items-center gap-6 border border-white/10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
             <div className="w-10 h-10 bg-white text-[#151515] flex items-center justify-center rounded-full font-display font-bold text-xl transition-transform group-hover:scale-105">
               D
             </div>
             <span className="font-display font-bold tracking-wide text-white text-lg hidden lg:block group-hover:text-[#FF5500] transition-colors">
               DesignDile
             </span>
          </Link>

          {/* Center Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300",
                  activePage === (link.href === '/' ? 'home' : link.href.replace('/', '')) || (link.href === '/payment' && activePage === 'services')
                    ? "text-[#FF5500]" 
                    : "text-white/80 hover:text-[#FF5500] hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Top Bar) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#F2F0E9]/90 backdrop-blur-md border-b border-[#E5E5E5] px-6 py-4 flex items-center justify-between">
        <Link href="/">
           <span className="font-display font-bold uppercase tracking-wide text-[#151515] text-lg">
             DesignDile
           </span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-[#151515] hover:bg-black/5 rounded-full transition-colors"
        >
          <SafeIcon name={isMobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F2F0E9] pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold text-[#151515] border-b border-[#151515]/10 pb-6 pt-2 hover:text-[#FF5500] hover:pl-4 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="mt-auto mb-12 p-8 bg-white rounded-[2.5rem] shadow-sm">
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-2">Get in Touch</p>
                <a href="mailto:hello@designdile.com" className="text-xl font-bold text-[#151515] hover:text-[#FF5500] transition-colors">
                  hello@designdile.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};