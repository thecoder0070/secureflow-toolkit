
import { BookOpen, CheckCircle2, FileText, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GuidedAssessment = () => {
  return (
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
  );
};

export default GuidedAssessment;
