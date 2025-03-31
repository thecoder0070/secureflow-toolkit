
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';
import AssessmentTabs from './components/AssessmentTabs';
import ComplianceInsights from './components/ComplianceInsights';
import AssessmentHeader from './components/AssessmentHeader';
import AssessmentRunsList from '@/components/AssessmentRunsList';
import AssessmentAppBar from './components/AssessmentAppBar';

const Assessment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <AssessmentAppBar />
          <AssessmentHeader />
          
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
            <AssessmentRunsList />
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default Assessment;
