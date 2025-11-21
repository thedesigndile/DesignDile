
import React from 'react';
import { motion } from 'framer-motion';
import { SafeIcon } from './SafeIcon';
import { AllowedIconName } from '../types';

interface ServicePreviewItem {
  title: string;
  description: string;
  icon: AllowedIconName;
}

const services: ServicePreviewItem[] = [
  {
    title: 'Interior Layout',
    description: 'Typesetting for Fiction, Non-Fiction, and Textbooks.',
    icon: 'FileText'
  },
  {
    title: 'Cover Design',
    description: 'Market-ready paperback and hardcover jackets.',
    icon: 'Book'
  },
  {
    title: 'eBook Conversion',
    description: 'Flawless KDP and ePub formatting.',
    icon: 'Smartphone'
  }
];

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#121212] tracking-tight">
          Comprehensive Publishing Solutions.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-10 border border-transparent hover:border-[#E5E5E5] shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm group"
          >
            <div className="w-14 h-14 bg-[#F9F9F7] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#2C3E50] group-hover:text-white transition-colors duration-300">
              <SafeIcon name={service.icon} className="w-6 h-6" />
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-4 text-[#121212]">
              {service.title}
            </h3>
            
            <p className="text-gray-500 leading-relaxed text-lg">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
