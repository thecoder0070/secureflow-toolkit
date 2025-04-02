
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Home, Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

interface Rule {
  id: string;
  name: string;
  description: string;
  type: string;
  ruleInputs: string[];
  ruleOutputs: string[];
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

const RulesCatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [rules, setRules] = useState<Rule[]>([
    {
      id: '1',
      name: 'JiraSlareport',
      description: 'JIRASLAREPORT',
      type: 'sql_rule',
      ruleInputs: ['RuleContent', 'sqlRuleFileContent'],
      ruleOutputs: ['JiraSLAReport'],
      createdAt: '04/02/2025 12:20 PM',
      updatedAt: '04/02/2025 12:32 PM',
      tags: ['jira', 'report']
    },
    {
      id: '2',
      name: 'GenerateJiraTicketReport',
      description: 'A rule that generates a standardized list of Jira tickets, extracting key fields to ensure consistency.',
      type: 'rule',
      ruleInputs: ['JiraConfig', 'JiraRequestConfig', 'OutputFileFormat'],
      ruleOutputs: ['JiraTicketList', 'LogFile'],
      createdAt: '04/01/2025 6:10 PM',
      updatedAt: '04/01/2025 6:10 PM',
      tags: ['jira', 'ticket']
    },
    {
      id: '3',
      name: 'DegreeeCompletions',
      description: 'FetchDegreeeCompletions',
      type: 'rule',
      ruleInputs: ['JQExpressionForDataExtract', 'OutputMethod', 'TransformConfigFile', 'FetchCompletionsFlowConfigFile'],
      ruleOutputs: ['DegreeeCompletionsReport', 'LogFile'],
      createdAt: '02/21/2025 5:43 AM',
      updatedAt: '02/21/2025 6:14 AM',
      tags: ['degree']
    },
    {
      id: '4',
      name: 'MicrosoftSentinelIncidents',
      description: 'FetchMicrosoftSentinelIncidents',
      type: 'rule',
      ruleInputs: ['GetIncidentReqConfigFile', 'IncidentTransformConfigFile', 'InputFileConfig'],
      ruleOutputs: ['LogFile', 'IncidentComplianceReport'],
      createdAt: '02/20/2025 5:49 AM',
      updatedAt: '02/20/2025 6:35 AM',
      tags: ['sentinel', 'incident']
    },
    {
      id: '5',
      name: 'IonsRelatedToTarrasMalware',
      description: 'AVDetectionRelatedToTarrasMalware',
      type: 'rule',
      ruleInputs: ['RowDataExpressionForAVDetect'],
      ruleOutputs: ['LogFile', 'AVDetectionComplianceReport'],
      createdAt: '02/20/2025 12:44 AM',
      updatedAt: '02/20/2025 1:38 AM',
      tags: ['malware', 'security']
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Rules Catalog | SecureFlow';
  }, []);

  const filteredRules = rules.filter(rule => {
    const lowerSearchQuery = searchQuery.toLowerCase();
    const matchesSearch = rule.name.toLowerCase().includes(lowerSearchQuery) ||
                          rule.description.toLowerCase().includes(lowerSearchQuery);
    
    if (filterValue) {
      return matchesSearch && (
        rule.tags.includes(filterValue) ||
        rule.type.includes(filterValue)
      );
    }
    
    return matchesSearch;
  });

  const paginatedRules = filteredRules.slice(
    (currentPage - 1) * Number(entriesPerPage),
    currentPage * Number(entriesPerPage)
  );

  const totalPages = Math.ceil(filteredRules.length / Number(entriesPerPage));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="hover:text-primary transition-colors flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Rules Catalog</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">Rules Catalog</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="w-full sm:w-auto flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm whitespace-nowrap">Show</span>
              <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                <SelectTrigger className="w-16">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm whitespace-nowrap">entries</span>
            </div>
          </div>
          
          <div className="w-full sm:w-auto flex items-center gap-2 justify-end">
            <span className="text-sm whitespace-nowrap">Filter:</span>
            <Input
              placeholder="Filter..."
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="w-full md:w-[200px]"
            />
          </div>
          
          <Link to="/rules-catalog/new">
            <Button className="whitespace-nowrap bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2" size={16} /> Add New Rule
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden border mb-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-purple-600">
                <TableRow>
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Description</TableHead>
                  <TableHead className="text-white">Type</TableHead>
                  <TableHead className="text-white">RuleInputs</TableHead>
                  <TableHead className="text-white">RuleOutputs</TableHead>
                  <TableHead className="text-white">Created At</TableHead>
                  <TableHead className="text-white">Updated At</TableHead>
                  <TableHead className="text-white">Tags</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-purple-100 dark:bg-purple-900/20">
                  <TableCell colSpan={1}>
                    <Input placeholder="Name" className="w-full" />
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Input placeholder="Search Description" className="w-full" />
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Input placeholder="Type" className="w-full" />
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Input placeholder="Search RuleInputs" className="w-full" />
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Input placeholder="Search RuleOutputs" className="w-full" />
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Input placeholder="Search" className="w-full" />
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Input placeholder="Search" className="w-full" />
                  </TableCell>
                  <TableCell colSpan={1}></TableCell>
                  <TableCell colSpan={1}></TableCell>
                </TableRow>
                
                {paginatedRules.length > 0 ? (
                  paginatedRules.map((rule) => (
                    <TableRow key={rule.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/60">
                      <TableCell className="font-medium">{rule.name}</TableCell>
                      <TableCell>{rule.description}</TableCell>
                      <TableCell>{rule.type}</TableCell>
                      <TableCell className="max-w-[150px] truncate">
                        {rule.ruleInputs.join(', ')}
                      </TableCell>
                      <TableCell className="max-w-[150px] truncate">
                        {rule.ruleOutputs.join(', ')}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">{rule.createdAt}</TableCell>
                      <TableCell className="whitespace-nowrap">{rule.updatedAt}</TableCell>
                      <TableCell>
                        {rule.tags.map(tag => (
                          <span key={tag} className="mr-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Link to={`/rules-catalog/${rule.id}`} className="text-blue-600 hover:text-blue-800">
                            <Eye size={16} />
                          </Link>
                          <Link to={`/rules-catalog/${rule.id}/edit`} className="text-yellow-600 hover:text-yellow-800">
                            <Edit size={16} />
                          </Link>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="h-24 text-center">
                      No rules found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing {filteredRules.length > 0 ? (currentPage - 1) * Number(entriesPerPage) + 1 : 0} to {
              Math.min(currentPage * Number(entriesPerPage), filteredRules.length)
            } of {filteredRules.length} entries
          </div>
          
          <div className="flex items-center space-x-1">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              First
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {pages.map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className={currentPage === page ? "bg-purple-600" : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Next
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Last
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesCatalogPage;
