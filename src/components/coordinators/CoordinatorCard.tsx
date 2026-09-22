import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { CoordinatorMember } from '../../types/coordinators';
import { ProfileFrame } from '../ui/ProfileFrame';

interface CoordinatorCardProps {
  member: CoordinatorMember;
  customDelay?: number;
  highlightRole?: boolean;
}

export const CoordinatorCard: React.FC<CoordinatorCardProps> = ({
  member,
  customDelay = 0.1,
  highlightRole = false,
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
  };

  return (
    <motion.article
      tabIndex={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
      className={`group relative bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-5 md:p-6 flex flex-col items-center text-center shadow-xs cursor-pointer select-none transition-all duration-300 ease-out hover:scale-[1.04] active:scale-[1.025] focus-visible:scale-[1.04] hover:-translate-y-1 active:-translate-y-0.5 hover:border-[#D4AF37] active:border-[#D4AF37] hover:shadow-[0_12px_32px_-4px_rgba(212,175,55,0.30),0_0_0_1px_rgba(212,175,55,0.35)] active:shadow-[0_12px_32px_-4px_rgba(212,175,55,0.35),0_0_0_1px_rgba(212,175,55,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
        highlightRole
          ? 'border-[#31572C]/30 bg-gradient-to-b from-white to-[#F9FAF6]'
          : 'border-[#31572C]/15'
      }`}
    >
      {/* Gold Profile Frame */}
      <div className="mb-3.5 sm:mb-4">
        <ProfileFrame
          imageSrc={member.image}
          name={member.name}
          role={member.role}
          size="normal"
        />
      </div>

      {/* Member Name */}
      <h3 className="font-display font-bold text-sm sm:text-base md:text-lg text-[#132A13] tracking-tight line-clamp-1 group-hover:text-[#31572C] group-active:text-[#31572C] transition-colors duration-200">
        {member.name}
      </h3>

      {/* Role */}
      <p className={`text-[11px] sm:text-xs font-semibold tracking-wider uppercase mt-1 transition-colors duration-200 ${
        highlightRole
          ? 'text-[#31572C] group-hover:text-[#D4AF37] group-active:text-[#D4AF37]'
          : 'text-[#4F772D] group-hover:text-[#D4AF37] group-active:text-[#D4AF37]'
      }`}>
        {member.role}
      </p>

      {/* Year & Department Pill */}
      {(member.year || member.department) && (
        <div className="mt-2.5 sm:mt-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium tracking-wide bg-[#132A13]/5 text-[#4F6350] border border-[#132A13]/8 group-hover:bg-[#D4AF37]/15 group-hover:text-[#132A13] group-hover:border-[#D4AF37]/40 group-active:bg-[#D4AF37]/15 group-active:text-[#132A13] group-active:border-[#D4AF37]/40 transition-all duration-200">
            {member.year ? `${member.year} - ` : ''}{member.department}
          </span>
        </div>
      )}
    </motion.article>
  );
};
