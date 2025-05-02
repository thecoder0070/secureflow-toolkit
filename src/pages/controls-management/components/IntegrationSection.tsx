
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const IntegrationSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Works With Your Current GRC Platform</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seamlessly integrate with leading compliance and security platforms to enhance your existing investments.
          </p>
        </div>
        
        <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {/* Platform logos - in a real implementation, these would be actual logos */}
              {['Vanta', 'AuditBoard', 'ServiceNow', 'Archer', 'MetricStream', 'Drata', 'Hyperproof', 'OneTrust'].map((platform) => (
                <div 
                  key={platform}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary font-bold">{platform.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Don't see your platform? Our API allows for custom integrations with any GRC solution.
              </p>
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-primary font-medium">
                30+ integrations available
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to streamline your compliance efforts?</h3>
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Get Started Today
            </a>
            <a href="/documentation" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 dark:border-gray-600 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
