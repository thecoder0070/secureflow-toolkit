
import React from 'react';
import { ShieldCheck, Settings, Play, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AssessmentHeader = () => {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="flex items-center mb-4">
        <ShieldCheck className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-bold">Compliance Check for SaaS Compliance</h1>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Assess your security posture and track compliance across multiple frameworks
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Settings className="h-4 w-4" />
            <span>Configuration</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Play className="h-4 w-4" />
            <span>Run</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Layers className="h-4 w-4" />
            <span>Application Scope</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHeader;
