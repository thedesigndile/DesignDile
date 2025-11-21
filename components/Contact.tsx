import React from 'react';
import { SafeIcon } from './SafeIcon';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      <div className="lg:w-1/2">
        <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">Let's create something timeless.</h2>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          We accept a limited number of projects per quarter to ensure maximum attention to detail. Reach out to discuss your manuscript.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-swiss-accent">
              <SafeIcon name="Mail" className="w-5 h-5" />
            </div>
            <span className="text-xl">hello@swissbook.design</span>
          </div>
           <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-swiss-accent">
              <SafeIcon name="Smartphone" className="w-5 h-5" />
            </div>
            <span className="text-xl">+41 22 555 0199</span>
          </div>
        </div>
      </div>

      <form className="lg:w-1/2 w-full space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">First Name</label>
            <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-swiss-accent focus:outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Last Name</label>
            <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-swiss-accent focus:outline-none transition-colors" />
          </div>
        </div>
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-swiss-accent focus:outline-none transition-colors" />
        </div>
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Project Details</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-swiss-accent focus:outline-none transition-colors resize-none"></textarea>
        </div>
        <button className="bg-swiss-surface text-swiss-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-swiss-accent hover:text-white transition-all duration-300 mt-4 flex items-center gap-2">
          Send Inquiry <SafeIcon name="ArrowRight" className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};