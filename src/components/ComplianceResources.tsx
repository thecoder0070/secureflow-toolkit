
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText, Shield, UserCheck, Server, Building, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type ResourceCategory = 'guide' | 'template' | 'checklist' | 'tool' | 'policy';

interface ComplianceResource {
  title: string;
  description: string;
  category: ResourceCategory;
  framework: string;
  url?: string;
}

const resources: ComplianceResource[] = [
  {
    title: "SOC 2 Implementation Guide",
    description: "Step-by-step guidance for implementing SOC 2 controls within your organization",
    category: "guide",
    framework: "SOC 2",
    url: "#"
  },
  {
    title: "GDPR Data Mapping Template",
    description: "Template for documenting data flows to demonstrate GDPR compliance",
    category: "template",
    framework: "GDPR",
    url: "#"
  },
  {
    title: "ISO 27001 Readiness Checklist",
    description: "Comprehensive checklist for ISO 27001 certification preparation",
    category: "checklist",
    framework: "ISO 27001",
    url: "#"
  },
  {
    title: "Risk Assessment Worksheet",
    description: "Tool for documenting identified risks, impacts, and mitigations",
    category: "tool",
    framework: "Multiple",
    url: "#"
  },
  {
    title: "Vendor Assessment Questionnaire",
    description: "Template for evaluating the security posture of third-party vendors",
    category: "template",
    framework: "Multiple",
    url: "#"
  },
  {
    title: "HIPAA Security Rule Checklist",
    description: "Detailed checklist covering all HIPAA Security Rule requirements",
    category: "checklist",
    framework: "HIPAA",
    url: "#"
  },
  {
    title: "Acceptable Use Policy Template",
    description: "Standardized policy defining appropriate use of company IT resources",
    category: "policy",
    framework: "Multiple",
    url: "#"
  },
  {
    title: "Information Security Policy Pack",
    description: "Complete set of foundational security policies required for most compliance frameworks",
    category: "policy",
    framework: "Multiple",
    url: "#"
  },
  {
    title: "User Access Review Guide",
    description: "Best practices for conducting comprehensive user access reviews",
    category: "guide",
    framework: "SOC 2",
    url: "#"
  },
  {
    title: "Business Continuity Plan Template",
    description: "Framework for creating an effective business continuity strategy",
    category: "template",
    framework: "ISO 27001",
    url: "#"
  },
  {
    title: "Incident Response Playbook",
    description: "Detailed procedures for responding to different types of security incidents",
    category: "guide",
    framework: "Multiple",
    url: "#"
  },
  {
    title: "Data Classification Tool",
    description: "Tool for categorizing data based on sensitivity and regulatory requirements",
    category: "tool",
    framework: "Multiple",
    url: "#"
  }
];

const getCategoryIcon = (category: ResourceCategory) => {
  switch (category) {
    case 'guide':
      return <FileText className="h-4 w-4" />;
    case 'template':
      return <Server className="h-4 w-4" />;
    case 'checklist':
      return <UserCheck className="h-4 w-4" />;
    case 'tool':
      return <Building className="h-4 w-4" />;
    case 'policy':
      return <Shield className="h-4 w-4" />;
    default:
      return <Shield className="h-4 w-4" />;
  }
};

const getCategoryColor = (category: ResourceCategory) => {
  switch (category) {
    case 'guide':
      return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
    case 'template':
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    case 'checklist':
      return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300";
    case 'tool':
      return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
    case 'policy':
      return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  }
};

const ComplianceResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);

  const filteredResources = resources.filter(resource => {
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFramework = !selectedFramework || resource.framework === selectedFramework || 
      (selectedFramework === 'Multiple' && resource.framework === 'Multiple');
    
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    
    return matchesSearch && matchesFramework && matchesCategory;
  });

  const frameworks = [...new Set(resources.map(r => r.framework))];
  const categories: ResourceCategory[] = ['guide', 'template', 'checklist', 'tool', 'policy'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search resources..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All Types
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              className="flex items-center gap-1"
            >
              {getCategoryIcon(category)}
              <span className="capitalize">{category}</span>
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={!selectedFramework ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedFramework(null)}
        >
          All Frameworks
        </Button>
        {frameworks.map(framework => (
          <Button
            key={framework}
            variant={selectedFramework === framework ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFramework(framework === selectedFramework ? null : framework)}
          >
            {framework}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <Card key={index} className="transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">{resource.title}</CardTitle>
                  <div className={cn("px-2 py-1 rounded-full text-xs font-medium flex items-center", 
                    getCategoryColor(resource.category))}>
                    {getCategoryIcon(resource.category)}
                    <span className="ml-1 capitalize">{resource.category}</span>
                  </div>
                </div>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                  Framework: {resource.framework}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{resource.description}</p>
                {resource.url && (
                  <a 
                    href={resource.url}
                    className="text-sm font-medium text-primary inline-flex items-center hover:underline"
                  >
                    View resource <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No resources match your current filters.</p>
            <Button 
              variant="link" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
                setSelectedFramework(null);
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplianceResources;
