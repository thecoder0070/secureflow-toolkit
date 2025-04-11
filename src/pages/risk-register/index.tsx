
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import Navbar from '@/components/Navbar';
import RiskRegisterHeader from '@/components/RiskRegisterHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent, 
  ChartLegend,
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { AlertTriangle, Shield, CheckCircle, Info, Calendar } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const RiskRegisterPage = () => {
  // State for risk calculation
  const [threatType, setThreatType] = useState('External');
  const [confidentialityImpact, setConfidentialityImpact] = useState('Very high');
  const [integrityImpact, setIntegrityImpact] = useState('Very low');
  const [availabilityImpact, setAvailabilityImpact] = useState('Very low');
  const [controlability, setControlability] = useState('Very low');
  const [reviewPeriod, setReviewPeriod] = useState('Quarterly');
  
  // Values mapping
  const threatValues = {
    External: 10,
    Internal: 5,
    Physical: 1
  };
  
  const impactValues = {
    None: 0,
    'Very low': 2,
    Low: 4,
    Medium: 6,
    High: 8,
    'Very high': 10
  };
  
  const controlabilityValues = {
    'Very low': 2,
    Low: 4,
    Medium: 6,
    High: 8,
    'Very high': 10
  };
  
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

  // Sample risk distribution data for chart
  const riskDistributionData = [
    { name: 'High', value: 8, fill: '#ef4444' },
    { name: 'Medium', value: 15, fill: '#f97316' },
    { name: 'Low', value: 27, fill: '#22c55e' },
  ];

  // Risk severity chart data
  const riskSeverityData = [
    { name: 'Critical', value: 5 },
    { name: 'High', value: 12 },
    { name: 'Medium', value: 18 },
    { name: 'Low', value: 25 },
  ];

  // Chart colors
  const severityColors = ['#dc2626', '#ef4444', '#f97316', '#22c55e'];

  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return 'bg-red-600 text-white';
    if (score >= 50) return 'bg-orange-500 text-white';
    if (score >= 30) return 'bg-amber-500 text-white';
    return 'bg-green-500 text-white';
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <RiskRegisterHeader />
        
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Risk Treatment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-blue-500" /> 
                      <span>Mitigate</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" /> 
                      <span>Avoid</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-purple-500" /> 
                      <span>Transfer</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" /> 
                      <span>Accept</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-md col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Risk Distribution</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <ChartContainer className="h-[200px]" config={{}}>
                  <PieChart>
                    <Pie
                      data={riskDistributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {riskDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={<ChartTooltipContent />} 
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="shadow-md col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Risk Severity</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[200px]" config={{}}>
                  <BarChart data={riskSeverityData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {riskSeverityData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={severityColors[index]} />
                      ))}
                    </Bar>
                    <ChartTooltip 
                      content={<ChartTooltipContent />} 
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Impact tables */}
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Threat Assessment</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-medium">Type of threat</TableHead>
                          <TableHead className="font-medium">Value</TableHead>
                          <TableHead className="font-medium">Selected</TableHead>
                          <TableHead className="font-medium">Score</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>External</TableCell>
                          <TableCell>10</TableCell>
                          <TableCell>{threatType === 'External' ? 
                            <CheckCircle className="h-4 w-4 text-green-500" /> : ''}</TableCell>
                          <TableCell>{threatType === 'External' ? '10' : '0'}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Internal</TableCell>
                          <TableCell>5</TableCell>
                          <TableCell>{threatType === 'Internal' ? 
                            <CheckCircle className="h-4 w-4 text-green-500" /> : ''}</TableCell>
                          <TableCell>{threatType === 'Internal' ? '5' : '0'}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Physical</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>{threatType === 'Physical' ? 
                            <CheckCircle className="h-4 w-4 text-green-500" /> : ''}</TableCell>
                          <TableCell>{threatType === 'Physical' ? '1' : '0'}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Confidentiality Impact</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableBody>
                        {Object.entries(impactValues).map(([level, value]) => (
                          <TableRow key={level}>
                            <TableCell>{level}</TableCell>
                            <TableCell>{value}</TableCell>
                            <TableCell>{confidentialityImpact === level ? 
                              <CheckCircle className="h-4 w-4 text-green-500" /> : ''}</TableCell>
                            <TableCell>{confidentialityImpact === level ? value : '0'}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right column - Controls and settings */}
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Risk Parameters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Threat Type</label>
                      <Select value={threatType} onValueChange={setThreatType}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select threat type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="External">External</SelectItem>
                          <SelectItem value="Internal">Internal</SelectItem>
                          <SelectItem value="Physical">Physical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Impact to Confidentiality</label>
                      <Select value={confidentialityImpact} onValueChange={setConfidentialityImpact}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select impact level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="Very low">Very low</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Very high">Very high</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Impact to Integrity</label>
                      <Select value={integrityImpact} onValueChange={setIntegrityImpact}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select impact level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="Very low">Very low</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Very high">Very high</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Impact to Availability</label>
                      <Select value={availabilityImpact} onValueChange={setAvailabilityImpact}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select impact level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="None">None</SelectItem>
                          <SelectItem value="Very low">Very low</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Very high">Very high</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Controlability</label>
                      <Select value={controlability} onValueChange={setControlability}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select controlability level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Very low">Very low</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Very high">Very high</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Review Period</label>
                      <Select value={reviewPeriod} onValueChange={setReviewPeriod}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select review period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Monthly">Monthly</SelectItem>
                          <SelectItem value="Quarterly">Quarterly</SelectItem>
                          <SelectItem value="Bi-annually">Bi-annually</SelectItem>
                          <SelectItem value="Annually">Annually</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Risk Scoring Matrix</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="relative">
                    <div className="absolute -left-7 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-gray-500">
                      Impact
                    </div>
                    
                    <div className="grid grid-cols-5 gap-1 text-center text-xs ml-6">
                      <div className="p-2 bg-gray-200 font-medium">Impact</div>
                      <div className="p-2 bg-gray-200 font-medium">Very Low</div>
                      <div className="p-2 bg-gray-200 font-medium">Low</div>
                      <div className="p-2 bg-gray-200 font-medium">Medium</div>
                      <div className="p-2 bg-gray-200 font-medium">High</div>
                      
                      <div className="p-2 bg-gray-200 font-medium">Very Low</div>
                      <div className="p-2 bg-green-100">1</div>
                      <div className="p-2 bg-green-100">2</div>
                      <div className="p-2 bg-yellow-100">3</div>
                      <div className="p-2 bg-yellow-100">4</div>
                      
                      <div className="p-2 bg-gray-200 font-medium">Low</div>
                      <div className="p-2 bg-green-100">2</div>
                      <div className="p-2 bg-yellow-100">4</div>
                      <div className="p-2 bg-yellow-100">6</div>
                      <div className="p-2 bg-orange-100">8</div>
                      
                      <div className="p-2 bg-gray-200 font-medium">Medium</div>
                      <div className="p-2 bg-yellow-100">3</div>
                      <div className="p-2 bg-yellow-100">6</div>
                      <div className="p-2 bg-orange-100">9</div>
                      <div className="p-2 bg-red-100">12</div>
                      
                      <div className="p-2 bg-gray-200 font-medium">High</div>
                      <div className="p-2 bg-yellow-100">4</div>
                      <div className="p-2 bg-orange-100">8</div>
                      <div className="p-2 bg-red-100">12</div>
                      <div className="p-2 bg-red-200">16</div>
                    </div>
                    
                    <div className="text-center mt-2 text-xs font-medium text-gray-500">
                      Controlability
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
};

export default RiskRegisterPage;
