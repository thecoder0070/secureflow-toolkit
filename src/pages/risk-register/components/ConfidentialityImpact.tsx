
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';

interface ConfidentialityImpactProps {
  confidentialityImpact: string;
  impactValues: Record<string, number>;
}

const ConfidentialityImpact = ({ confidentialityImpact, impactValues }: ConfidentialityImpactProps) => {
  return (
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
  );
};

export default ConfidentialityImpact;
