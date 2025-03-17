
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText, Shield, UserCheck, Server, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

type ResourceCategory = 'guide' | 'template' | 'checklist' | 'tool';

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
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  }
};

const ComplianceResources: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Compliance Resources</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <Card key={index} className="transition-all duration-200 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-medium">{resource.title}</CardTitle>
                <div className={cn("px-2 py-1 rounded-full text-xs font-medium flex items-center", 
                  getCategoryColor(resource.category))}>
                  {getCategoryIcon(resource.category)}
                  <span className="ml-1">{resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}</span>
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
        ))}
      </div>
    </div>
  );
};

export default ComplianceResources;
