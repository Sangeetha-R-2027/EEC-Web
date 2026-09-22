import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EECEvent } from '../../types/events';

interface EventDetailModalProps {
  event: EECEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!event) return null;

  const isUpcoming = event.status === 'UPCOMING';

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#132A13]/85 backdrop-blur-sm"
          />

          {/* Compact Centered Event Detail Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[700px] max-h-[75vh] sm:max-h-[72vh] bg-[#132A13] text-white rounded-2xl border border-[#31572C]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.22)] overflow-hidden flex flex-col z-10"
          >
            {/* Top Bar with Title & Close Action */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#31572C]/50 bg-[#132A13]">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    isUpcoming
                      ? 'bg-[#31572C] text-[#ECF39E] border border-[#D4AF37]/60'
                      : 'bg-[#31572C]/60 text-white/80 border border-white/20'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isUpcoming ? 'bg-[#ECF39E] animate-pulse' : 'bg-[#90A955]'
                    }`}
                  />
                  {event.status} INITIATIVE
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-[#31572C]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ECF39E] transition-colors"
                aria-label="Close event details"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Compact Content Area */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start">
                
                {/* Left: Poster Image Thumbnail */}
                <div className="sm:col-span-5 rounded-xl overflow-hidden border border-[#31572C]/60 bg-black/30 shadow-inner flex items-center justify-center max-h-[240px] sm:max-h-[280px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right: Structured Event Meta */}
                <div className="sm:col-span-7 flex flex-col space-y-3">
                  <div>
                    <span className="text-[10px] sm:text-xs text-[#90A955] font-semibold tracking-wider uppercase block">
                      {event.organizer}
                    </span>
                    <h3
                      id="modal-event-title"
                      className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug mt-0.5"
                    >
                      {event.title}
                    </h3>
                  </div>

                  {/* Metadata Chips */}
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5 text-white/90">
                      <div className="w-6 h-6 rounded-md bg-[#31572C]/40 border border-[#4F772D]/40 flex items-center justify-center shrink-0 text-[#ECF39E]">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#90A955] block">Location / Venue</span>
                        <span className="font-medium text-white text-xs sm:text-sm">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 text-white/90">
                      <div className="w-6 h-6 rounded-md bg-[#31572C]/40 border border-[#4F772D]/40 flex items-center justify-center shrink-0 text-[#ECF39E]">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#90A955] block">Date</span>
                        <span className="font-medium text-white text-xs sm:text-sm">{event.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 text-white/90">
                      <div className="w-6 h-6 rounded-md bg-[#31572C]/40 border border-[#4F772D]/40 flex items-center justify-center shrink-0 text-[#ECF39E]">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#90A955] block">Time</span>
                        <span className="font-medium text-white text-xs sm:text-sm">{event.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Slogan / Tagline / Description Pill */}
                  {event.sloganTamil && (
                    <div className="p-2.5 rounded-xl bg-[#31572C]/30 border border-[#4F772D]/40">
                      <p className="text-xs font-semibold text-[#ECF39E] italic">
                        "{event.sloganTamil}"
                      </p>
                      <p className="text-[10px] text-[#90A955] mt-0.5">
                        {event.sloganEnglish}
                      </p>
                    </div>
                  )}

                  {event.tagline && (
                    <div className="p-2.5 rounded-xl bg-[#31572C]/30 border border-[#4F772D]/40">
                      <p className="text-xs font-semibold text-[#ECF39E]">
                        {event.tagline}
                      </p>
                      {event.description && (
                        <p className="text-[10px] text-[#90A955] mt-1 leading-relaxed">
                          {event.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {/* Problem Statements if available */}
              {event.problemStatements && (
                <div className="pt-2 border-t border-[#31572C]/40">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#90A955] block mb-1.5 font-display">
                    KEY FOCUS &amp; PROBLEM STATEMENTS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {event.problemStatements.map((statement, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-[#31572C]/40 text-[#ECF39E] border border-[#4F772D]/30"
                      >
                        {statement}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* UN Sustainable Development Goals Section */}
              <div className="pt-2 border-t border-[#31572C]/40">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#90A955] block mb-1.5 font-display">
                  UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {event.sdgGoals.map((goal, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-[#31572C]/40 text-white/90 border border-[#4F772D]/30"
                    >
                      {goal}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Compact Footer */}
            <div className="px-5 sm:px-6 py-2.5 border-t border-[#31572C]/40 bg-[#132A13]/90 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#31572C] text-white hover:bg-[#4F772D] hover:text-[#ECF39E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ECF39E] transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
