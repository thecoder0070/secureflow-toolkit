
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    description: 'System and Organization Controls for security, availability, and confidentiality.',
    icon: <ShieldCheck className="h-6 w-6" />,
    details: "Our SOC 2 Type II audit provides an independent evaluation of our controls relevant to security, availability, and confidentiality of the systems used to process users' data.",
    auditFirm: "Deloitte",
    lastAudited: "January 2025"
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'International standard for information security management systems (ISMS).',
    icon: <BadgeCheck className="h-6 w-6" />,
    details: 'ISO 27001 certification demonstrates our commitment to information security best practices and ensures we have comprehensive security controls in place.',
    auditFirm: "Bureau Veritas",
    lastAudited: "February 2025"
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliance for protected health information.',
    icon: <BadgeCheck className="h-6 w-6" />,
    details: 'We maintain compliance with HIPAA regulations to ensure the security and privacy of protected health information (PHI).',
    auditFirm: "Healthcare Compliance Associates",
    lastAudited: "December 2024"
  },
  {
    id: 'gdpr',
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance for EU data protection and privacy.',
    icon: <BadgeCheck className="h-6 w-6" />,
    details: 'Our platform is designed with GDPR compliance in mind, providing features that help our customers meet their GDPR obligations.',
    auditFirm: "EU Privacy Shield",
    lastAudited: "March 2025"
  },
  {
    id: 'ccpa',
    name: 'CCPA',
    description: "California Consumer Privacy Act compliance for California residents' privacy rights.",
    icon: <BadgeCheck className="h-6 w-6" />,
    details: "We respect California residents' rights under CCPA and provide mechanisms for data access, deletion, and opt-out requests.",
    auditFirm: "Privacy Compliance Inc.",
    lastAudited: "January 2025"
  }
];

const ComplianceCertifications = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance & Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SecureFlow maintains compliance with industry-leading security standards and regulations. Our certifications are regularly audited by independent third parties.
          </p>
        </div>
        
        <Tabs defaultValue="soc2" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-5 mb-8">
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
                    <span className="mr-3">{cert.icon}</span>
                    {cert.name}
                  </CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">{cert.details}</p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="mb-4 sm:mb-0">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
                        <div className="flex items-center mt-1">
                          <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="font-medium">Active</span>
                        </div>
                      </div>
                      <div className="mb-4 sm:mb-0">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Audit Firm</div>
                        <div className="font-medium">{cert.auditFirm}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Last Assessed</div>
                        <div className="font-medium">{cert.lastAudited}</div>
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
