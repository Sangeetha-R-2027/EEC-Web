import React, { useState, useEffect, useCallback } from 'react';
import { navItems } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const updateActiveSection = useCallback(() => {
    const scrollPos = window.scrollY;
    setIsScrolled(scrollPos > 40);

    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // If reached bottom of page, activate coordinators
    if (scrollPos + windowHeight >= docHeight - 80) {
      setActiveSection('coordinators');
      return;
    }

    // Page order: home (0) -> about -> events -> coordinators (bottom)
    const coordinatorsEl = document.getElementById('coordinators');
    const eventsEl = document.getElementById('events');
    const aboutEl = document.getElementById('about');
    const homeEl = document.getElementById('home');

    const triggerPoint = scrollPos + windowHeight * 0.35;

    if (coordinatorsEl && triggerPoint >= coordinatorsEl.offsetTop) {
      setActiveSection('coordinators');
      return;
    }

    if (eventsEl && triggerPoint >= eventsEl.offsetTop) {
      setActiveSection('events');
      return;
    }

    if (aboutEl && triggerPoint >= aboutEl.offsetTop) {
      setActiveSection('about');
      return;
    }

    if (homeEl) {
      setActiveSection('home');
      return;
    }

    setActiveSection('home');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    const rafId = requestAnimationFrame(updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      cancelAnimationFrame(rafId);
    };
  }, [updateActiveSection]);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAvailable: boolean) => {
    if (!isAvailable) {
      e.preventDefault();
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        const sectionId = href.replace('#', '');
        setActiveSection(sectionId);
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#132A13]/94 backdrop-blur-md border-b border-[#31572C]/40 py-2.5 sm:py-3 shadow-lg shadow-[#132A13]/15'
          : 'bg-gradient-to-b from-[#132A13]/85 via-[#132A13]/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Anchor */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', true)}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg p-1 transition-transform duration-200"
          aria-label="EEC - Energy & Environment Conservation Club - Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white p-0.5 border border-[#4F772D]/40 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src={siteConfig.brand.logo}
              alt={siteConfig.brand.logoAlt}
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display font-bold text-base sm:text-lg tracking-wider group-hover:text-[#ECF39E] transition-colors duration-200">
              {siteConfig.brand.shortName}
            </span>
            <span className="text-[#90A955] text-[10px] sm:text-xs font-medium tracking-wide hidden xs:inline-block">
              {siteConfig.brand.college}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Compact Rectangular Highlight Boxes) */}
        <nav
          className="hidden md:flex items-center gap-2 lg:gap-3"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            if (item.isAvailable) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, true)}
                  className={`relative px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold tracking-wider transition-all duration-300 ease-out select-none border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'bg-[#31572C] text-[#ECF39E] border-[#D4AF37]/80 shadow-[0_0_14px_rgba(212,175,55,0.32)] scale-[1.02]'
                      : 'bg-transparent text-white/80 border-transparent hover:bg-[#31572C] hover:text-[#ECF39E] hover:border-[#D4AF37]/70 hover:shadow-[0_0_12px_rgba(212,175,55,0.28)] hover:scale-[1.03] active:scale-[0.98]'
                  }`}
                >
                  {item.label}
                </a>
              );
            }

            // Inactive / Future sections
            return (
              <div
                key={item.id}
                className="relative group px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-semibold tracking-wider text-white/40 cursor-default select-none border border-transparent"
                aria-disabled="true"
              >
                <span>{item.label}</span>
                <span className="hidden group-hover:inline-block absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] font-medium uppercase tracking-widest text-[#132A13] bg-[#ECF39E] rounded shadow-md whitespace-nowrap pointer-events-none transition-opacity duration-200">
                  {item.statusText || 'Coming Soon'}
                </span>
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-[#ECF39E] hover:bg-[#31572C]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-colors duration-200"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[58px] z-40 bg-[#132A13]/98 backdrop-blur-xl border-t border-[#31572C]/30 flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-2.5 pt-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              if (item.isAvailable) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                      isActive
                        ? 'bg-[#31572C] text-[#ECF39E] border-[#D4AF37]/80 shadow-[0_0_12px_rgba(212,175,55,0.28)]'
                        : 'bg-transparent text-white/90 border-transparent hover:bg-[#31572C]/60 hover:text-white hover:border-[#D4AF37]/40 active:bg-[#31572C] active:border-[#D4AF37]/70 active:text-[#ECF39E]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg className={`w-4 h-4 transition-colors ${isActive ? 'text-[#ECF39E]' : 'text-[#90A955]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                );
              }

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium tracking-wider text-white/40 cursor-default border border-transparent"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-[#31572C]/40 text-[#90A955]">
                    {item.statusText || 'Coming Soon'}
                  </span>
                </div>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-[#31572C]/30 text-center">
            <p className="text-xs text-[#90A955] tracking-wide">
              {siteConfig.brand.name}
            </p>
            <p className="text-[11px] text-white/40 mt-1">
              {siteConfig.brand.college}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
