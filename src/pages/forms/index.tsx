
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import FormQuestionCard from './components/FormQuestionCard';
import { 
  ChevronRight, 
  Home, 
  FolderOpen, 
  FileText, 
  Copy, 
  FileInput, 
  Download, 
  PlusCircle, 
  Eye
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const FormsPage = () => {
  const [selectedForm, setSelectedForm] = useState<string>("GCTSSafeDevSecOpsOffensive");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              <Home className="h-4 w-4 mr-1" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/forms">
              <FileText className="h-4 w-4 mr-1" />
              Manage Forms
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Manage Forms</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <label className="text-sm text-gray-500 mb-1 block">Select Form</label>
              <Select value={selectedForm} onValueChange={setSelectedForm}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a form" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GCTSSafeDevSecOpsOffensive">GCTSSafeDevSecOpsOffensive</SelectItem>
                  <SelectItem value="form2">Security Assessment Form</SelectItem>
                  <SelectItem value="form3">Compliance Checklist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Card className="bg-amber-50 border-amber-200 mb-4">
              <CardContent className="p-4 text-sm">
                <p className="text-amber-800">
                  This form has been assigned to user(s) and hence is not editable. You can always choose to duplicate the form and edit further.
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FolderOpen className="mr-2 h-4 w-4" />
                <span>Browse</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Copy className="mr-2 h-4 w-4" />
                <span>Duplicate</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileInput className="mr-2 h-4 w-4" />
                <span>Edit Link</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                <span>Generate</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>Create</span>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                <span>Import</span>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Form Name</div>
                    <div className="font-medium">GCTSSafeDevSecOpsOffensive</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Description</div>
                    <div className="font-medium">Review the change in Codebase without Change Request</div>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <Checkbox id="starred" className="mr-2" />
                  <label htmlFor="starred" className="text-sm">Make this a star</label>
                </div>
              </CardContent>
            </Card>
            
            <FormQuestionCard 
              questionNumber={1}
              title="Log ID (DO NOT MODIFY)"
              type="text"
            />
            
            <FormQuestionCard 
              questionNumber={2}
              title="Title"
              description="Database Change Service (DN-NAT-SCCM-1)"
              type="text"
            />
            
            <FormQuestionCard 
              questionNumber={3}
              title="This is a verify check performed after the change in the database, considering what was Change Request IDs comments?"
              type="radio"
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
                { label: "Not Applicable", value: "na" }
              ]}
            />
            
            <div className="mt-8 text-sm text-gray-500">
              <span className="text-red-500">* Please provide a minimum of two options</span>
            </div>
            
            <div className="flex justify-end gap-3 mt-8">
              <Button variant="outline">Cancel</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
