
import React, { useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { 
  ArrowLeft, 
  Save, 
  Play, 
  Plus, 
  Trash, 
  Settings,
  FileCode,
  Download,
  Code,
  Cloud,
  RotateCw,
  Workflow
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { FlowEditor } from './FlowEditor';

// Task type for our demo
type Task = {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
};

const NoCodeUIFlow = () => {
  const { id } = useParams();
  const isNewFlow = id === 'new';
  const [activeTab, setActiveTab] = useState<string>("workflow");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(true);
  
  // Steps in the workflow process
  const steps = [
    { id: 1, name: 'Configure Rule', icon: Settings, status: 'current' },
    { id: 2, name: 'Build Task Flow', icon: FileCode, status: 'upcoming' },
    { id: 3, name: 'Provide Application Credentials', icon: Cloud, status: 'upcoming' },
    { id: 4, name: 'Execute', icon: Play, status: 'upcoming' },
    { id: 5, name: 'Publish', icon: Workflow, status: 'upcoming' },
  ];
  
  // Sample tasks for the dialog
  const tasks: Task[] = [
    { id: '1', name: 'AWSAccessKeyRotationReport', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '2', name: 'AWSAccountAuthorizationDetails', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '3', name: 'AWSAccountPasswordPolicy', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '4', name: 'AWSAuditManagerFetchAssessment', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '5', name: 'AWSAuditManagerFetchEvidence', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '6', name: 'AWSAuditManagerStandardizedReport', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '7', name: 'AWSCheckForLatestAMI', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '8', name: 'AWSCredentialsReport', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '9', name: 'AWSGenerateHardwareReport', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '10', name: 'AWSMFAPolicySimulatorReport', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
    { id: '11', name: 'AWSMFAReport', icon: <Cloud className="h-4 w-4" />, category: 'Favourites' },
  ];
  
  const filteredTasks = showFavorites 
    ? tasks.filter(task => task.category === 'Favourites')
    : tasks;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/no-code-ui">Rule Scribe</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Flow Editor</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
            <h1 className="text-3xl font-bold">{isNewFlow ? 'Create New Rule' : 'Edit Rule'}</h1>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm" asChild>
                <Link to="/no-code-ui">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                Publish changes
              </Button>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="relative">
            <div className="flex items-center justify-between w-full mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.status === 'current' ? 'bg-purple-600 text-white' : 'bg-gray-100'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm mt-2 text-center">{step.name}</span>
                  {index < steps.length - 1 && (
                    <div className="absolute h-[2px] bg-gray-200 top-5" 
                         style={{ 
                           left: `${(100 / (steps.length - 1)) * index + (100 / (steps.length * 2))}%`, 
                           width: `${100 / (steps.length - 1)}%`
                         }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Build Task Flow</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Code className="mr-2 h-4 w-4" />
                View YAML
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download YAML
              </Button>
              <Button variant="outline" size="sm">
                <RotateCw className="mr-2 h-4 w-4" />
                Auto Layout
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="workflow" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="workflow" onClick={() => setActiveTab("workflow")}>Workflow</TabsTrigger>
              <TabsTrigger value="yaml" onClick={() => setActiveTab("yaml")}>YAML</TabsTrigger>
              <TabsTrigger value="components" onClick={() => setActiveTab("components")}>Components</TabsTrigger>
            </TabsList>
            
            <TabsContent value="workflow" className="space-y-4">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Rule Inputs</h3>
                <div className="flex gap-2 items-center">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-md text-sm flex items-center">
                    RequestConfigFile
                    <button className="ml-2 text-gray-500 hover:text-gray-700">×</button>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Input
                  </Button>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Tasks</h3>
                  <Button variant="outline" size="sm" onClick={() => setDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-1" /> Task Block
                  </Button>
                </div>
                
                {/* Flow Editor Component */}
                <div className="mt-4 border rounded-lg p-4 h-[600px]">
                  <FlowEditor />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Rule Outputs</h3>
                <div className="flex gap-2 items-center flex-wrap">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-md text-sm">
                    CompliancePCT_
                  </div>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-md text-sm">
                    ComplianceStatus_
                  </div>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-md text-sm">
                    LogFile
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Output
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="yaml">
              <div className="bg-gray-100 p-4 rounded-md h-[400px] overflow-auto">
                <pre className="text-sm">
                  {`# Rule Definition
name: Example Rule
description: This is an example rule configuration
version: 1.0

inputs:
  - name: RequestConfigFile
    type: file
    required: true

tasks:
  - name: FetchConfigData
    type: api
    endpoint: /api/config
    method: GET
    
  - name: ProcessData
    type: transformation
    input: FetchConfigData.response
    
  - name: GenerateReport
    type: report
    template: compliance-summary
    data: ProcessData.output

outputs:
  - name: CompliancePCT_
    value: GenerateReport.compliancePercentage
  - name: ComplianceStatus_
    value: GenerateReport.status
  - name: LogFile
    value: GenerateReport.logFile`}
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="components">
              <p className="text-gray-500">Select components to add to your workflow.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {['API Call', 'Transform', 'Decision', 'Loop', 'Data Store', 'Notification', 'Report', 'Export'].map((component) => (
                  <div key={component} className="border p-4 rounded-md hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium">{component}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>2 / 5</span>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Next <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Button>
        </div>
      </div>
      
      {/* Task Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Add Tasks</DialogTitle>
          </DialogHeader>
          
          <div className="mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="favorites" checked={showFavorites} onCheckedChange={() => setShowFavorites(!showFavorites)} />
                <label htmlFor="favorites" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Favourites
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="generic" />
                <label htmlFor="generic" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Generic
                </label>
              </div>
              
              <div className="ml-auto">
                <Input placeholder="Search" className="h-9 w-[200px]" />
              </div>
            </div>
          </div>
          
          <div className="max-h-[400px] overflow-y-auto">
            <div className="space-y-2">
              {filteredTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md cursor-pointer">
                  <div className="flex items-center">
                    {task.icon}
                    <span className="ml-2">{task.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <Checkbox id="expanded" />
              <label htmlFor="expanded" className="text-sm font-medium leading-none">
                Expanded
              </label>
            </div>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NoCodeUIFlow;
