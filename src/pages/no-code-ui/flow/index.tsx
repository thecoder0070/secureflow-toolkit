import React from 'react';
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
import { ArrowLeft, Save, Play, Plus, Trash } from 'lucide-react';

const NoCodeUIFlow = () => {
  const { id } = useParams();
  const isNewFlow = id === 'new';
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/no-code-ui" asChild>
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
              <Button size="sm">
                <Play className="mr-2 h-4 w-4" />
                Run
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card className="p-4">
              <h3 className="font-medium mb-3">Rule Properties</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md" 
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
            
            <Card className="p-4">
              <h3 className="font-medium mb-3">Components</h3>
              <div className="space-y-2">
                <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Data Source</span>
                  </div>
                </div>
                <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Transformation</span>
                  </div>
                </div>
                <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span>Action</span>
                  </div>
                </div>
                <div className="p-2 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Condition</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="p-4 h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Plus className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Design Your Flow</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-4">
                  Drag components from the left panel to build your automation flow. Connect them to create a workflow.
                </p>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add First Component
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoCodeUIFlow;
