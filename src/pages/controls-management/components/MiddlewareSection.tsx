
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Link, LayoutDashboard, Shield } from 'lucide-react';

const MiddlewareSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Security GRC Middleware</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect your security and compliance infrastructure with a central middleware that works with your existing platforms.
          </p>
        </div>
        
        <div className="relative">
          {/* Main diagram */}
          <div className="relative mx-auto max-w-5xl">
            {/* Center middleware box with the cow logo */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border-2 border-primary/20 p-8 mb-8 relative z-20">
              <div className="flex flex-col items-center">
                <img 
                  src="/lovable-uploads/9e7fee81-7aae-45ad-aa63-22fbff7b6fd8.png" 
                  alt="Security GRC Middleware" 
                  className="w-full max-w-3xl mx-auto"
                />
              </div>
            </div>
            
            {/* Four quadrant sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 mr-4">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Controls</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Integrate with SOC2, PCI, HIPAA, and other compliance frameworks to manage and monitor controls.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 mr-4">
                      <LayoutDashboard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Consumption</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time consumption and visualization of security data through customizable dashboards and analytics.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 mr-4">
                      <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Reporting</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Generate comprehensive compliance reports and visualize security posture with Google Data Studio and more.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-orange-100 dark:bg-orange-900/30 p-3 mr-4">
                      <Link className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Remediation</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated remediation workflows with integrations to ServiceNow, Jira, and other project management tools.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Execution environments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Executes anywhere</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Deploy in any environment - cloud, on-premise, or hybrid infrastructure.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">AWS</div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">Azure</div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">GCP</div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">On-Premise</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Plugs into DevOps</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Seamlessly integrate with your CI/CD pipelines and DevOps workflows.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">GitHub</div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">GitLab</div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">Jenkins</div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">Chef</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddlewareSection;
