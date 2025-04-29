
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import TrustHero from './components/TrustHero';
import ComplianceCertifications from './components/ComplianceCertifications';
import SecurityPractices from './components/SecurityPractices';
import PrivacySection from './components/PrivacySection';
import TrustFAQ from './components/TrustFAQ';
import DocumentPortal from './components/DocumentPortal';
import RequestAccess from './components/RequestAccess';

const TrustCenterPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Helmet>
        <title>Trust Center | SecureFlow</title>
        <meta name="description" content="SecureFlow Trust Center - Learn about our security practices, compliance certifications, and privacy commitments." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <TrustHero />
        <ComplianceCertifications />
        <SecurityPractices />
        <PrivacySection />
        <DocumentPortal />
        <TrustFAQ />
        <RequestAccess />
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SF</span>
                </div>
                <span className="font-semibold text-xl">SecureFlow</span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-sm">
                Secure, compliant, and transparent solutions for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Support</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Status</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} SecureFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrustCenterPage;
