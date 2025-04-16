
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, Plus, Search, Workflow } from 'lucide-react';

const NoCodeUIStudio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rules, setRules] = useState([
    { id: 1, name: 'GetJiraTickets', description: 'Fetches Jira tickets and processes them' },
    { id: 2, name: 'UpdateComplianceStatus', description: 'Updates compliance status in the system' },
    { id: 3, name: 'GenerateReport', description: 'Creates compliance reports from data sources' },
    { id: 4, name: 'AWSComplianceCheck', description: 'Checks AWS resources for compliance issues' },
    { id: 5, name: 'DataSourceConnector', description: 'Connects to external data sources and validates connections' },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Rule Scribe | SecureFlow';
  }, []);

  const filteredRules = rules.filter(rule => 
    rule.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    rule.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" asChild>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Rule Scribe</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">Rule Scribe</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Create and manage rules with our no-code workflow editor
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full md:w-[300px]"
            />
          </div>
          <Link to="/no-code-ui/flow/new">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2" size={16} /> Create Rule
            </Button>
          </Link>
        </div>

        <div className="mb-4">
          <Link to="#" className="flex items-center text-primary text-sm hover:underline">
            <ArrowLeft size={16} className="mr-1" /> View pre-existing rules
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRules.map((rule) => (
            <Card key={rule.id} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Workflow size={18} className="mr-2 text-purple-600" />
                  <h3 className="text-xl font-semibold">{rule.name}</h3>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-gray-600 dark:text-gray-300">{rule.description}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-end">
                <Link to={`/no-code-ui/flow/${rule.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
          
          {filteredRules.length === 0 && (
            <div className="col-span-full py-8 text-center">
              <p className="text-gray-500">No rules found matching your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoCodeUIStudio;
