
import React from 'react';
import { ShieldCheck, Settings, Play, Layers, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const AssessmentHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-2">
          <ShieldCheck className="h-7 w-7" />
          Compliance Check for SaaS Applications
        </h1>
        
        <Breadcrumb className="mt-2 mb-4">
          <BreadcrumbItem>
            <BreadcrumbLink to="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Assessment Runs</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm"
            className="rounded-full"
          >
            <HelpCircle className="h-5 w-5 text-gray-500" />
            <span className="ml-1">Help</span>
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" className="gap-2 bg-white dark:bg-gray-800">
            <Settings className="h-4 w-4" />
            <span>Configuration</span>
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2 bg-white dark:bg-gray-800">
            <Play className="h-4 w-4 text-blue-500" />
            <span className="text-blue-500">Run Assessment</span>
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2 bg-white dark:bg-gray-800">
            <Layers className="h-4 w-4" />
            <span>Application Scope</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHeader;
