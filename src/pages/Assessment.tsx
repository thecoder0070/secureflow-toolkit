
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AssessmentWizard from '@/components/AssessmentWizard';
import ComplianceResources from '@/components/ComplianceResources';
import { FadeIn } from '@/components/animations/FadeIn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GlassCard } from '@/components/ui/GlassCard';
import { ShieldCheck, BookOpen, FileText, Zap, Info, CheckCircle2, Clock, FileQuestion } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
                      
                      <Accordion type="single" collapsible className="w-full mt-6">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>What to expect in a guided assessment</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 p-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <p className="text-sm">Initial consultation to understand your business needs and compliance goals</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <p className="text-sm">Gap analysis against your target compliance frameworks</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <p className="text-sm">Custom roadmap development with realistic timelines</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <p className="text-sm">Control implementation guidance and documentation review</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <p className="text-sm">Weekly check-ins with your dedicated compliance expert</p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Policy development assistance</AccordionTrigger>
                          <AccordionContent>
                            <div className="p-2">
                              <p className="text-sm mb-3">
                                Our guided assessment includes assistance with developing and implementing the essential security policies required for your target frameworks, including:
                              </p>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Information Security Policy</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Acceptable Use Policy</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Access Control Policy</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Data Classification Policy</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Incident Response Plan</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Business Continuity Plan</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Change Management Policy</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-3 w-3" />
                                  <p>Vendor Management Policy</p>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      
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
                      
                      <Accordion type="single" collapsible className="w-full mt-6">
                        <AccordionItem value="audit-1">
                          <AccordionTrigger>The Audit Lifecycle</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 p-2">
                              <div className="flex gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                                  1
                                </div>
                                <div>
                                  <h5 className="font-medium">Preparation Phase</h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    3-6 months before audit: Control implementation, policy development, and evidence collection preparation.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                                  2
                                </div>
                                <div>
                                  <h5 className="font-medium">Pre-Audit Assessment</h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    1-2 months before audit: Gap analysis, mock audits, and final remediation of identified issues.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                                  3
                                </div>
                                <div>
                                  <h5 className="font-medium">Active Audit</h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    During audit: Manage auditor requests, provide evidence, and address any immediate concerns.
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex gap-3">
                                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                                  4
                                </div>
                                <div>
                                  <h5 className="font-medium">Post-Audit Activities</h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    After audit: Address audit findings, implement corrective actions, and prepare for continuous compliance.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="audit-2">
                          <AccordionTrigger>User Access Review Best Practices</AccordionTrigger>
                          <AccordionContent>
                            <div className="p-2">
                              <p className="text-sm mb-3">
                                User access reviews are critical for compliance with SOC 2, ISO 27001, and many other frameworks. Our audit readiness program helps you implement these best practices:
                              </p>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                  <p>Document a formal user access review process with defined roles and responsibilities</p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                  <p>Conduct reviews at least quarterly (more frequently for critical systems)</p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                  <p>Include all systems, applications, and infrastructure in your review scope</p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                  <p>Verify appropriate access based on least privilege and need-to-know principles</p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                  <p>Maintain documentation of all reviews, approvals, and actions taken</p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                  <p>Automate the review process where possible to improve efficiency and reliability</p>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      
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
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <Info className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Policy Management</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Well-documented policies are the foundation of your compliance program. Keep them up-to-date and easily accessible to your team.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Continuous Compliance</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Compliance is not a one-time event. Establish a continuous monitoring program to maintain compliance throughout the year.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <FileQuestion className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Evidence Collection</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Start gathering evidence early. Automated evidence collection reduces the burden on your team during audits.
                      </p>
                    </div>
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
                  
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      View Detailed Comparison
                    </Button>
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
