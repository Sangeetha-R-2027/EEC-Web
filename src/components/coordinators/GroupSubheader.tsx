import React from 'react';

interface GroupSubheaderProps {
  number: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const GroupSubheader: React.FC<GroupSubheaderProps> = ({
  number,
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`mb-6 sm:mb-8 md:mb-10 ${center ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center gap-2 mb-1.5 ${center ? 'justify-center' : 'justify-start'}`}>
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#31572C]/10 text-[#31572C]">
          {number}
        </span>
        <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#132A13] tracking-tight">
          {title}
        </h3>
      </div>
      {subtitle && (
        <p className="text-xs sm:text-sm text-[#536453] max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-3 w-12 h-[2px] bg-[#4F772D]/30 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};
