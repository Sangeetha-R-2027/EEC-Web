import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { EECEvent } from '../../types/events';

interface FeaturedEventCardProps {
  event: EECEvent;
  onExplore: () => void;
}

export const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({
  event,
  onExplore,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      tabIndex={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
      onClick={onExplore}
      className="group relative w-[82%] max-w-[260px] sm:max-w-[290px] md:max-w-[310px] mx-auto bg-white rounded-xl sm:rounded-2xl border border-[#31572C]/20 p-3 sm:p-3.5 cursor-pointer select-none transition-all duration-300 ease-out hover:scale-[1.04] active:scale-[1.02] focus-visible:scale-[1.04] hover:-translate-y-1 active:-translate-y-0.5 hover:border-[#D4AF37] active:border-[#D4AF37] hover:shadow-[0_12px_36px_-6px_rgba(49,87,44,0.45),0_0_20px_2px_rgba(212,175,55,0.32),0_0_0_1px_rgba(212,175,55,0.45)] active:shadow-[0_12px_36px_-6px_rgba(49,87,44,0.5),0_0_20px_2px_rgba(212,175,55,0.36),0_0_0_1px_rgba(212,175,55,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      {/* Event Poster Container (Main Focus - Compact Proportions) */}
      <div className="w-full rounded-lg sm:rounded-xl overflow-hidden border border-[#31572C]/15 bg-[#F9FAF6] shadow-xs flex items-center justify-center">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-105"
          loading="lazy"
        />
      </div>

      {/* Compact "EXPLORE EVENT" Action Button */}
      <div className="pt-3 sm:pt-3.5 text-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExplore();
          }}
          className="inline-flex items-center justify-center gap-1.5 w-full py-2 sm:py-2.5 px-3 rounded-lg font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider bg-[#132A13] text-[#ECF39E] border border-[#D4AF37]/50 shadow-xs transition-all duration-300 group-hover:bg-[#31572C] group-hover:border-[#D4AF37] group-hover:text-[#ECF39E] group-hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <span>EXPLORE EVENT</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
