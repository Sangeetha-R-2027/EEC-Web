import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '../ui/Container';
import { FacultyCard } from '../coordinators/FacultyCard';
import { CoordinatorCard } from '../coordinators/CoordinatorCard';
import { GroupSubheader } from '../coordinators/GroupSubheader';
import {
  facultyCoordinators,
  officeBearers,
  technicalTeam,
  additionalSecretary,
  jointSecretary,
  jointTreasurer,
  mediaTeam,
  documentationTeam,
  planningTeam,
  executiveMembers,
} from '../../config/coordinators';

export const Coordinators: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <section
      id="coordinators"
      className="relative w-full bg-[#F9FAF6] text-[#243525] py-20 sm:py-28 md:py-36 lg:py-40 border-t border-[#31572C]/15 overflow-hidden"
      aria-label="Coordinators and Team"
    >
      {/* Background Architectural Accent */}
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
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#90A955]/30 bg-[#31572C]/10 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#4F772D]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#4F772D] font-display">
              LEADERSHIP &amp; COMMITTEES
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#132A13] tracking-tight leading-tight">
            COORDINATORS
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#31572C] uppercase font-display">
            Energy &amp; Environment Conservation Club • Kongu Engineering College
          </p>

          <div className="mt-5 w-16 sm:w-20 h-[2px] bg-[#4F772D]/30 mx-auto" />
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          
          {/* ==================================================== */}
          {/* 1. FACULTY COORDINATORS */}
          {/* ==================================================== */}
          <div>
            <GroupSubheader
              number="01"
              title="FACULTY COORDINATORS"
              subtitle="Guiding and mentoring the club's sustainable mission and academic initiatives."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              {facultyCoordinators.map((faculty, idx) => (
                <FacultyCard
                  key={faculty.id}
                  member={faculty}
                  customDelay={idx * 0.1}
                />
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* 2. OFFICE BEARERS & EXECUTIVE LEADERSHIP */}
          {/* Connected 2-Row Hierarchy: */}
          {/* Row 1: [ CHAIRMAN ] [ SECRETARY ] [ TREASURER ] */}
          {/* Row 2: [ ADDITIONAL SECRETARY ] [ JOINT SECRETARY ] [ JOINT TREASURER ] */}
          {/* ==================================================== */}
          <div>
            <GroupSubheader
              number="02"
              title="OFFICE BEARERS"
              subtitle="Core student executive leadership steering EEC operations."
            />
            
            <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
              {/* Row 1: Chairman | Secretary | Treasurer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {officeBearers.map((bearer, idx) => (
                  <CoordinatorCard
                    key={bearer.id}
                    member={bearer}
                    highlightRole={true}
                    customDelay={idx * 0.08}
                  />
                ))}
              </div>

              {/* Row 2: Additional Secretary | Joint Secretary | Joint Treasurer (Immediately below) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {additionalSecretary.map((member, idx) => (
                  <CoordinatorCard
                    key={member.id}
                    member={member}
                    highlightRole={true}
                    customDelay={0.05 + idx * 0.08}
                  />
                ))}
                {jointSecretary.map((member, idx) => (
                  <CoordinatorCard
                    key={member.id}
                    member={member}
                    highlightRole={true}
                    customDelay={0.12 + idx * 0.08}
                  />
                ))}
                {jointTreasurer.map((member, idx) => (
                  <CoordinatorCard
                    key={member.id}
                    member={member}
                    highlightRole={true}
                    customDelay={0.19 + idx * 0.08}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================== */}
          {/* 3. TECHNICAL TEAM */}
          {/* ==================================================== */}
          <div>
            <GroupSubheader
              number="03"
              title="TECHNICAL TEAM"
              subtitle="Driving engineering, digital infrastructure, and sustainable project development."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {technicalTeam.map((member, idx) => (
                <CoordinatorCard
                  key={member.id}
                  member={member}
                  customDelay={idx * 0.06}
                />
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* 4. MEDIA TEAM */}
          {/* ==================================================== */}
          <div>
            <GroupSubheader
              number="04"
              title="MEDIA TEAM"
              subtitle="Crafting outreach visuals, campaigns, and digital communication."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {mediaTeam.map((member, idx) => (
                <CoordinatorCard
                  key={member.id}
                  member={member}
                  customDelay={idx * 0.06}
                />
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* 5. DOCUMENTATION TEAM */}
          {/* ==================================================== */}
          <div>
            <GroupSubheader
              number="05"
              title="DOCUMENTATION TEAM"
              subtitle="Recording official activities, reports, and administrative records."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {documentationTeam.map((member, idx) => (
                <CoordinatorCard
                  key={member.id}
                  member={member}
                  customDelay={idx * 0.06}
                />
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* 6. PLANNING TEAM */}
          {/* ==================================================== */}
          <div>
            <GroupSubheader
              number="06"
              title="PLANNING TEAM"
              subtitle="Strategizing event schedules, logistics, and resource management."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {planningTeam.map((member, idx) => (
                <CoordinatorCard
                  key={member.id}
                  member={member}
                  customDelay={idx * 0.06}
                />
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* 7. EXECUTIVE MEMBERS */}
          {/* ==================================================== */}
          <div>
            <GroupSubheader
              number="07"
              title="EXECUTIVE MEMBERS"
              subtitle="Active student representatives supporting club initiatives across departments."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {executiveMembers.map((member, idx) => (
                <CoordinatorCard
                  key={member.id}
                  member={member}
                  customDelay={(idx % 5) * 0.05}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
