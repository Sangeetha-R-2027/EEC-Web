import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { aboutContent } from '../../config/content';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../ui/Container';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Fully typed animation variants for Framer Motion
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[#F9FAF6] text-[#243525] py-20 sm:py-28 md:py-36 lg:py-44 border-t border-[#31572C]/15 overflow-hidden"
      aria-label="About EEC"
    >
      {/* Background Architectural Accent Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#132A13 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <Container>
        {/*
          Responsive Composition:
          - Desktop (lg:): 2-Column editorial composition (Left: Logo, Right: Eyebrow + Main Heading + Institution + Description)
          - Mobile / Tablet (<lg): Natural vertical stack with exact order:
            1. Eyebrow
            2. EEC Logo
            3. Main Heading
            4. Institution
            5. Description
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN (Desktop: 5 Cols) / MOBILE ORDER: 2 */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center items-center">
            <motion.div
              id="about-logo-anchor"
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] aspect-square flex items-center justify-center p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#31572C]/15 shadow-sm shadow-[#132A13]/5 transition-all duration-300 hover:border-[#4F772D]/30"
            >
              {/* Subtle Nature Corner Accent Markers */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#4F772D]/40" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#4F772D]/40" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#4F772D]/40" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#4F772D]/40" />

              {/* EEC Logo (Preserving Exact Aspect Ratio) */}
              <img
                src={siteConfig.brand.logo}
                alt={siteConfig.brand.logoAlt}
                className="w-full h-full object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN (Desktop: 7 Cols) / MOBILE ORDERS: 1, 3, 4, 5 */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            
            {/* 1. Small Eyebrow: "ABOUT EEC" */}
            <motion.div
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
              className="order-1 flex items-center gap-2.5 mb-3 sm:mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#4F772D]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#4F772D] font-display">
                {aboutContent.eyebrow}
              </span>
            </motion.div>

            {/* Mobile Spacer to visually separate Eyebrow from Logo on mobile stack */}
            <div className="order-2 lg:hidden h-2" />

            {/* 3. Main Heading: "ENERGY & ENVIRONMENT CONSERVATION CLUB" */}
            <motion.h2
              custom={0.25}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
              className="order-3 font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#132A13] tracking-tight leading-[1.15] max-w-2xl"
            >
              {aboutContent.title.split('\n').map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>

            {/* 4. Institution: "KONGU ENGINEERING COLLEGE" */}
            <motion.p
              custom={0.35}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
              className="order-4 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#31572C] uppercase font-display"
            >
              {aboutContent.institution}
            </motion.p>

            {/* Subtle Hairline Divider */}
            <motion.div
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
              className="order-5 my-5 sm:my-6 md:my-7 w-16 sm:w-20 h-[2px] bg-[#4F772D]/30"
            />

            {/* 5. Supplied Description */}
            <motion.p
              custom={0.45}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
              className="order-6 text-sm sm:text-base md:text-lg text-[#243525]/90 leading-relaxed font-normal max-w-2xl"
            >
              {aboutContent.description}
            </motion.p>

          </div>

        </div>
      </Container>
    </section>
  );
};
