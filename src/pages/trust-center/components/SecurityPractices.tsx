
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CustomCard } from '@/components/ui/CustomCard';
import { ShieldCheck, Lock, Info } from 'lucide-react';

const SecurityPractices = () => {
  const securityMeasures = [
    {
      category: 'Data Protection',
      measures: [
        { name: 'Encryption at Rest', status: 'Implemented', details: 'AES-256 encryption for all stored data' },
        { name: 'Encryption in Transit', status: 'Implemented', details: 'TLS 1.3 for all data transmissions' },
        { name: 'Database Encryption', status: 'Implemented', details: 'Transparent data encryption on all databases' },
        { name: 'Key Management', status: 'Implemented', details: 'Secure key rotation and management' }
      ]
    },
    {
      category: 'Access Control',
      measures: [
        { name: 'Multi-Factor Authentication', status: 'Implemented', details: 'Required for all admin access' },
        { name: 'Role-Based Access Control', status: 'Implemented', details: 'Principle of least privilege' },
        { name: 'Session Management', status: 'Implemented', details: 'Automatic session timeouts and monitoring' },
        { name: 'API Authentication', status: 'Implemented', details: 'OAuth 2.0 and API key management' }
      ]
    },
    {
      category: 'Infrastructure Security',
      measures: [
        { name: 'Network Security', status: 'Implemented', details: 'Firewalls, IDS/IPS, and network segmentation' },
        { name: 'Vulnerability Management', status: 'Implemented', details: 'Regular scans and patching' },
        { name: 'DDoS Protection', status: 'Implemented', details: 'Enterprise-grade DDoS mitigation' },
        { name: 'Backup & Recovery', status: 'Implemented', details: 'Automated backups with encryption' }
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Practices</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive security program is designed to protect your data at every level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <CustomCard>
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 mr-4">
                <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Physical Security</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Our infrastructure is hosted in SOC 2 certified data centers with 24/7 monitoring, biometric access controls, and redundant power systems.
            </p>
          </CustomCard>
          
          <CustomCard>
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 mr-4">
                <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Application Security</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Our development process includes secure coding practices, automated security testing, and regular penetration testing by independent third parties.
            </p>
          </CustomCard>
          
          <CustomCard>
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 mr-4">
                <Info className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Operational Security</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We maintain detailed security policies, conduct regular employee security training, and perform continuous monitoring for security events.
            </p>
          </CustomCard>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Security Category</TableHead>
                <TableHead>Measure</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Details</TableHead>
              </TableRow>
            </TableHeader>
            {securityMeasures.map((category, index) => (
              <TableBody key={index}>
                {category.measures.map((measure, mIndex) => (
                  <TableRow key={`${index}-${mIndex}`}>
                    {mIndex === 0 ? (
                      <TableCell rowSpan={category.measures.length} className="font-medium align-top">
                        {category.category}
                      </TableCell>
                    ) : null}
                    <TableCell>{measure.name}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {measure.status}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-gray-600 dark:text-gray-300">
                      {measure.details}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ))}
          </Table>
        </div>
      </div>
    </section>
  );
};

export default SecurityPractices;
