
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TrustFAQ = () => {
  const faqCategories = {
    general: [
      {
        question: "How does SecureFlow protect my data?",
        answer: "SecureFlow implements multiple layers of security including encryption at rest and in transit, strict access controls, regular security audits, and comprehensive monitoring. Our infrastructure is hosted in SOC 2 compliant data centers with physical security measures."
      },
      {
        question: "What compliance certifications does SecureFlow maintain?",
        answer: "SecureFlow maintains SOC 2 Type II, ISO 27001, HIPAA compliance, and is GDPR and CCPA compliant. Our security program is regularly audited by independent third parties to ensure ongoing compliance."
      },
      {
        question: "Who has access to my data?",
        answer: "Access to customer data is strictly limited to authorized SecureFlow personnel who require access to perform their job functions. All access is logged and monitored. We implement the principle of least privilege and role-based access controls."
      },
      {
        question: "How often does SecureFlow conduct security assessments?",
        answer: "We conduct internal security assessments quarterly and engage independent third parties to perform penetration testing at least annually. Vulnerability scanning is performed continuously as part of our security program."
      }
    ],
    privacy: [
      {
        question: "How does SecureFlow handle data subject requests under GDPR?",
        answer: "SecureFlow provides tools that enable our customers to respond to data subject requests, including access, correction, deletion, and portability requests. We also assist our customers in fulfilling these requests when necessary."
      },
      {
        question: "Does SecureFlow transfer data outside the EU?",
        answer: "SecureFlow operates data centers in multiple regions including the EU, and offers data residency options. Where cross-border transfers occur, we implement appropriate safeguards such as Standard Contractual Clauses."
      },
      {
        question: "How long does SecureFlow retain my data?",
        answer: "We retain your data only as long as necessary to provide our services. You can request deletion of your data at any time, and we will permanently delete it within 30 days of your request, subject to any legal retention requirements."
      },
      {
        question: "Does SecureFlow use my data for marketing purposes?",
        answer: "We never use your content data for marketing. Usage data may be used in aggregated, anonymized form to improve our services. You can opt out of marketing communications at any time."
      }
    ],
    technical: [
      {
        question: "How does SecureFlow handle encryption?",
        answer: "We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Encryption keys are managed through a secure key management system with regular rotation and strict access controls."
      },
      {
        question: "What is SecureFlow's backup strategy?",
        answer: "We perform automated backups at least daily. Backups are encrypted and stored redundantly across multiple availability zones. We regularly test our backup and recovery procedures to ensure data can be restored if needed."
      },
      {
        question: "How does SecureFlow handle security incidents?",
        answer: "We maintain a comprehensive incident response plan that includes detection, analysis, containment, eradication, and recovery phases. We notify affected customers of security incidents within 72 hours and provide regular updates throughout the resolution process."
      },
      {
        question: "Does SecureFlow use subprocessors?",
        answer: "Yes, we use carefully selected subprocessors to help provide our services. All subprocessors are required to meet our strict security and privacy requirements. We maintain an up-to-date list of subprocessors available to our customers."
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Common questions about our security and privacy practices.
          </p>
        </div>
        
        <Tabs defaultValue="general" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>
          
          {Object.entries(faqCategories).map(([category, questions]) => (
            <TabsContent key={category} value={category}>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {questions.map((item, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-md p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Don't see your question answered here?
          </p>
          <Button variant="outline" size="lg">Contact Our Security Team</Button>
        </div>
      </div>
    </section>
  );
};

// Import the Button component at the top of the file
import { Button } from '@/components/ui/button';

export default TrustFAQ;
