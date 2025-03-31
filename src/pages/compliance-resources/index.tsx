
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ComplianceResources from '@/components/ComplianceResources';
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';

const ComplianceResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-8 max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Compliance Resources</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Access guides, templates, checklists, and tools to support your compliance journey
            </p>
          </div>
          
          <GlassCard className="p-6 mb-8">
            <ComplianceResources />
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default ComplianceResourcesPage;
