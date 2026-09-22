import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { FacultyCoordinatorMember } from '../../types/coordinators';
import { ProfileFrame } from '../ui/ProfileFrame';

interface FacultyCardProps {
  member: FacultyCoordinatorMember;
  customDelay?: number;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({
  member,
  customDelay = 0.1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
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
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariants}
      className="group relative bg-white rounded-2xl border border-[#31572C]/20 p-6 sm:p-8 flex flex-col items-center text-center shadow-sm cursor-pointer select-none transition-all duration-300 ease-out hover:scale-[1.035] active:scale-[1.02] focus-visible:scale-[1.035] hover:-translate-y-1.5 active:-translate-y-1 hover:border-[#D4AF37] active:border-[#D4AF37] hover:shadow-[0_16px_36px_-6px_rgba(212,175,55,0.32),0_0_0_1px_rgba(212,175,55,0.35)] active:shadow-[0_16px_36px_-6px_rgba(212,175,55,0.36),0_0_0_1px_rgba(212,175,55,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      {/* Top Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#4F772D]/40 group-hover:bg-[#D4AF37] group-active:bg-[#D4AF37] rounded-b transition-colors duration-300" />

      {/* Gold Profile Frame */}
      <div className="mb-5">
        <ProfileFrame
          imageSrc={member.image}
          name={member.name}
          role={member.role}
          size="large"
        />
      </div>

      {/* Member Name */}
      <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#132A13] tracking-tight group-hover:text-[#31572C] group-active:text-[#31572C] transition-colors duration-200">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#4F772D] uppercase mt-1 group-hover:text-[#D4AF37] group-active:text-[#D4AF37] transition-colors duration-200">
        {member.role}
      </p>

      {/* Designation */}
      <p className="text-xs sm:text-sm text-[#536453] mt-2 font-medium">
        {member.designation}
      </p>

      {/* Department Pill */}
      <div className="mt-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#31572C]/10 text-[#31572C] border border-[#31572C]/15 group-hover:bg-[#D4AF37]/15 group-hover:border-[#D4AF37]/40 group-hover:text-[#132A13] transition-all duration-200">
          Dept. of {member.department}
        </span>
      </div>
    </motion.article>
  );
};
