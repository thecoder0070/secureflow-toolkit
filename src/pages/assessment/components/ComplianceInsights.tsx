
import { Info, Clock, FileQuestion } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const ComplianceInsights = () => {
  return (
    <>
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
    </>
  );
};

export default ComplianceInsights;
