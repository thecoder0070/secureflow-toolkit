
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ComplianceOverview from '@/components/ComplianceOverview';
import StatusCard from '@/components/StatusCard';
import FrameworkSelector from '@/components/FrameworkSelector';
import { FadeIn } from '@/components/animations/FadeIn';

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Compliance Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Track your security compliance progress across multiple frameworks
            </p>
          </div>
        </FadeIn>
        
        <ComplianceOverview />
        
        <div className="mt-12">
          <FadeIn>
            <h2 className="text-xl font-semibold mb-6">Recent Assessments</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatusCard 
              title="SOC 2 Type II Annual Assessment" 
              status="in-progress" 
              description="Annual audit for SOC 2 Type II compliance" 
              percentage={68}
            />
            <StatusCard 
              title="GDPR Readiness Assessment" 
              status="completed" 
              description="Assessment of GDPR compliance controls" 
              percentage={100}
            />
            <StatusCard 
              title="ISO 27001 Gap Analysis" 
              status="not-started" 
              description="Identify gaps in ISO 27001 compliance" 
              percentage={0}
            />
          </div>
        </div>
        
        <div className="mt-12">
          <FrameworkSelector />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
