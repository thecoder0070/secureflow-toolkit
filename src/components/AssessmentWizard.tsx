
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/GlassCard';
import { CheckCircle, Circle, ChevronRight, ChevronLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const steps = [
  { id: 'general', name: 'General Information' },
  { id: 'controls', name: 'Security Controls' },
  { id: 'evidence', name: 'Evidence Collection' },
  { id: 'review', name: 'Review' },
];

const questionsData = [
  {
    id: 'q1',
    question: 'Does your organization have a formal security policy?',
    description: 'A documented security policy outlines the organization\'s approach to security and compliance.',
    type: 'boolean',
  },
  {
    id: 'q2',
    question: 'How often do you conduct security awareness training?',
    description: 'Regular security awareness training helps employees understand security risks and best practices.',
    type: 'select',
    options: ['Monthly', 'Quarterly', 'Annually', 'Never'],
  },
  {
    id: 'q3',
    question: 'Do you have a risk assessment process in place?',
    description: 'A regular risk assessment helps identify and mitigate security risks.',
    type: 'boolean',
  },
];

const AssessmentWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBooleanAnswer = (questionId: string, value: boolean) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSelectAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const isCurrentStepComplete = () => {
    const currentQuestions = questionsData;
    return currentQuestions.every(q => answers[q.id] !== undefined);
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
          <div className="mt-6 grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center mb-2',
                  index < currentStep ? 'bg-primary text-white' : 
                  index === currentStep ? 'border-2 border-primary text-primary' : 
                  'border-2 border-gray-200 dark:border-gray-700 text-gray-400'
                )}>
                  {index < currentStep ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Circle className="h-5 w-5" />
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
          <div className="space-y-8">
            {questionsData.map((question) => (
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
