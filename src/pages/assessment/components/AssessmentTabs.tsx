
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AssessmentWizard from '@/components/AssessmentWizard';
import GuidedAssessment from './GuidedAssessment';
import AuditReadiness from './AuditReadiness';

const AssessmentTabs = () => {
  return (
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
        <GuidedAssessment />
      </TabsContent>
      
      <TabsContent value="audit">
        <AuditReadiness />
      </TabsContent>
    </Tabs>
  );
};

export default AssessmentTabs;
