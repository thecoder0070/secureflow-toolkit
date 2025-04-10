
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import Navbar from '@/components/Navbar';
import ComplianceDashboardHeader from '@/components/ComplianceDashboardHeader';
import CompliancePlanCard from '@/components/CompliancePlanCard';
import ComplianceOverview from '@/components/ComplianceOverview';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ComplianceDashboardPage = () => {
  const [dataType, setDataType] = useState("real");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <ComplianceDashboardHeader />
        
        <FadeIn>
          <div className="flex justify-between items-center mb-6">
            <div className="w-full max-w-md">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by assessments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Assessments</SelectItem>
                  <SelectItem value="soc2">SOC 2</SelectItem>
                  <SelectItem value="iso27001">ISO 27001</SelectItem>
                  <SelectItem value="hipaa">HIPAA</SelectItem>
                  <SelectItem value="gdpr">GDPR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Tabs value={dataType} onValueChange={setDataType} className="w-auto">
              <TabsList>
                <TabsTrigger value="real">REAL DATA</TabsTrigger>
                <TabsTrigger value="sample">SAMPLE DATA</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </FadeIn>
        
        {/* Overview Cards */}
        <div className="mb-8">
          <ComplianceOverview />
        </div>
        
        {/* Compliance Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CompliancePlanCard title="Sample Plan One" />
          <CompliancePlanCard title="Sample Plan Two" />
        </div>
      </main>
    </div>
  );
};

export default ComplianceDashboardPage;
