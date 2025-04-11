
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Calendar } from 'lucide-react';

interface RiskScoreAnalysisProps {
  threatType: string;
  threatValues: Record<string, number>;
  impactValues: Record<string, number>;
  confidentialityImpact: string;
  integrityImpact: string;
  availabilityImpact: string;
  controlability: string;
  controlabilityValues: Record<string, number>;
  reviewPeriod: string;
  setReviewPeriod: (value: string) => void;
}

const RiskScoreAnalysis = ({
  threatType,
  threatValues,
  impactValues,
  confidentialityImpact,
  integrityImpact,
  availabilityImpact,
  controlability,
  controlabilityValues,
  reviewPeriod,
  setReviewPeriod
}: RiskScoreAnalysisProps) => {
  
  // Calculate risk score
  const calculateRiskScore = () => {
    const threatValue = threatValues[threatType as keyof typeof threatValues];
    const confValue = impactValues[confidentialityImpact as keyof typeof impactValues];
    const intValue = impactValues[integrityImpact as keyof typeof impactValues];
    const availValue = impactValues[availabilityImpact as keyof typeof impactValues];
    const controlValue = controlabilityValues[controlability as keyof typeof controlabilityValues];
    
    if (controlValue === 0) return 0;
    
    return Math.round((threatValue * (confValue + intValue + availValue)) / controlValue);
  };
  
  const riskScore = calculateRiskScore();
  
  // Calculate impact score
  const calculateImpactScore = () => {
    const confValue = impactValues[confidentialityImpact as keyof typeof impactValues];
    const intValue = impactValues[integrityImpact as keyof typeof impactValues];
    const availValue = impactValues[availabilityImpact as keyof typeof impactValues];
    
    return confValue + intValue + availValue;
  };
  
  const impactScore = calculateImpactScore();

  // Top 5 risks data
  const topRisksData = [
    { id: 'R-001', name: 'Data breach', score: 85, category: 'Information Security' },
    { id: 'R-002', name: 'Service outage', score: 72, category: 'Operational' },
    { id: 'R-003', name: 'Compliance violation', score: 68, category: 'Regulatory' },
    { id: 'R-004', name: 'Vendor failure', score: 61, category: 'Supply Chain' },
    { id: 'R-005', name: 'Unauthorized access', score: 58, category: 'Information Security' },
  ];

  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return 'bg-red-600 text-white';
    if (score >= 50) return 'bg-orange-500 text-white';
    if (score >= 30) return 'bg-amber-500 text-white';
    return 'bg-green-500 text-white';
  };

  return (
    <Card className="shadow-md md:col-span-2">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Risk Score Analysis
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Review Period:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1 text-sm">
                <Calendar className="h-4 w-4" />
                {reviewPeriod}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setReviewPeriod('Monthly')}>
                Monthly
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setReviewPeriod('Quarterly')}>
                Quarterly
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setReviewPeriod('Bi-annually')}>
                Bi-annually
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setReviewPeriod('Annually')}>
                Annually
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="10" 
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={riskScore > 80 ? "#dc2626" : riskScore > 50 ? "#f97316" : riskScore > 30 ? "#facc15" : "#22c55e"}
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset={283 - ((283 * Math.min(riskScore, 100)) / 100)}
                className="transition-all duration-1000 ease-in-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">{riskScore}</span>
              <span className="text-sm text-muted-foreground">Risk Score</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm mb-2">Risk Score Formula:</p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded block mb-4">
              (Threat Type × (Confidentiality + Integrity + Availability)) ÷ Controllability
            </code>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-sm font-medium">Threat Value</div>
                <div className="text-2xl font-bold">{threatValues[threatType as keyof typeof threatValues]}</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-sm font-medium">Impact Score</div>
                <div className="text-2xl font-bold">{impactScore}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium mb-3">Top 5 Risks</h4>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">ID</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right w-16">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topRisksData.map((risk) => (
                  <TableRow key={risk.id}>
                    <TableCell className="font-mono text-xs">{risk.id}</TableCell>
                    <TableCell>{risk.name}</TableCell>
                    <TableCell>{risk.category}</TableCell>
                    <TableCell className="text-right">
                      <span className={`inline-block text-xs px-2 py-1 rounded-full ${getRiskScoreColor(risk.score)}`}>
                        {risk.score}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskScoreAnalysis;
