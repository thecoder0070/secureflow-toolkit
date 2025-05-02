
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import ControlsHeader from './components/ControlsHeader';
import MiddlewareSection from './components/MiddlewareSection';
import IntegrationSection from './components/IntegrationSection';

const ControlsManagementPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Helmet>
        <title>Controls Management | SecureFlow</title>
        <meta name="description" content="SecureFlow Controls Management - Continuous controls management across your security and compliance infrastructure." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        <ControlsHeader />
        <MiddlewareSection />
        <IntegrationSection />
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} SecureFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ControlsManagementPage;
