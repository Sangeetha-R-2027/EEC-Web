import React, { useRef, useState, useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => setIsVideoLoaded(true);
      const handleError = () => setVideoError(true);

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-between items-center bg-[#132A13] text-white overflow-hidden select-none"
      aria-label="Hero Section"
    >
      {/* Background Media Container (4K Video Ready) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!videoError && siteConfig.hero.videoSrc && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={siteConfig.hero.posterSrc || undefined}
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <source src={siteConfig.hero.videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Cinematic Atmospheric Nature Fallback */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#132A13]/90 via-[#132A13]/60 to-[#132A13] z-10" />

        {/* Subtle Architectural Nature Hairlines */}
        <div 
          className="absolute inset-0 opacity-[0.07] z-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#90A955 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Subtle Ambient Light Glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#31572C]/40 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#4F772D]/20 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* Spacer for Top Navbar */}
      <div className="h-20 w-full" />

      {/* Center Editorial Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Subtle Nature Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#90A955]/30 bg-[#31572C]/40 backdrop-blur-sm mb-6 sm:mb-8 transition-colors duration-200">
          <span className="w-2 h-2 rounded-full bg-[#ECF39E] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#ECF39E]">
            Sustainability &amp; Conservation
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] max-w-4xl">
          ENERGY &amp; ENVIRONMENT
          <span className="block text-[#90A955] mt-1 sm:mt-2">
            CONSERVATION CLUB
          </span>
        </h1>

        {/* Institution Label */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-medium text-[#ECF39E]/90 tracking-wider uppercase font-display">
          {siteConfig.hero.subheadline}
        </p>

        {/* Future Transition Anchor Marker */}
        <div id="hero-logo-origin" className="w-1 h-1 opacity-0 pointer-events-none" />
      </div>

      {/* Bottom Scroll Cue Indicator */}
      <div className="relative z-20 pb-8 sm:pb-12 text-center">
        <a
          href="#about"
          onClick={handleScrollToAbout}
          className="group inline-flex flex-col items-center gap-2 text-white/70 hover:text-[#ECF39E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ECF39E] rounded p-2 transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase font-sans">
            {siteConfig.hero.scrollIndicatorText}
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-9 rounded-full border border-white/30 group-hover:border-[#ECF39E] flex items-start justify-center p-1 transition-colors duration-300">
            <span className="w-1 h-2 bg-[#ECF39E] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
