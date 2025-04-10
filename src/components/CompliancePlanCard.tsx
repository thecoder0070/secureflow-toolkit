
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Users, Info } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type PlanCardProps = {
  title: string;
  className?: string;
}

const CompliancePlanCard = ({ title, className }: PlanCardProps) => {
  const [selectedAssessment, setSelectedAssessment] = useState("run_01");
  
  // Compliance status data
  const complianceData = [
    { name: 'Compliant', value: 60, color: '#6366f1' },
    { name: 'Non Compliant', value: 20, color: '#06b6d4' },
    { name: 'Not Determined', value: 20, color: '#d946ef' },
  ];
  
  // Automation status data
  const automationData = [
    { name: 'Automated', value: 70, color: '#3b82f6' },
    { name: 'Manual', value: 30, color: '#06b6d4' },
  ];
  
  // Evidence status data
  const evidenceData = [
    { name: 'With Evidence', value: 50, color: '#06b6d4' },
    { name: 'Without Evidence', value: 30, color: '#06b6d4' },
    { name: 'Awaiting User Inputs', value: 20, color: '#d946ef' },
  ];

  return (
    <FadeIn>
      <Card className={className}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <label className="text-sm text-muted-foreground mb-1 block">Select an assessment Run</label>
            <Select value={selectedAssessment} onValueChange={setSelectedAssessment}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select assessment run" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="run_01">run_01</SelectItem>
                <SelectItem value="run_02">run_02</SelectItem>
                <SelectItem value="run_03">run_03</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center p-4 border rounded-lg mb-6">
            <Users className="h-5 w-5 text-indigo-500 mr-2" />
            <div className="flex items-center justify-between w-full">
              <div className="font-medium">Assigned Users</div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold">0</span>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="relative h-56">
              <div className="absolute inset-0 flex flex-col items-center">
                <span className="text-xs font-semibold text-center mb-1">Compliance Status</span>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={complianceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {complianceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex flex-col items-center text-xs gap-1">
                  {complianceData.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative h-56">
              <div className="absolute inset-0 flex flex-col items-center">
                <span className="text-xs font-semibold text-center mb-1">Automation Status</span>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={automationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {automationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex flex-col items-center text-xs gap-1">
                  {automationData.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative h-56">
              <div className="absolute inset-0 flex flex-col items-center">
                <span className="text-xs font-semibold text-center mb-1">Evidence Status</span>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={evidenceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {evidenceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex flex-col items-center text-xs gap-1">
                  {evidenceData.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
            <button className="flex items-center text-sm text-blue-500 hover:underline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M13 8L13 13L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Controls Hierarchy
            </button>
            <button className="flex items-center text-sm text-blue-500 hover:underline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M9 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H9M9 3V11M9 3H15M9 21H15M9 21V13M15 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H15M15 3V11M15 21V13" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Leaf Controls
            </button>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
};

export default CompliancePlanCard;
