
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Home, ChevronLeft, ChevronRight, Filter, Star } from 'lucide-react';

type Application = {
  id: number;
  name: string;
  type: string;
  urlEndpoint: string;
  connectorType: string;
  credentials: string;
  validationStatus: string;
};

const IntegrationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([
    { 
      id: 1, 
      name: 'Box-d-object', 
      type: 'DocManagement', 
      urlEndpoint: 'https://10.50.17.52', 
      connectorType: 'CustomType', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 2, 
      name: 'Effect-d-object', 
      type: 'DocManagement', 
      urlEndpoint: 'https://10.50.17.55', 
      connectorType: 'CustomType', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 3, 
      name: 'Jira-d-object', 
      type: 'DocManagement', 
      urlEndpoint: 'https://10.50.17.53', 
      connectorType: 'CustomType', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 4, 
      name: 'DC-d-object', 
      type: 'DocManagement', 
      urlEndpoint: 'https://10.50.17.52', 
      connectorType: 'CustomType', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 5, 
      name: 'HTTPRequestPullRequest', 
      type: 'HTTPRequest', 
      urlEndpoint: 'http://localhost.com', 
      connectorType: 'CustomType', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 6, 
      name: 'HTTPListener', 
      type: 'HTTPRequest', 
      urlEndpoint: 'http://localhost.com', 
      connectorType: 'CustomType', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 7, 
      name: 'UCMDB', 
      type: 'UcmSaml', 
      urlEndpoint: 'http://localhost.com', 
      connectorType: 'SAML', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 8, 
      name: 'HTTPRequestPull', 
      type: 'HTTPRequest', 
      urlEndpoint: 'http://localhost.com', 
      connectorType: 'CustomType', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
    { 
      id: 9, 
      name: 'AzureAuthDirProxy', 
      type: 'AzureSSOAuth', 
      urlEndpoint: 'http://localhost.com', 
      connectorType: 'Azure', 
      credentials: 'Stored in vault', 
      validationStatus: 'Valid' 
    },
  ]);

  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="assessments">Assessments</TabsTrigger>
          <TabsTrigger value="rules-catalog">Rules Catalog</TabsTrigger>
          <TabsTrigger value="my-queue">My Queue</TabsTrigger>
          <TabsTrigger value="applications" className="bg-primary/10 text-primary">Applications Catalog</TabsTrigger>
          <TabsTrigger value="tasks-catalog">Tasks Catalog</TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications" className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Link to="/" className="text-blue-500 hover:underline flex items-center">
                <Home className="h-3.5 w-3.5 mr-1" />Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-foreground">Applications Catalog</span>
            </div>
            
            <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
              <Link to="/">
                <Home className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <h1 className="text-2xl font-bold mb-8">Applications Catalog</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Add Application</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Application Name</label>
                    <Input placeholder="Application Name" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">URL Port</label>
                    <Input placeholder="URL Port" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Connector Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select connector type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom">Custom Type</SelectItem>
                        <SelectItem value="azure">Azure</SelectItem>
                        <SelectItem value="saml">SAML</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Credentials</label>
                    <Input placeholder="Credentials" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Application Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an application type..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="docManagement">DocManagement</SelectItem>
                        <SelectItem value="httpRequest">HTTPRequest</SelectItem>
                        <SelectItem value="azure">Azure SSO Auth</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Connector</label>
                    <div className="text-sm text-purple-600 font-medium hover:underline cursor-pointer">
                      Manage Connectors
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Link Applications</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select linked applications" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="app1">Application 1</SelectItem>
                        <SelectItem value="app2">Application 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-4 mt-8">
                <Button variant="outline">Submit application as new</Button>
                <Button>Validate & Submit</Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Available Applications</h2>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show</span>
                <Select defaultValue="10">
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">entries</span>
              </div>
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader className="bg-primary text-white">
                  <TableRow>
                    <TableHead className="w-10">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="w-10">
                      <span className="sr-only">Favorite</span>
                    </TableHead>
                    <TableHead>Application Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>URL port</TableHead>
                    <TableHead>Connector Type</TableHead>
                    <TableHead>Credentials</TableHead>
                    <TableHead>Linked Applications</TableHead>
                    <TableHead>Validation Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <Star className="h-4 w-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                      </TableCell>
                      <TableCell>{app.name}</TableCell>
                      <TableCell>{app.type}</TableCell>
                      <TableCell>{app.urlEndpoint}</TableCell>
                      <TableCell>{app.connectorType}</TableCell>
                      <TableCell>{app.credentials}</TableCell>
                      <TableCell>
                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {app.validationStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                          View Annotations
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing 1 to 9 of 9 entries
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="bg-primary text-white hover:bg-primary/90">
                  1
                </Button>
                <Button size="icon" variant="outline" disabled>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IntegrationsPage;
