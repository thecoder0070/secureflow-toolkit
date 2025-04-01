
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, Plus, Search } from 'lucide-react';

const NoCodeUIStudio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rules, setRules] = useState([
    { id: 1, name: 'GetJiraTickets', description: 'Fetches Jira tickets and processes them' },
    { id: 2, name: 'UpdateComplianceStatus', description: 'Updates compliance status in the system' },
    { id: 3, name: 'GenerateReport', description: 'Creates compliance reports from data sources' },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'No-Code UI Studio | SecureFlow';
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
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>No-Code UI Studio</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">No-Code UI Studio</h1>
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
            <Button>
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
                <h3 className="text-xl font-semibold">{rule.name}</h3>
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
