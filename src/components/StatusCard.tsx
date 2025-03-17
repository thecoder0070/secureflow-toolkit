
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/animations/FadeIn';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface StatusCardProps {
  title: string;
  status: 'completed' | 'failed' | 'in-progress' | 'not-started';
  description?: string;
  percentage?: number;
  className?: string;
}

const StatusCard = ({ title, status, description, percentage = 0, className }: StatusCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'in-progress':
      case 'not-started':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'failed':
        return 'Failed';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'failed':
        return 'bg-red-500';
      case 'in-progress':
        return 'bg-amber-500';
      case 'not-started':
        return 'bg-gray-300 dark:bg-gray-600';
    }
  };

  return (
    <FadeIn>
      <div className={cn(
        'border border-gray-100 dark:border-gray-800 rounded-lg p-5 transition-all duration-300',
        status === 'completed' ? 'hover:border-green-200 dark:hover:border-green-900/50' : '',
        status === 'failed' ? 'hover:border-red-200 dark:hover:border-red-900/50' : '',
        status === 'in-progress' ? 'hover:border-amber-200 dark:hover:border-amber-900/50' : '',
        status === 'not-started' ? 'hover:border-gray-200 dark:hover:border-gray-700' : '',
        className
      )}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-medium">{title}</h3>
          <div className="flex items-center gap-1.5">
            {getStatusIcon()}
            <span className={cn(
              'text-xs font-medium px-2 py-0.5 rounded-full',
              status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : '',
              status === 'failed' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : '',
              status === 'in-progress' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' : '',
              status === 'not-started' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300' : ''
            )}>
              {getStatusText()}
            </span>
          </div>
        </div>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        )}
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getStatusColor()} rounded-full transition-all duration-700 ease-in-out`} 
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="mt-2 text-right text-xs text-gray-500">{percentage}% Complete</div>
      </div>
    </FadeIn>
  );
};

export default StatusCard;
