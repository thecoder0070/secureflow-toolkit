
import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const TrustHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
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
            Discover how SecureFlow protects your data with enterprise-grade security,
            strict privacy controls, and comprehensive compliance certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform">
            <div className="mb-4 h-16 flex items-center justify-center">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-4">
                <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Security First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We implement multiple layers of security to protect your data and keep your information private.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform">
            <div className="mb-4 h-16 flex items-center justify-center">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-purple-600 dark:text-purple-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Compliant & Certified</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We maintain industry-leading compliance certifications and regularly undergo security audits.
            </p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform">
            <div className="mb-4 h-16 flex items-center justify-center">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-600 dark:text-green-400">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy Protected</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your data belongs to you. We're committed to transparency in our data handling practices.
            </p>
          </GlassCard>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="mr-4">
            Request Security Assessment
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustHero;
