import React, { useState } from 'react';

interface ProfileFrameProps {
  imageSrc: string;
  name: string;
  role: string;
  size?: 'normal' | 'large';
  className?: string;
}

export const ProfileFrame: React.FC<ProfileFrameProps> = ({
  imageSrc,
  name,
  role,
  size = 'normal',
  className = '',
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  // Derive monogram initials
  const initials = name
    .replace(/^Dr.s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  const sizeClasses =
    size === 'large'
      ? 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40'
      : 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32';

  return (
    <div
      className={`relative aspect-square shrink-0 mx-auto select-none ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      {/* 
        Inner Circular Photo Container:
        Clipped to a circle, positioned precisely inside the gold ring.
      */}
      <div className="absolute inset-[6%] rounded-full overflow-hidden bg-gradient-to-br from-[#EAF0E7] to-[#D5E2D2] flex items-center justify-center shadow-inner">
        {!imageFailed && imageSrc ? (
          <img
            src={imageSrc}
            alt={`${name} - ${role}`}
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-105"
            loading="lazy"
          />
        ) : (
          /* Neutral Nature-inspired Monogram Avatar Fallback */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F0F5ED] to-[#DFEBE0] text-[#31572C] transition-colors duration-300 group-hover:from-[#F7F4E9] group-hover:to-[#EBE5D0] group-hover:text-[#132A13]">
            <span className="font-display font-bold text-base sm:text-lg md:text-xl tracking-wider opacity-90">
              {initials || 'EEC'}
            </span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F772D]/40 group-hover:text-[#D4AF37]/70 mt-0.5 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9z" />
            </svg>
          </div>
        )}
      </div>

      {/* 
        Gold Circular Decorative Border Overlay:
        Sits exactly above the clipped circle with glowing highlight on hover/touch.
      */}
      <img
        src="/images/gold-frame.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-sm transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.55)] group-active:scale-[1.03] group-active:brightness-110 group-active:drop-shadow-[0_0_10px_rgba(212,175,55,0.55)]"
      />
    </div>
  );
};
