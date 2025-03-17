
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  active?: boolean;
  selected?: boolean;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ children, className, hover = true, active = false, selected = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl bg-white dark:bg-gray-900 shadow-card p-6 border border-gray-100 dark:border-gray-800 transition-all duration-300',
          hover && 'hover:shadow-card-hover hover:-translate-y-1',
          active && 'shadow-card-hover scale-[0.98] border-primary/30',
          selected && 'ring-2 ring-primary ring-offset-2',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomCard.displayName = 'CustomCard';

export { CustomCard };
