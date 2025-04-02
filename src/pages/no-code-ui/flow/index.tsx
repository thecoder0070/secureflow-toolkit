
import React, { useState } from 'react';
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
  CheckCircle2, 
  CircleDashed,
  Settings,
  FileCode,
  Download,
  Code
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const NoCodeUIFlow = () => {
  const { id } = useParams();
  const isNewFlow = id === 'new';
  const [activeTab, setActiveTab] = useState<string>("workflow");
  
  const steps = [
    { id: 1, name: 'Configure Rule', icon: Settings, status: 'current' },
    { id: 2, name: 'Build Task Flow', icon: FileCode, status: 'upcoming' },
    { id: 3, name: 'Provide Application Credentials', icon: CheckCircle2, status: 'upcoming' },
    { id: 4, name: 'Execute', icon: Play, status: 'upcoming' },
    { id: 5, name: 'Publish', icon: CircleDashed, status: 'upcoming' },
  ];
  
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
                <Link to="/no-code-ui">No-Code UI Studio</Link>
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
              <Button variant="default" size="sm" className="bg-yellow-500 hover:bg-yellow-600">
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
                    step.status === 'current' ? 'bg-primary text-white' : 'bg-gray-100'
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
        
        <Tabs defaultValue="workflow" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="workflow" onClick={() => setActiveTab("workflow")}>Workflow</TabsTrigger>
            <TabsTrigger value="settings" onClick={() => setActiveTab("settings")}>Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workflow" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card className="p-4">
                  <h3 className="font-medium mb-3">Build</h3>
                  <p className="text-sm text-gray-500 mb-4">Drag blocks into the workflow</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium flex justify-between items-center">
                      Rules
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">New</span>
                    </h4>
                    
                    {/* Rule Components */}
                    <div className="space-y-2 mt-2">
                      <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span>True/false branch</span>
                        </div>
                      </div>
                      
                      <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          <span>Multi-split branch</span>
                        </div>
                      </div>
                      
                      <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span>Delay</span>
                        </div>
                      </div>
                      
                      <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          <span>Exit</span>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-sm font-medium mt-4">Actions</h4>
                    
                    {/* Action Components */}
                    <div className="space-y-2 mt-2">
                      <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                          <span>Get Data</span>
                        </div>
                      </div>
                      
                      <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                          <span>Transform Data</span>
                        </div>
                      </div>
                      
                      <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          <span>Send Notification</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-medium mb-3">Rule Properties</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">Name</label>
                      <Input 
                        type="text" 
                        placeholder="Rule name"
                        defaultValue={isNewFlow ? '' : `Rule ${id}`}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">Description</label>
                      <textarea 
                        className="w-full p-2 border rounded-md" 
                        rows={3}
                        placeholder="Describe what this rule does"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">Trigger</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Manual</option>
                        <option>Scheduled</option>
                        <option>Event-based</option>
                      </select>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">When this happens</h3>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Code className="mr-2 h-4 w-4" />
                      View YAML
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download YAML
                    </Button>
                  </div>
                </div>

                <Card className="p-4 h-[600px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Plus className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Design Your Flow</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-4">
                      Drag components from the left panel to build your automation workflow. Connect them to create a rule.
                    </p>
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Add First Component
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button>
                Next <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Rule Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Run this workflow</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Every day</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>When triggered</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Start</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Immediately after activation</option>
                    <option>At specific time</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Time period</label>
                  <Input type="text" placeholder="Last 30 days" />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NoCodeUIFlow;
