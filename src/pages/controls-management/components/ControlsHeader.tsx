
import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const ControlsHeader = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Continuous Controls Management
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Streamline your security compliance with centralized GRC middleware that connects all your systems.
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
            Request Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ControlsHeader;
