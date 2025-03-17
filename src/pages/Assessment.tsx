
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AssessmentWizard from '@/components/AssessmentWizard';
import ComplianceResources from '@/components/ComplianceResources';
import { FadeIn } from '@/components/animations/FadeIn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GlassCard } from '@/components/ui/GlassCard';
import { ShieldCheck, BookOpen, FileText, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
                    <div className="space-y-4">
                      <div className="mb-6">
                        <h3 className="text-xl font-medium mb-2">Expert-Guided Assessment</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Our guided assessment pairs you with a compliance expert who will help you navigate the process and provide personalized recommendations.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-full mr-4">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Expert Consultation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              1:1 sessions with compliance experts who understand your industry requirements.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-full mr-4">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Comprehensive Documentation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Receive tailored documentation and evidence collection guidance specific to your business needs.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-full mr-4">
                            <Zap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Faster Time to Compliance</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Accelerate your compliance journey with expert guidance that helps you avoid common pitfalls.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center py-8">
                        <p className="text-gray-600 dark:text-gray-400 italic mb-2">
                          "The guided assessment saved us months of work and helped us achieve SOC 2 compliance in record time."
                        </p>
                        <p className="text-sm font-medium">— Sarah Johnson, CTO at TechSecure</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                          Guided Assessment Available Soon
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Join the waitlist to be notified when guided assessments are available.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="audit">
                    <div className="space-y-4">
                      <div className="mb-6">
                        <h3 className="text-xl font-medium mb-2">Audit Readiness Program</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Our audit readiness program helps you prepare for and pass your compliance audits with confidence.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-md border border-amber-200 dark:border-amber-900 mb-6">
                        <h4 className="font-medium text-amber-800 dark:text-amber-400 mb-2">Why Audit Readiness Matters</h4>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          Companies that go through a structured audit readiness program are 3x more likely to pass their audit on the first attempt and spend 60% less time on remediation.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border p-4 rounded-md">
                            <h4 className="font-medium mb-1">Pre-Audit Assessment</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Comprehensive review of your controls against audit criteria to identify and fix gaps before the auditor arrives.
                            </p>
                          </div>
                          
                          <div className="border p-4 rounded-md">
                            <h4 className="font-medium mb-1">Mock Audit Simulation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Realistic audit simulation with experienced auditors to prepare your team for the real thing.
                            </p>
                          </div>
                          
                          <div className="border p-4 rounded-md">
                            <h4 className="font-medium mb-1">Evidence Organization</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Structured approach to organizing and presenting your evidence to auditors in the most effective way.
                            </p>
                          </div>
                          
                          <div className="border p-4 rounded-md">
                            <h4 className="font-medium mb-1">Auditor Facilitation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              We help manage communication with your auditor and ensure a smooth, efficient audit process.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center py-4">
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                          Audit Readiness Program Available Soon
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Join the waitlist to be notified when the audit readiness program is available.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </GlassCard>
            </div>
            
            <div className="lg:col-span-1">
              <GlassCard className="p-6 h-full">
                <h3 className="text-lg font-medium mb-4">Compliance Insights</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-950/40 p-4 rounded-md border border-blue-100 dark:border-blue-800">
                    <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-1">Did You Know?</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-300">
                      The average cost of a data breach in 2023 was $4.45 million, making robust security controls more important than ever.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-950/40 p-4 rounded-md border border-green-100 dark:border-green-800">
                    <h4 className="font-medium text-green-700 dark:text-green-400 mb-1">Compliance Tip</h4>
                    <p className="text-sm text-green-600 dark:text-green-300">
                      Document your security measures as you implement them. Real-time documentation makes the audit process much smoother.
                    </p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium mb-2">Framework Comparison</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-sm font-medium">Framework</span>
                      <span className="text-sm font-medium">Time to Implement</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm">SOC 2 Type I</span>
                      <span className="text-sm">2-3 months</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm">SOC 2 Type II</span>
                      <span className="text-sm">6-9 months</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm">ISO 27001</span>
                      <span className="text-sm">6-12 months</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm">HIPAA</span>
                      <span className="text-sm">3-6 months</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm">GDPR</span>
                      <span className="text-sm">3-12 months</span>
                    </div>
                  </div>
                </div>
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
