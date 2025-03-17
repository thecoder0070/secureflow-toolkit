
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Shield, 
  FileText, 
  Lock, 
  CreditCard, 
  Activity, 
  FileCheck 
} from 'lucide-react';

const frameworks = [
  { id: 'soc2', name: 'SOC 2', icon: <Shield className="h-5 w-5" />, color: 'border-blue-500/50 bg-blue-50 dark:bg-blue-900/20' },
  { id: 'gdpr', name: 'GDPR', icon: <FileText className="h-5 w-5" />, color: 'border-indigo-500/50 bg-indigo-50 dark:bg-indigo-900/20' },
  { id: 'iso27001', name: 'ISO 27001', icon: <Lock className="h-5 w-5" />, color: 'border-green-500/50 bg-green-50 dark:bg-green-900/20' },
  { id: 'hipaa', name: 'HIPAA', icon: <Activity className="h-5 w-5" />, color: 'border-red-500/50 bg-red-50 dark:bg-red-900/20' },
  { id: 'pcidss', name: 'PCI DSS', icon: <CreditCard className="h-5 w-5" />, color: 'border-amber-500/50 bg-amber-50 dark:bg-amber-900/20' },
  { id: 'fedramp', name: 'FedRAMP', icon: <FileCheck className="h-5 w-5" />, color: 'border-purple-500/50 bg-purple-50 dark:bg-purple-900/20' },
];

const FrameworkSelector = () => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['soc2']);

  const toggleFramework = (id: string) => {
    if (selectedFrameworks.includes(id)) {
      setSelectedFrameworks(selectedFrameworks.filter(f => f !== id));
    } else {
      setSelectedFrameworks([...selectedFrameworks, id]);
    }
  };

  return (
    <FadeIn>
      <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-6">Compliance Frameworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {frameworks.map((framework) => (
            <div 
              key={framework.id}
              onClick={() => toggleFramework(framework.id)}
              className={cn(
                'cursor-pointer rounded-lg p-4 border-2 transition-all',
                selectedFrameworks.includes(framework.id) 
                  ? `${framework.color} border-opacity-100 shadow-sm` 
                  : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700'
              )}
            >
              <div className="flex items-center">
                <div className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center mr-3',
                  selectedFrameworks.includes(framework.id) 
                    ? 'text-white bg-primary' 
                    : 'text-gray-500 bg-gray-100 dark:bg-gray-800'
                )}>
                  {framework.icon}
                </div>
                <span className="font-medium">{framework.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button disabled={selectedFrameworks.length === 0}>
            Continue with {selectedFrameworks.length} {selectedFrameworks.length === 1 ? 'Framework' : 'Frameworks'}
          </Button>
        </div>
      </div>
    </FadeIn>
  );
};

export default FrameworkSelector;
