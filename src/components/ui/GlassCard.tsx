
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  borderColor?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, intensity = 'medium', borderColor, ...props }, ref) => {
    const getBackdropIntensity = () => {
      switch (intensity) {
        case 'low': return 'backdrop-blur-sm bg-white/40 dark:bg-gray-900/30';
        case 'medium': return 'backdrop-blur-md bg-white/60 dark:bg-gray-900/50';
        case 'high': return 'backdrop-blur-lg bg-white/80 dark:bg-gray-900/70';
        default: return 'backdrop-blur-md bg-white/60 dark:bg-gray-900/50';
      }
    };
    
    const getBorder = () => {
      if (borderColor) return `border ${borderColor}`;
      return 'border border-white/20 dark:border-white/10';
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl transition-all duration-300',
          getBackdropIntensity(),
          getBorder(),
          'shadow-soft',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };
