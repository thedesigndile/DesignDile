
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { SafeIcon } from './SafeIcon';

interface NavigationProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-[#F9F9F7]/95 backdrop-blur-md border-[#E5E5E5] py-4" : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 bg-[#2C3E50] text-white flex items-center justify-center rounded-sm">
             <span className="font-display font-bold text-xl">D</span>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-[#121212]">
            DesignDile
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={clsx(
                "text-sm font-medium tracking-wide transition-colors hover:text-[#2C3E50]",
                activePage === item.id ? "text-[#2C3E50] font-semibold" : "text-gray-500"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-[#121212]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <SafeIcon name={isMobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E5E5E5] p-6 flex flex-col space-y-4 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium py-3 border-b border-[#E5E5E5] last:border-0 text-[#121212]"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
