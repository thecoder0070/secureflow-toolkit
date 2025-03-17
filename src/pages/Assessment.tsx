
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AssessmentWizard from '@/components/AssessmentWizard';
import { FadeIn } from '@/components/animations/FadeIn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GlassCard } from '@/components/ui/GlassCard';
import { ShieldCheck } from 'lucide-react';

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
          
          <GlassCard className="p-6 mb-8 max-w-3xl mx-auto">
            <Tabs defaultValue="self-assessment" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="self-assessment">Self Assessment</TabsTrigger>
                <TabsTrigger value="guided">Guided Assessment</TabsTrigger>
                <TabsTrigger value="audit">Audit Readiness</TabsTrigger>
              </TabsList>
              
              <TabsContent value="self-assessment">
                <Alert className="mb-6">
                  <AlertDescription>
                    Self-assessment is the fastest way to evaluate your security posture. Answer the questions honestly to get the most accurate results.
                  </AlertDescription>
                </Alert>
                <AssessmentWizard />
              </TabsContent>
              
              <TabsContent value="guided">
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">Guided Assessment Available Soon</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our team of security experts will help you complete your assessment through scheduled sessions.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="audit">
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">Audit Readiness Available Soon</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comprehensive audit preparation with simulated audit scenarios and direct feedback from certified auditors.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default Assessment;
