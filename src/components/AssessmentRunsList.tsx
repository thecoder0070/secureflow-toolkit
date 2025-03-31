
import { useState } from 'react';
import { format } from 'date-fns';
import { CheckCircle, Calendar, ArrowRight, Settings, Play, Layers } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FadeIn } from './animations/FadeIn';

interface AssessmentRun {
  id: string;
  title: string;
  type: string;
  appScope: string;
  score: number;
  status: 'completed' | 'in-progress' | 'scheduled';
  fromDate: Date;
  toDate: Date;
  completionDate?: Date;
}

const AssessmentRunsList = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'scheduled'>('all');
  
  const assessmentRuns: AssessmentRun[] = [
    {
      id: '1',
      title: 'SaaS Compliance-10/31/2024',
      type: 'generic',
      appScope: 'SaaS Compliance',
      score: 100,
      status: 'completed',
      fromDate: new Date(2023, 9, 23), // 10/23/2023
      toDate: new Date(2023, 9, 29), // 10/29/2023
      completionDate: new Date(2023, 9, 31, 4, 30) // 10/31/2023 4:30 AM
    },
    {
      id: '2',
      title: 'SaaS Compliance-10/24/2024',
      type: 'generic',
      appScope: 'SaaS Compliance',
      score: 100,
      status: 'completed',
      fromDate: new Date(2023, 9, 16), // 10/16/2023
      toDate: new Date(2023, 9, 22), // 10/22/2023
      completionDate: new Date(2023, 9, 24, 4, 30) // 10/24/2023 4:30 AM
    },
    {
      id: '3',
      title: 'SaaS Compliance-10/17/2024',
      type: 'generic',
      appScope: 'SaaS Compliance',
      score: 100,
      status: 'completed',
      fromDate: new Date(2023, 9, 9), // 10/09/2023
      toDate: new Date(2023, 9, 15), // 10/15/2023
      completionDate: new Date(2023, 9, 17, 4, 30) // 10/17/2023 4:30 AM
    },
    {
      id: '4',
      title: 'SaaS Compliance-10/08/2024',
      type: 'generic',
      appScope: 'SaaS Compliance',
      score: 100,
      status: 'completed',
      fromDate: new Date(2023, 9, 2), // 10/02/2023
      toDate: new Date(2023, 9, 8), // 10/08/2023
      completionDate: new Date(2023, 9, 8, 4, 30) // 10/08/2023 4:30 AM
    },
    {
      id: '5',
      title: 'SaaS Compliance-10/01/2024',
      type: 'generic',
      appScope: 'SaaS Compliance',
      score: 100,
      status: 'completed',
      fromDate: new Date(2023, 8, 25), // 09/25/2023
      toDate: new Date(2023, 9, 1), // 10/01/2023
      completionDate: new Date(2023, 9, 1, 4, 30) // 10/01/2023 4:30 AM
    },
    {
      id: '6',
      title: 'SaaS Compliance-09/24/2024',
      type: 'generic',
      appScope: 'SaaS Compliance',
      score: 100,
      status: 'completed',
      fromDate: new Date(2023, 8, 18), // 09/18/2023
      toDate: new Date(2023, 8, 24), // 09/24/2023
      completionDate: new Date(2023, 8, 24, 4, 30) // 09/24/2023 4:30 AM
    }
  ];
  
  const filteredRuns = assessmentRuns.filter(run => {
    if (filter === 'all') return true;
    return run.status === filter;
  });

  return (
    <FadeIn>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Assessment Runs</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              Schedule
            </Button>
            <Button variant="default" size="sm" className="gap-1">
              <Play className="h-4 w-4" />
              New Run
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setFilter(value as any)}>
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
            <TabsTrigger value="all">All Runs</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRuns.map((run) => (
                <AssessmentRunCard key={run.id} run={run} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRuns.map((run) => (
                <AssessmentRunCard key={run.id} run={run} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRuns.map((run) => (
                <AssessmentRunCard key={run.id} run={run} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </FadeIn>
  );
};

const AssessmentRunCard = ({ run }: { run: AssessmentRun }) => {
  const formatDate = (date: Date) => {
    return format(date, 'MM/dd/yyyy h:mm a');
  };
  
  const formatShortDate = (date: Date) => {
    return format(date, 'MM/dd/yyyy');
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'scheduled':
        return 'bg-amber-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <GlassCard className="relative overflow-hidden transition-all duration-300 hover:shadow-md group">
      <div className={`absolute top-0 left-0 right-0 h-2 ${getStatusColor(run.status)}`} />
      
      {/* Score circle */}
      <div className="absolute top-4 right-4">
        <div className="relative w-12 h-12">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={run.score === 100 ? "#10b981" : run.score >= 80 ? "#3b82f6" : "#f59e0b"}
              strokeWidth="10"
              strokeDasharray="283"
              strokeDashoffset={283 - ((283 * run.score) / 100)}
              className="transform -rotate-90 origin-center"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold">{run.score}</span>
          </div>
        </div>
      </div>
      
      <div className="pt-6 pb-4 px-5">
        <div className="flex items-start">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-2 mr-3">
            <span className="text-xl font-bold text-primary">S</span>
          </div>
          <div>
            <h3 className="font-medium text-base mb-1">{run.title}</h3>
            <Badge variant={run.status === 'completed' ? 'success' : run.status === 'in-progress' ? 'default' : 'outline'} className="mb-2">
              {run.status === 'completed' && <CheckCircle className="h-3 w-3 mr-1" />}
              {run.status.charAt(0).toUpperCase() + run.status.slice(1)}
            </Badge>
          </div>
        </div>

        <div className="mt-4 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Type:</span>
            <span className="font-medium">{run.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">App scope:</span>
            <span className="font-medium">{run.appScope}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">From Date:</span>
            <span className="font-medium">{formatShortDate(run.fromDate)} 5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">To Date:</span>
            <span className="font-medium">{formatShortDate(run.toDate)} 5:00 PM</span>
          </div>
          {run.completionDate && (
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Completed:</span>
              <span className="font-medium">{format(run.completionDate, 'MM/dd/yyyy h:mm a')}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t border-gray-100 dark:border-gray-800 px-5 py-3 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Layers className="h-4 w-4" />
              <span className="sr-only">Details</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors gap-1">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default AssessmentRunsList;
