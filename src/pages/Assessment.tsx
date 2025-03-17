
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AssessmentWizard from '@/components/AssessmentWizard';

const Assessment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <AssessmentWizard />
      </div>
    </div>
  );
};

export default Assessment;
