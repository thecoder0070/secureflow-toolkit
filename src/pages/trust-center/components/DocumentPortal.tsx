
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DocumentPortal = () => {
  const documentCategories = {
    certifications: [
      { title: "SOC 2 Type II Report", type: "PDF", updated: "Jan 2025", restricted: true },
      { title: "ISO 27001 Certificate", type: "PDF", updated: "Feb 2025", restricted: false },
      { title: "HIPAA Compliance Attestation", type: "PDF", updated: "Dec 2024", restricted: true },
      { title: "GDPR Compliance Statement", type: "PDF", updated: "Mar 2025", restricted: false },
    ],
    policies: [
      { title: "Privacy Policy", type: "PDF", updated: "Apr 2025", restricted: false },
      { title: "Terms of Service", type: "PDF", updated: "Apr 2025", restricted: false },
      { title: "Cookie Policy", type: "PDF", updated: "Feb 2025", restricted: false },
      { title: "Acceptable Use Policy", type: "PDF", updated: "Jan 2025", restricted: false },
    ],
    security: [
      { title: "Security Whitepaper", type: "PDF", updated: "Mar 2025", restricted: false },
      { title: "Data Processing Addendum", type: "DOCX", updated: "Feb 2025", restricted: false },
      { title: "Penetration Test Summary", type: "PDF", updated: "Jan 2025", restricted: true },
      { title: "Security Incident Response Plan", type: "PDF", updated: "Dec 2024", restricted: true },
    ],
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Document Portal</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access our security documentation, policies, and certifications.
            Some documents require an NDA to access.
          </p>
        </div>
        
        <Tabs defaultValue="certifications" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          
          {Object.entries(documentCategories).map(([category, documents]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{doc.title}</CardTitle>
                          <CardDescription>Last updated: {doc.updated}</CardDescription>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {doc.type}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {doc.restricted 
                          ? "This document requires an NDA and approval to access."
                          : "This document is publicly available and can be downloaded directly."}
                      </p>
                    </CardContent>
                    <CardFooter>
                      {doc.restricted ? (
                        <Button variant="outline">Request Access</Button>
                      ) : (
                        <Button>Download</Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DocumentPortal;
