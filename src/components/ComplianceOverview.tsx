
import { FadeIn } from '@/components/animations/FadeIn';
import { GlassCard } from '@/components/ui/GlassCard';
import { CustomCard } from '@/components/ui/CustomCard';
import { Progress } from '@/components/ui/progress';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const ComplianceOverview = () => {
  const frameworks = [
    { name: 'SOC 2', progress: 87, color: 'bg-blue-500' },
    { name: 'GDPR', progress: 76, color: 'bg-indigo-500' },
    { name: 'ISO 27001', progress: 92, color: 'bg-green-500' },
    { name: 'HIPAA', progress: 63, color: 'bg-amber-500' },
  ];

  const complianceIssues = [
    { id: 1, title: 'Access Review Pending', priority: 'High', dueDate: '3 days' },
    { id: 2, title: 'Missing Data Encryption Policy', priority: 'Medium', dueDate: '7 days' },
    { id: 3, title: 'Incident Response Plan Update', priority: 'Low', dueDate: '14 days' },
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {frameworks.map((framework, index) => (
            <CustomCard key={index} className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{framework.name}</h3>
                <div className="text-xl font-bold">{framework.progress}%</div>
              </div>
              <Progress value={framework.progress} className={`h-2 ${framework.progress > 80 ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                <div className={`h-full ${framework.color} rounded-full`} style={{ width: `${framework.progress}%` }}></div>
              </Progress>
            </CustomCard>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FadeIn className="lg:col-span-2">
          <GlassCard className="p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Compliance Tasks</h2>
              <span className="text-sm text-gray-500">3 pending items</span>
            </div>
            <div className="space-y-4">
              {complianceIssues.map((issue) => (
                <div key={issue.id} className="flex items-start p-4 rounded-lg border border-gray-100 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900">
                  <div className="flex-shrink-0 mr-4">
                    <AlertTriangle className={`h-5 w-5 ${issue.priority === 'High' ? 'text-red-500' : issue.priority === 'Medium' ? 'text-amber-500' : 'text-blue-500'}`} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{issue.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${issue.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : issue.priority === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                        {issue.priority}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Due in {issue.dueDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeIn>

        <FadeIn>
          <GlassCard className="p-6 h-full">
            <h2 className="text-xl font-semibold mb-6">Compliance Status</h2>
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset={283 - ((283 * 87) / 100)}
                    className="text-blue-500 transform -rotate-90 origin-center"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">87%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">124 Controls Passed</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm font-medium">18 Controls Pending</span>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
};

export default ComplianceOverview;
