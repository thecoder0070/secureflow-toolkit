
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';
import SystemsIntegrationAnimation from './SystemsIntegrationAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-16 px-4 md:px-8">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_10%_20%,rgba(0,153,255,0.1)_0%,rgba(0,94,189,0.08)_20%)] -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn delay={100} duration={700}>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-1 mb-6">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
                <span className="text-sm font-medium text-primary">Simplify Compliance</span>
              </div>
            </FadeIn>

            <FadeIn delay={300} duration={700}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Security Compliance, 
                <span className="relative">
                  <span className="relative z-10"> Simplified</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 z-0" />
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={500} duration={700}>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                Connect your business systems once and meet security requirements effortlessly with our 
                intuitive compliance platform. Streamline assessments, track progress, and showcase your security posture.
              </p>
            </FadeIn>

            <FadeIn delay={700} duration={700}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="px-8 py-6 text-base font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium">
                  Book a Demo
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={900} duration={700}>
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold mb-1">94%</div>
                  <div className="text-sm text-gray-500">Time Saved</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold mb-1">2x</div>
                  <div className="text-sm text-gray-500">Faster Audits</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold mb-1">50+</div>
                  <div className="text-sm text-gray-500">Frameworks</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn delay={300} direction="left" distance={30}>
              <SystemsIntegrationAnimation />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
