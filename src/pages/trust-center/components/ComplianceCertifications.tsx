
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const certifications = [
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    description: 'Service Organization Control (SOC) 2 Type II report focusing on security, availability, processing integrity, confidentiality, and privacy.',
    icon: '🔒',
    details: 'Our SOC 2 Type II audit provides an independent evaluation of our controls relevant to security, availability, and confidentiality of the systems used to process users' data.',
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'International standard for information security management systems (ISMS).',
    icon: '🌐',
    details: 'ISO 27001 certification demonstrates our commitment to information security best practices and ensures we have comprehensive security controls in place.',
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance for protected health information.',
    icon: '🏥',
    details: 'We maintain compliance with HIPAA regulations to ensure the security and privacy of protected health information (PHI).',
  },
  {
    id: 'gdpr',
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection and privacy.',
    icon: '🇪🇺',
    details: 'Our platform is designed with GDPR compliance in mind, providing features that help our customers meet their GDPR obligations.',
  },
  {
    id: 'ccpa',
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliance for California residents\' privacy rights.',
    icon: '🔐',
    details: 'We respect California residents\' rights under CCPA and provide mechanisms for data access, deletion, and opt-out requests.',
  }
];

const ComplianceCertifications = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance & Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We maintain the highest levels of security and compliance with industry standards and regulations.
          </p>
        </div>
        
        <Tabs defaultValue="soc2" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-5">
            {certifications.map(cert => (
              <TabsTrigger key={cert.id} value={cert.id}>
                <span className="mr-2">{cert.icon}</span>
                <span className="hidden sm:inline">{cert.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {certifications.map(cert => (
            <TabsContent key={cert.id} value={cert.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-3">{cert.icon}</span>
                    {cert.name}
                  </CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>{cert.details}</p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="mb-4 sm:mb-0">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
                        <div className="flex items-center mt-1">
                          <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="font-medium">Certified</span>
                        </div>
                      </div>
                      <div className="mb-4 sm:mb-0">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Last Audited</div>
                        <div className="font-medium">January 2025</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Renewal Date</div>
                        <div className="font-medium">January 2026</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ComplianceCertifications;
