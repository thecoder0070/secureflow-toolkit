
import { CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AuditReadiness = () => {
  return (
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
  );
};

export default AuditReadiness;
