
import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, File } from 'lucide-react';

const TrustHero = () => {
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
            Trust & Security Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At SecureFlow, our commitment to security and privacy is at the core of everything we do.
            Learn how we protect your data and maintain the highest standards of compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform">
            <div className="mb-4 h-16 flex items-center justify-center">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
                <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our comprehensive security program implements multiple layers of protection with continuous monitoring and testing.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform">
            <div className="mb-4 h-16 flex items-center justify-center">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-4">
                <Lock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Compliance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We maintain rigorous compliance with industry standards including SOC 2, ISO 27001, HIPAA, GDPR, and CCPA.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform">
            <div className="mb-4 h-16 flex items-center justify-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-4">
                <File className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparent Policies</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're committed to transparency in our data handling practices with clear policies and responsive support.
            </p>
          </GlassCard>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
            View Security Documentation
          </Button>
          <Button variant="outline" size="lg">
            Contact Security Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustHero;
