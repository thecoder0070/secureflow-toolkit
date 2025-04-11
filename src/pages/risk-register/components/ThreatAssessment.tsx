
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';

interface ThreatAssessmentProps {
  threatType: string;
}

const ThreatAssessment = ({ threatType }: ThreatAssessmentProps) => {
  return (
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
  );
};

export default ThreatAssessment;
