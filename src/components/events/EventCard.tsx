import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { EECEvent } from '../../types/events';

interface EventCardProps {
  event: EECEvent;
  onExplore: () => void;
  customDelay?: number;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onExplore,
  customDelay = 0.1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.35,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const isUpcoming = event.status === 'UPCOMING';

  return (
    <motion.div
      tabIndex={0}
      layout
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      onClick={onExplore}
      className="group relative w-full max-w-[280px] sm:max-w-[300px] mx-auto bg-white rounded-xl sm:rounded-2xl border border-[#31572C]/20 p-3 sm:p-3.5 flex flex-col justify-between cursor-pointer select-none transition-all duration-300 ease-out hover:scale-[1.035] active:scale-[1.02] focus-visible:scale-[1.035] hover:-translate-y-1 active:-translate-y-0.5 hover:border-[#D4AF37] active:border-[#D4AF37] hover:shadow-[0_12px_32px_-4px_rgba(49,87,44,0.4),0_0_18px_2px_rgba(212,175,55,0.28)] active:shadow-[0_12px_32px_-4px_rgba(49,87,44,0.45),0_0_18px_2px_rgba(212,175,55,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      <div>
        {/* Poster Container (Aspect ratio preserved) */}
        <div className="relative w-full rounded-lg overflow-hidden border border-[#31572C]/15 bg-[#F9FAF6] shadow-xs flex items-center justify-center">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-105"
            loading="lazy"
          />
          
          {/* Status Badge Tag on Top of Poster */}
          <div className="absolute top-2 right-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm ${
                isUpcoming
                  ? 'bg-[#132A13]/90 text-[#ECF39E] border border-[#D4AF37]/60'
                  : 'bg-[#31572C]/85 text-white/90 border border-white/20'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isUpcoming ? 'bg-[#ECF39E] animate-pulse' : 'bg-[#90A955]'
                }`}
              />
              {event.status}
            </span>
          </div>
        </div>

        {/* Title and Date */}
        <div className="pt-3">
          <h3 className="font-display font-bold text-xs sm:text-sm text-[#132A13] tracking-tight leading-snug line-clamp-1 group-hover:text-[#31572C] transition-colors">
            {event.title}
          </h3>
          <p className="text-[11px] text-[#536453] font-medium mt-0.5 flex items-center gap-1">
            <svg className="w-3 h-3 text-[#4F772D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {event.date}
          </p>
        </div>
      </div>

      {/* Explore Event Action Button */}
      <div className="pt-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExplore();
          }}
          className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg font-display font-bold text-[10px] sm:text-[11px] uppercase tracking-wider bg-[#132A13] text-[#ECF39E] border border-[#D4AF37]/50 shadow-xs transition-all duration-300 group-hover:bg-[#31572C] group-hover:border-[#D4AF37] group-hover:text-[#ECF39E] group-hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <span>EXPLORE EVENT</span>
          <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
