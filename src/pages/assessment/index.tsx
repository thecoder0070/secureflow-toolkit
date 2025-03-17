
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AssessmentWizard from '@/components/AssessmentWizard';
import ComplianceResources from '@/components/ComplianceResources';
import { FadeIn } from '@/components/animations/FadeIn';
import { ShieldCheck } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import AssessmentTabs from './components/AssessmentTabs';
import ComplianceInsights from './components/ComplianceInsights';

const Assessment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-8 max-w-3xl mx-auto">
            <div className="flex items-center mb-4">
              <ShieldCheck className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-3xl font-bold">Security Assessment</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Complete this assessment to identify gaps in your security program and get personalized recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <GlassCard className="p-6 h-full">
                <AssessmentTabs />
              </GlassCard>
            </div>
            
            <div className="lg:col-span-1">
              <GlassCard className="p-6 h-full">
                <ComplianceInsights />
              </GlassCard>
            </div>
          </div>
          
          <GlassCard className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Compliance Resources</h2>
            <ComplianceResources />
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default Assessment;
