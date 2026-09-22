import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion, AnimatePresence, type Variants } from 'framer-motion';
import { Container } from '../ui/Container';
import { eecEvents } from '../../config/events';
import { EventCard } from '../events/EventCard';
import { EventDetailModal } from '../events/EventDetailModal';
import type { EECEvent, EventFilter } from '../../types/events';

export const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<EventFilter>('ALL');
  const [selectedEvent, setSelectedEvent] = useState<EECEvent | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredEvents = useMemo(() => {
    if (activeFilter === 'ALL') return eecEvents;
    return eecEvents.filter((event) => event.status === activeFilter);
  }, [activeFilter]);

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        ease: 'easeOut',
      },
    },
  };

  const filterOptions: EventFilter[] = ['ALL', 'UPCOMING', 'COMPLETED'];

  return (
    <section
      id="events"
      className="relative w-full bg-[#F9FAF6] text-[#243525] py-20 sm:py-28 md:py-36 lg:py-40 border-t border-[#31572C]/15 overflow-hidden"
      aria-label="EEC Events"
    >
      {/* Background Architectural Accent Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#132A13 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <Container>
        {/* ==================================================== */}
        {/* SECTION HEADER */}
        {/* ==================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#90A955]/30 bg-[#31572C]/10 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#4F772D]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#4F772D] font-display">
              INITIATIVES &amp; DRIVES
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#132A13] tracking-tight leading-tight">
            EVENTS
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#31572C] uppercase font-display">
            Action &amp; Conservation Drives • Kongu Engineering College
          </p>

          <div className="mt-5 w-16 sm:w-20 h-[2px] bg-[#4F772D]/30 mx-auto" />
        </motion.div>

        {/* ==================================================== */}
        {/* SEGMENTED FILTER CONTROLS: [ ALL ] [ UPCOMING ] [ COMPLETED ] */}
        {/* ==================================================== */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1 rounded-xl bg-[#132A13]/90 border border-[#31572C]/50 shadow-sm backdrop-blur-sm gap-1">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase font-display transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#31572C] text-[#ECF39E] border border-[#D4AF37]/80 shadow-[0_0_12px_rgba(212,175,55,0.3)] scale-[1.02]'
                      : 'text-white/70 hover:text-[#ECF39E] hover:bg-[#31572C]/60 hover:scale-[1.03] active:scale-[0.98]'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================== */}
        {/* COMPACT EVENT CARDS GRID */}
        {/* ==================================================== */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto justify-center items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                customDelay={idx * 0.08}
                onExplore={() => setSelectedEvent(event)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ==================================================== */}
        {/* COMPACT CENTERED EVENT DETAIL MODAL */}
        {/* ==================================================== */}
        <EventDetailModal
          event={selectedEvent}
          isOpen={selectedEvent !== null}
          onClose={() => setSelectedEvent(null)}
        />

      </Container>
    </section>
  );
};
