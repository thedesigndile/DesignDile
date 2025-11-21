import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SafeIcon } from './SafeIcon';

interface PricingProps {
  onNavigate: (page: string) => void;
}

const PRICING_TIERS = [
  {
    name: "The Debut",
    price: "$1,250",
    description: "Perfect for digital-first authors launching exclusively on Kindle and Apple Books.",
    features: [
      "Custom Ebook Formatting (Reflowable)",
      "Front Cover Design",
      "KDP & IngramSpark File Setup",
      "3D Digital Mockups",
      "Stock Image Licensing"
    ],
    highlight: false,
    color: "bg-white text-[#151515]",
    buttonStyle: "bg-[#F2F0E9] text-[#151515] hover:bg-[#151515] hover:text-white"
  },
  {
    name: "The Signature",
    price: "$2,450",
    description: "Our most popular package. A complete print and digital identity for serious authors.",
    features: [
      "Everything in Debut",
      "Interior Print Layout (PDF)",
      "Full Paperback Wrap",
      "Hardcover Jacket with Flaps",
      "Source Files (InDesign/PSD)",
      "Social Media Promo Kit"
    ],
    highlight: true, // Dark Mode Card
    color: "bg-[#151515] text-white",
    buttonStyle: "bg-[#FF5500] text-white hover:bg-white hover:text-[#151515]"
  },
  {
    name: "The Empire",
    price: "$4,800",
    description: "The full agency treatment. We handle the book, the branding, and the launch assets.",
    features: [
      "Everything in Signature",
      "Audiobook Cover Adaptation",
      "Amazon A+ Content Modules",
      "Author Website One-Pager",
      "Press Release & Media Kit",
      "Priority Rush Delivery"
    ],
    highlight: false,
    color: "bg-white text-[#151515]",
    buttonStyle: "bg-[#151515] text-white hover:bg-[#FF5500] hover:text-white"
  }
];

export const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-[#151515] tracking-tighter leading-[0.9] uppercase mb-8">
          Investment
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Transparent pricing packages. Secure payment via Upwork or Freelancer.com escrow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {PRICING_TIERS.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={clsx(
              "rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[500px] relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl",
              tier.color,
              tier.highlight ? "shadow-2xl scale-105 z-10 border-none" : "shadow-sm border border-gray-200"
            )}
          >
             {/* Badge for Highlighted Card */}
             {tier.highlight && (
               <div className="absolute top-0 right-0 bg-[#FF5500] text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest">
                 Best Value
               </div>
             )}

             <div>
                <h3 className="font-display text-3xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold tracking-tighter">{tier.price}</span>
                  <span className={clsx("text-sm font-medium uppercase tracking-wider opacity-60")}>/ Project</span>
                </div>
                <p className={clsx("text-lg leading-relaxed mb-8", tier.highlight ? "text-gray-400" : "text-gray-500")}>
                  {tier.description}
                </p>

                <div className="w-full h-px bg-current opacity-10 mb-8"></div>

                <ul className="space-y-4 mb-12">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={clsx(
                        "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                        tier.highlight ? "bg-[#FF5500] text-white" : "bg-[#F2F0E9] text-[#151515]"
                      )}>
                        <SafeIcon name="Check" className="w-3 h-3" />
                      </div>
                      <span className={clsx("font-medium text-sm", tier.highlight ? "text-gray-300" : "text-gray-600")}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
             </div>

             <button 
               onClick={() => onNavigate('contact')}
               className={clsx(
                 "w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2",
                 tier.buttonStyle
               )}
             >
               Select Plan
             </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};