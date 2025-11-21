import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'The Silent Echo',
    category: 'Fiction',
    imageUrl: 'https://picsum.photos/600/800?random=1'
  },
  {
    id: 2,
    title: 'Modern Architecture',
    category: 'Non-Fiction',
    imageUrl: 'https://picsum.photos/600/800?random=2'
  },
  {
    id: 3,
    title: 'Swiss Style',
    category: 'Art',
    imageUrl: 'https://picsum.photos/600/800?random=3'
  },
  {
    id: 4,
    title: 'Future Tech',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/600/800?random=4'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <div>
       <div className="mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Selected Work</h2>
        <p className="text-gray-500 max-w-2xl">
          A curation of our recent projects. We believe in the power of "less is more".
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-gray-100 aspect-[3/4] cursor-pointer"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-swiss-accent text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
              <h3 className="text-white font-display text-xl font-bold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};