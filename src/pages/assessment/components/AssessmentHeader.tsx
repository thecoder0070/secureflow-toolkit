
import React, { useState } from 'react';
import { ShieldCheck, Settings, Play, Layers, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const AssessmentHeader = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmitAssessment = () => {
    setOpen(false);
    toast({
      title: "Assessment Started",
      description: "Your assessment run has been scheduled successfully.",
    });
  };

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
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-white dark:bg-gray-800">
                <Play className="h-4 w-4 text-blue-500" />
                <span className="text-blue-500">Run Assessment</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Run Assessment</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="run-name">Run Name</Label>
                    <Input id="run-name" placeholder="Run Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="run-description">Run Description</Label>
                    <Input id="run-description" placeholder="Run Description" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-date">From Date</Label>
                    <Input id="from-date" type="date" placeholder="From Date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to-date">To Date</Label>
                    <Input id="to-date" type="date" placeholder="To Date" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="application-scope">Application Scope</Label>
                    <Select>
                      <SelectTrigger id="application-scope">
                        <SelectValue placeholder="-- None --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="app1">Application 1</SelectItem>
                        <SelectItem value="app2">Application 2</SelectItem>
                        <SelectItem value="app3">Application 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="mt-2">
                      <a href="#" className="text-blue-500 text-sm">Manage Tags</a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Automated Actions</Label>
                    <div className="flex items-center space-x-2 mt-2">
                      <Switch id="automated-actions" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-medium">User inputs</h3>
                </div>
                
                <div className="mt-2">
                  <a href="#" className="text-blue-500">
                    Links to Assessment Plan Runs based on Control-Evidence matrix
                  </a>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
                <Button onClick={handleSubmitAssessment} className="bg-purple-600 hover:bg-purple-700">
                  Run Assessment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
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
