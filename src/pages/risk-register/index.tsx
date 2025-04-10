
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import Navbar from '@/components/Navbar';
import RiskRegisterHeader from '@/components/RiskRegisterHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RiskRegisterPage = () => {
  // State for risk calculation
  const [threatType, setThreatType] = useState('External');
  const [confidentialityImpact, setConfidentialityImpact] = useState('Very high');
  const [integrityImpact, setIntegrityImpact] = useState('Very low');
  const [availabilityImpact, setAvailabilityImpact] = useState('Very low');
  const [controlability, setControlability] = useState('Very low');
  
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
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 pt-24 pb-16">
        <RiskRegisterHeader />
        
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-md">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead colSpan={4} className="bg-black text-white text-xl font-bold h-16">
                        Total risk score: {riskScore}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={4} className="text-sm">
                        Formula: (type of threat) * (confidentiality + integrity + availability) / Controlability
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Impact tables */}
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-black text-white font-bold">Impact</TableHead>
                        <TableHead className="bg-black text-white font-bold">{impactScore}</TableHead>
                        <TableHead className="bg-black text-white font-bold"></TableHead>
                        <TableHead className="bg-black text-white font-bold"></TableHead>
                      </TableRow>
                      <TableRow>
                        <TableHead className="font-bold">Attack severity</TableHead>
                        <TableHead className="font-bold">10</TableHead>
                        <TableHead className="font-bold"></TableHead>
                        <TableHead className="font-bold"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">Type of threat</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Y/N</TableCell>
                        <TableCell>Score</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>External</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>{threatType === 'External' ? '##' : ''}</TableCell>
                        <TableCell>{threatType === 'External' ? '10' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Internal</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>{threatType === 'Internal' ? '##' : ''}</TableCell>
                        <TableCell>{threatType === 'Internal' ? '5' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Physical</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>{threatType === 'Physical' ? '##' : ''}</TableCell>
                        <TableCell>{threatType === 'Physical' ? '1' : '0'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-black text-white font-bold">CIA</TableHead>
                        <TableHead className="bg-black text-white font-bold">14</TableHead>
                        <TableHead className="bg-black text-white font-bold"></TableHead>
                        <TableHead className="bg-black text-white font-bold">Score</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">Impact to confidentiality</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Y/N</TableCell>
                        <TableCell>Score</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>None</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>{confidentialityImpact === 'None' ? '##' : ''}</TableCell>
                        <TableCell>{confidentialityImpact === 'None' ? '0' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very low</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>{confidentialityImpact === 'Very low' ? '##' : ''}</TableCell>
                        <TableCell>{confidentialityImpact === 'Very low' ? '2' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Low</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>{confidentialityImpact === 'Low' ? '##' : ''}</TableCell>
                        <TableCell>{confidentialityImpact === 'Low' ? '4' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Medium</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>{confidentialityImpact === 'Medium' ? '##' : ''}</TableCell>
                        <TableCell>{confidentialityImpact === 'Medium' ? '6' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>High</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>{confidentialityImpact === 'High' ? '##' : ''}</TableCell>
                        <TableCell>{confidentialityImpact === 'High' ? '8' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very high</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>{confidentialityImpact === 'Very high' ? '##' : ''}</TableCell>
                        <TableCell>{confidentialityImpact === 'Very high' ? '10' : '0'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">Impact to integrity</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Y/N</TableCell>
                        <TableCell>Score</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>None</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>{integrityImpact === 'None' ? '##' : ''}</TableCell>
                        <TableCell>{integrityImpact === 'None' ? '0' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very low</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>{integrityImpact === 'Very low' ? '##' : ''}</TableCell>
                        <TableCell>{integrityImpact === 'Very low' ? '2' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Low</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>{integrityImpact === 'Low' ? '##' : ''}</TableCell>
                        <TableCell>{integrityImpact === 'Low' ? '4' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Medium</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>{integrityImpact === 'Medium' ? '##' : ''}</TableCell>
                        <TableCell>{integrityImpact === 'Medium' ? '6' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>High</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>{integrityImpact === 'High' ? '##' : ''}</TableCell>
                        <TableCell>{integrityImpact === 'High' ? '8' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very high</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>{integrityImpact === 'Very high' ? '##' : ''}</TableCell>
                        <TableCell>{integrityImpact === 'Very high' ? '10' : '0'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">Impact to availability</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Y/N</TableCell>
                        <TableCell>Score</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>None</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>{availabilityImpact === 'None' ? '##' : ''}</TableCell>
                        <TableCell>{availabilityImpact === 'None' ? '0' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very low</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>{availabilityImpact === 'Very low' ? '##' : ''}</TableCell>
                        <TableCell>{availabilityImpact === 'Very low' ? '2' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Low</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>{availabilityImpact === 'Low' ? '##' : ''}</TableCell>
                        <TableCell>{availabilityImpact === 'Low' ? '4' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Medium</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>{availabilityImpact === 'Medium' ? '##' : ''}</TableCell>
                        <TableCell>{availabilityImpact === 'Medium' ? '6' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>High</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>{availabilityImpact === 'High' ? '##' : ''}</TableCell>
                        <TableCell>{availabilityImpact === 'High' ? '8' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very high</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>{availabilityImpact === 'Very high' ? '##' : ''}</TableCell>
                        <TableCell>{availabilityImpact === 'Very high' ? '10' : '0'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
            
            {/* Right column - Controlability and Treatment options */}
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-black text-white font-bold">Controlability</TableHead>
                        <TableHead className="bg-black text-white font-bold">2</TableHead>
                        <TableHead className="bg-black text-white font-bold"></TableHead>
                        <TableHead className="bg-black text-white font-bold"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">Controlability</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Y/N</TableCell>
                        <TableCell>Score</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very low</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>{controlability === 'Very low' ? '##' : ''}</TableCell>
                        <TableCell>{controlability === 'Very low' ? '2' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Low</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>{controlability === 'Low' ? '##' : ''}</TableCell>
                        <TableCell>{controlability === 'Low' ? '4' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Medium</TableCell>
                        <TableCell>6</TableCell>
                        <TableCell>{controlability === 'Medium' ? '##' : ''}</TableCell>
                        <TableCell>{controlability === 'Medium' ? '6' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>High</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>{controlability === 'High' ? '##' : ''}</TableCell>
                        <TableCell>{controlability === 'High' ? '8' : '0'}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Very high</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>{controlability === 'Very high' ? '##' : ''}</TableCell>
                        <TableCell>{controlability === 'Very high' ? '10' : '0'}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold" colSpan={3}>Treatment options:</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Mitigate</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Avoid</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Transfer</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Accept</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card className="shadow-md mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Adjust Risk Parameters</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Threat Type</label>
                      <Select value={threatType} onValueChange={setThreatType}>
                        <SelectTrigger>
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
                        <SelectTrigger>
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
                        <SelectTrigger>
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
                        <SelectTrigger>
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
                        <SelectTrigger>
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
