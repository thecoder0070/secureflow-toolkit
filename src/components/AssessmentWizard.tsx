
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/GlassCard';
import { CheckCircle, Circle, ChevronRight, ChevronLeft, Upload, FileText, ShieldCheck, Building, UserCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import EvidenceUploader from '@/components/EvidenceUploader';
import { useToast } from '@/hooks/use-toast';

const steps = [
  { id: 'organization', name: 'Organization', icon: Building },
  { id: 'people', name: 'People', icon: UserCheck },
  { id: 'controls', name: 'Security Controls', icon: ShieldCheck },
  { id: 'evidence', name: 'Evidence Collection', icon: FileText },
  { id: 'review', name: 'Review', icon: CheckCircle },
];

const organizationQuestions = [
  {
    id: 'org-q1',
    question: 'What type of organization are you?',
    description: 'Select the option that best describes your organization.',
    type: 'select',
    options: ['SaaS/Software Company', 'Financial Services', 'Healthcare', 'E-commerce', 'Education', 'Manufacturing', 'Other'],
  },
  {
    id: 'org-q2',
    question: 'How many employees does your organization have?',
    description: 'This helps determine the scope of your compliance program.',
    type: 'select',
    options: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'],
  },
  {
    id: 'org-q3',
    question: 'Which compliance frameworks are you targeting?',
    description: 'Select all the frameworks that apply to your organization.',
    type: 'multiselect',
    options: ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI DSS', 'CCPA', 'NIST'],
  },
];

const peopleQuestions = [
  {
    id: 'people-q1',
    question: 'Do you have a formal onboarding process for new employees?',
    description: 'This includes background checks, security training, and access provisioning.',
    type: 'boolean',
  },
  {
    id: 'people-q2',
    question: 'How often do you conduct security awareness training?',
    description: 'Regular security awareness training helps employees understand security risks and best practices.',
    type: 'select',
    options: ['Monthly', 'Quarterly', 'Bi-annually', 'Annually', 'Ad-hoc', 'Never'],
  },
  {
    id: 'people-q3',
    question: 'Do you have a formal offboarding process?',
    description: 'This includes revoking access, returning equipment, and exit interviews.',
    type: 'boolean',
  },
];

const controlQuestions = [
  {
    id: 'ctrl-q1',
    question: 'Does your organization have a formal security policy?',
    description: 'A documented security policy outlines the organization\'s approach to security and compliance.',
    type: 'boolean',
  },
  {
    id: 'ctrl-q2',
    question: 'Do you have an incident response plan?',
    description: 'A documented plan that outlines how your organization responds to security incidents.',
    type: 'boolean',
  },
  {
    id: 'ctrl-q3',
    question: 'Do you have a risk assessment process in place?',
    description: 'A regular risk assessment helps identify and mitigate security risks.',
    type: 'boolean',
  },
  {
    id: 'ctrl-q4',
    question: 'How do you manage vendor security?',
    description: 'Your approach to ensuring third-party vendors meet your security requirements.',
    type: 'select',
    options: ['Formal vendor assessment', 'Contractual requirements', 'SOC 2 reports review', 'No formal process'],
  },
  {
    id: 'ctrl-q5',
    question: 'How often do you perform vulnerability scanning?',
    description: 'Regular vulnerability scanning helps identify security weaknesses in your systems.',
    type: 'select',
    options: ['Weekly', 'Monthly', 'Quarterly', 'Annually', 'Never'],
  },
];

const evidenceRequirements = [
  {
    id: 'evidence-1',
    title: 'Security Policies',
    description: 'Upload your organization\'s security policies and procedures.',
    format: 'PDF, DOCX',
    required: true,
  },
  {
    id: 'evidence-2',
    title: 'Risk Assessment',
    description: 'Upload documentation of your most recent risk assessment.',
    format: 'PDF, XLSX, DOCX',
    required: true,
  },
  {
    id: 'evidence-3',
    title: 'Employee Training Records',
    description: 'Upload records of security awareness training for employees.',
    format: 'PDF, XLSX, CSV',
    required: true,
  },
  {
    id: 'evidence-4',
    title: 'Vendor Management',
    description: 'Upload documentation of your vendor management process.',
    format: 'PDF, DOCX',
    required: false,
  },
  {
    id: 'evidence-5',
    title: 'Incident Response Plan',
    description: 'Upload your incident response plan.',
    format: 'PDF, DOCX',
    required: true,
  },
];

const AssessmentWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [uploads, setUploads] = useState<Record<string, File[]>>({});
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      toast({
        title: "Assessment Submitted",
        description: "Your assessment has been submitted successfully.",
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBooleanAnswer = (questionId: string, value: boolean) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSelectAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleMultiSelectAnswer = (questionId: string, value: string) => {
    const currentValues = answers[questionId] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    
    setAnswers({ ...answers, [questionId]: newValues });
  };

  const handleFileUpload = (evidenceId: string, files: File[]) => {
    setUploads({ ...uploads, [evidenceId]: files });
  };

  const getQuestionsForCurrentStep = () => {
    switch(steps[currentStep].id) {
      case 'organization':
        return organizationQuestions;
      case 'people':
        return peopleQuestions;
      case 'controls':
        return controlQuestions;
      default:
        return [];
    }
  };

  const isCurrentStepComplete = () => {
    if (steps[currentStep].id === 'evidence') {
      const requiredEvidences = evidenceRequirements.filter(e => e.required);
      return requiredEvidences.every(e => uploads[e.id] && uploads[e.id].length > 0);
    }

    if (steps[currentStep].id === 'review') {
      return true;
    }

    const currentQuestions = getQuestionsForCurrentStep();
    return currentQuestions.every(q => {
      if (q.type === 'multiselect') {
        return answers[q.id] && answers[q.id].length > 0;
      }
      return answers[q.id] !== undefined;
    });
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Security Assessment</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Complete this assessment to evaluate your security posture against industry standards.
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="mt-6 grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center mb-2',
                  index < currentStep ? 'bg-primary text-white' : 
                  index === currentStep ? 'border-2 border-primary text-primary' : 
                  'border-2 border-gray-200 dark:border-gray-700 text-gray-400'
                )}>
                  {index < currentStep ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={cn(
                  'text-sm',
                  index === currentStep ? 'font-medium text-primary' : 
                  index < currentStep ? 'font-medium' : 'text-gray-500'
                )}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <GlassCard className="p-6 mb-6">
          {steps[currentStep].id === 'organization' && (
            <div className="space-y-8">
              {organizationQuestions.map((question) => (
                <div key={question.id} className="fade-in">
                  <h3 className="text-lg font-medium mb-2">{question.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{question.description}</p>
                  
                  {question.type === 'select' && (
                    <div className="grid grid-cols-2 gap-3">
                      {question.options.map((option) => (
                        <Button
                          key={option}
                          variant={answers[question.id] === option ? "default" : "outline"}
                          onClick={() => handleSelectAnswer(question.id, option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                  
                  {question.type === 'multiselect' && (
                    <div className="grid grid-cols-2 gap-3">
                      {question.options.map((option) => (
                        <Button
                          key={option}
                          variant={answers[question.id]?.includes(option) ? "default" : "outline"}
                          onClick={() => handleMultiSelectAnswer(question.id, option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {steps[currentStep].id === 'people' && (
            <div className="space-y-8">
              {peopleQuestions.map((question) => (
                <div key={question.id} className="fade-in">
                  <h3 className="text-lg font-medium mb-2">{question.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{question.description}</p>
                  
                  {question.type === 'boolean' && (
                    <div className="flex space-x-4">
                      <Button
                        variant={answers[question.id] === true ? "default" : "outline"}
                        onClick={() => handleBooleanAnswer(question.id, true)}
                        className="flex-1"
                      >
                        Yes
                      </Button>
                      <Button
                        variant={answers[question.id] === false ? "default" : "outline"}
                        onClick={() => handleBooleanAnswer(question.id, false)}
                        className="flex-1"
                      >
                        No
                      </Button>
                    </div>
                  )}
                  
                  {question.type === 'select' && (
                    <div className="grid grid-cols-2 gap-3">
                      {question.options.map((option) => (
                        <Button
                          key={option}
                          variant={answers[question.id] === option ? "default" : "outline"}
                          onClick={() => handleSelectAnswer(question.id, option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {steps[currentStep].id === 'controls' && (
            <div className="space-y-8">
              {controlQuestions.map((question) => (
                <div key={question.id} className="fade-in">
                  <h3 className="text-lg font-medium mb-2">{question.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{question.description}</p>
                  
                  {question.type === 'boolean' && (
                    <div className="flex space-x-4">
                      <Button
                        variant={answers[question.id] === true ? "default" : "outline"}
                        onClick={() => handleBooleanAnswer(question.id, true)}
                        className="flex-1"
                      >
                        Yes
                      </Button>
                      <Button
                        variant={answers[question.id] === false ? "default" : "outline"}
                        onClick={() => handleBooleanAnswer(question.id, false)}
                        className="flex-1"
                      >
                        No
                      </Button>
                    </div>
                  )}
                  
                  {question.type === 'select' && (
                    <div className="grid grid-cols-2 gap-3">
                      {question.options.map((option) => (
                        <Button
                          key={option}
                          variant={answers[question.id] === option ? "default" : "outline"}
                          onClick={() => handleSelectAnswer(question.id, option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {steps[currentStep].id === 'evidence' && (
            <div className="space-y-6">
              <Alert className="mb-6">
                <AlertDescription>
                  Upload the necessary documentation to support your compliance assessment. All files are encrypted and securely stored.
                </AlertDescription>
              </Alert>
              
              <Accordion type="single" collapsible className="w-full">
                {evidenceRequirements.map((evidence) => (
                  <AccordionItem key={evidence.id} value={evidence.id}>
                    <AccordionTrigger className="text-lg font-medium">
                      {evidence.title} {evidence.required && <span className="text-red-500 ml-1">*</span>}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="py-2">
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{evidence.description}</p>
                        <p className="text-sm text-gray-500 mb-4">Accepted formats: {evidence.format}</p>
                        
                        <EvidenceUploader 
                          evidenceId={evidence.id}
                          onUpload={(files) => handleFileUpload(evidence.id, files)}
                          acceptedFormats={evidence.format.split(', ').map(f => `.${f.toLowerCase()}`).join(',')}
                          currentFiles={uploads[evidence.id] || []}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {steps[currentStep].id === 'review' && (
            <div className="space-y-6">
              <Alert className="mb-6">
                <AlertDescription>
                  Review your responses before submitting. You can go back to previous steps to make changes if needed.
                </AlertDescription>
              </Alert>
              
              <Tabs defaultValue="organization" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="organization">Organization</TabsTrigger>
                  <TabsTrigger value="people">People</TabsTrigger>
                  <TabsTrigger value="controls">Controls</TabsTrigger>
                </TabsList>
                
                <TabsContent value="organization" className="border p-4 rounded-md">
                  {organizationQuestions.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0">
                      <p className="font-medium">{q.question}</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {q.type === 'multiselect' && answers[q.id] 
                          ? answers[q.id].join(', ') 
                          : answers[q.id]?.toString() || 'Not answered'}
                      </p>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="people" className="border p-4 rounded-md">
                  {peopleQuestions.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0">
                      <p className="font-medium">{q.question}</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {answers[q.id]?.toString() || 'Not answered'}
                      </p>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="controls" className="border p-4 rounded-md">
                  {controlQuestions.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0">
                      <p className="font-medium">{q.question}</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {answers[q.id]?.toString() || 'Not answered'}
                      </p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-2">Uploaded Evidence</h3>
                <div className="border p-4 rounded-md">
                  {evidenceRequirements.map((evidence) => (
                    <div key={evidence.id} className="mb-4 last:mb-0">
                      <p className="font-medium">{evidence.title}</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {uploads[evidence.id] && uploads[evidence.id].length > 0
                          ? uploads[evidence.id].map(file => file.name).join(', ')
                          : 'No files uploaded'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </GlassCard>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isCurrentStepComplete()}
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            {currentStep !== steps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </FadeIn>
    </div>
  );
};

export default AssessmentWizard;
